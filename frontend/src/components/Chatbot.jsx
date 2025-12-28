import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from './ui/button';
import { chatbotData } from '../data/mock';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: chatbotData.welcomeMessage },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text = inputValue) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: text,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const response = chatbotData.responses[text] || 
        "Thanks for your question! Our team will get back to you soon. In the meantime, feel free to join our waiting list to stay updated on the launch.";
      
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        text: response,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div id="chatbot" className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] bg-[#111111] border border-[#1a1a1a] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#70DB3E] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center">
                <Bot className="w-6 h-6 text-black" />
              </div>
              <div>
                <p className="font-semibold text-black">QTM Assistant</p>
                <p className="text-xs text-black/70">Online • Ready to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center hover:bg-black/30 transition-colors"
            >
              <X className="w-4 h-4 text-black" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-[300px] overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-end gap-2 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'bot'
                      ? 'bg-[#70DB3E]/20'
                      : 'bg-[#1a1a1a]'
                  }`}
                >
                  {message.type === 'bot' ? (
                    <Bot className="w-4 h-4 text-[#70DB3E]" />
                  ) : (
                    <User className="w-4 h-4 text-gray-400" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.type === 'bot'
                      ? 'bg-[#1a1a1a] text-gray-300 rounded-bl-none'
                      : 'bg-[#70DB3E] text-black rounded-br-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          <div className="px-4 pb-2">
            <div className="flex flex-wrap gap-2">
              {chatbotData.suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(suggestion)}
                  className="px-3 py-1 text-xs bg-[#1a1a1a] text-gray-400 rounded-full hover:bg-[#70DB3E]/20 hover:text-[#70DB3E] transition-all duration-300"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#1a1a1a]">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-[#1a1a1a] border border-[#222222] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#70DB3E] transition-colors"
              />
              <Button
                onClick={() => handleSend()}
                className="bg-[#70DB3E] text-black hover:bg-[#5BC236] rounded-xl px-4"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen
            ? 'bg-[#1a1a1a] rotate-0'
            : 'bg-[#70DB3E] hover:bg-[#5BC236] hover:shadow-[0_0_40px_rgba(112,219,62,0.6)] hover:-translate-y-1'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-black" />
        )}
      </button>

      {/* Pulse Animation */}
      {!isOpen && (
        <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 animate-ping" />
      )}
    </div>
  );
};

export default Chatbot;
