import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Chat } from '@google/genai';
import { Header } from './components/Header';
import { ChatWindow } from './components/ChatWindow';
import { ChatInput } from './components/ChatInput';
import { startChat, sendMessageStream } from './services/geminiService';
import { SYSTEM_INSTRUCTION } from './constants';
import type { Message, Progress } from './types';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [progress, setProgress] = useState<Progress>({ xp: 0, badges: [], streak: 0 });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const chatSessionRef = useRef<Chat | null>(null);

  const parseProgress = (text: string): Progress | null => {
    const progressRegex = /Progress:\s*(\d+)\s*XP\s*\|\s*Badges:\s*([^|]*)\s*\|\s*Streak:\s*(\d+)/;
    const match = text.match(progressRegex);
    if (match) {
      const xp = parseInt(match[1], 10);
      const badges = match[2].trim() === "None" ? [] : match[2].split(',').map(b => b.trim()).filter(Boolean);
      const streak = parseInt(match[3], 10);
      return { xp, badges, streak };
    }
    return null;
  };

  const processStream = useCallback(async (stream: AsyncGenerator<any, any, undefined>) => {
    let fullResponse = '';
    let lastMessageId = '';

    setMessages(prev => {
        const newMessage: Message = { id: Date.now().toString(), role: 'model', content: '' };
        lastMessageId = newMessage.id;
        return [...prev, newMessage];
    });

    for await (const chunk of stream) {
        const chunkText = chunk.text;
        fullResponse += chunkText;
        setMessages(prev =>
            prev.map(msg =>
                msg.id === lastMessageId ? { ...msg, content: fullResponse.split('---').slice(0, -1).join('---') } : msg
            )
        );
    }
    
    const newProgress = parseProgress(fullResponse);
    if (newProgress) {
        setProgress(newProgress);
    }

    setMessages(prev =>
        prev.map(msg =>
            msg.id === lastMessageId ? { ...msg, content: fullResponse.replace(/---[\s\S]*Progress:[\s\S]*/, '').trim() } : msg
        )
    );
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const initChat = async () => {
      chatSessionRef.current = startChat(SYSTEM_INSTRUCTION);
      setIsLoading(true);
      const stream = await sendMessageStream(chatSessionRef.current, "Namaste Guruji! I'm ready to learn.");
      await processStream(stream);
    };
    initChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSendMessage = async (userInput: string, mode: 'chat' | 'debug' = 'chat') => {
    if (!userInput.trim() || isLoading) return;
    
    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: userInput };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    let prompt = userInput;
    if (mode === 'debug') {
      prompt = `My student has written this Python code and needs help. Please analyze it. Check for bugs, suggest improvements, and explain it line-by-line in a very simple way, according to your persona rules. Here is the code:\n\n---\n\n${userInput}`;
    }

    if (chatSessionRef.current) {
        const stream = await sendMessageStream(chatSessionRef.current, prompt);
        await processStream(stream);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 font-sans">
      <Header progress={progress} />
      <main className="flex-1 overflow-hidden">
        <ChatWindow messages={messages} isLoading={isLoading} />
      </main>
      <footer className="bg-gray-50 border-t border-gray-200">
         <div className="max-w-4xl mx-auto">
            <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
         </div>
      </footer>
    </div>
  );
};

export default App;