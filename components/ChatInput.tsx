import React, { useState, useRef, useEffect } from 'react';
import { SendIcon, DebugIcon } from './icons/ActionIcons';

interface ChatInputProps {
  onSendMessage: (input: string, mode: 'chat' | 'debug') => void;
  isLoading: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input, 'chat');
      setInput('');
    }
  };
  
  const handleDebugClick = () => {
    if (input.trim() && !isLoading) {
        onSendMessage(input, 'debug');
        setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleChatSubmit(e);
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const scrollHeight = textarea.scrollHeight;
      textarea.style.height = `${scrollHeight}px`;
    }
  }, [input]);

  return (
    <div className="p-4 bg-gray-50">
      <form onSubmit={handleChatSubmit} className="relative bg-white border border-gray-300 rounded-xl p-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Guruji anything or paste code to debug..."
          className="w-full pl-3 pr-24 py-2 bg-transparent text-green-900 font-bold border-none focus:ring-0 resize-none max-h-48 overflow-y-auto"
          rows={1}
          disabled={isLoading}
        />
        <button
          type="button"
          onClick={handleDebugClick}
          disabled={isLoading || !input.trim()}
          className="absolute right-14 top-1/2 -translate-y-1/2 bg-green-600 text-white rounded-lg p-2 disabled:bg-green-300 disabled:cursor-not-allowed hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
          aria-label="Analyze and debug code"
          title="Analyze and debug code"
        >
          <DebugIcon />
        </button>
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-lg p-2 disabled:bg-blue-300 disabled:cursor-not-allowed hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          aria-label="Send message"
        >
          <SendIcon />
        </button>
      </form>
    </div>
  );
};