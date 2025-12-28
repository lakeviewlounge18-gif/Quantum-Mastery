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
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(166,190,21)] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[rgb(17,17,19)] flex items-center justify-center">
                <Bot className="w-6 h-6 text-[rgb(218,255,1)]" />
              </div>
              <div>
                <p className="font-semibold text-[rgb(17,17,19)]">QEM Assistant</p>
                <p className="text-xs text-[rgb(17,17,19)]/70">Online • Ready to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-[rgb(17,17,19)]/20 flex items-center justify-center hover:bg-[rgb(17,17,19)]/30 transition-colors"
            >
              <X className="w-4 h-4 text-[rgb(17,17,19)]" />
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
                      ? 'bg-[rgb(218,255,1)]/20'
                      : 'bg-[rgb(63,63,63)]'
                  }`}
                >
                  {message.type === 'bot' ? (
                    <Bot className="w-4 h-4 text-[rgb(218,255,1)]" />
                  ) : (
                    <User className="w-4 h-4 text-white" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.type === 'bot'
                      ? 'bg-[rgb(38,40,42)] text-[rgb(218,218,218)] rounded-bl-none'
                      : 'bg-[rgb(218,255,1)] text-[rgb(17,17,19)] rounded-br-none'
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
                  className="px-3 py-1 text-xs bg-[rgb(38,40,42)] text-[rgb(161,161,170)] rounded-full hover:bg-[rgb(218,255,1)]/20 hover:text-[rgb(218,255,1)] transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[rgb(63,63,63)]">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-[rgb(38,40,42)] border border-[rgb(63,63,63)] rounded-xl px-4 py-3 text-white placeholder-[rgb(161,161,170)] focus:outline-none focus:border-[rgb(218,255,1)] transition-colors"
              />
              <Button
                onClick={() => handleSend()}
                className="bg-[rgb(218,255,1)] text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)] rounded-xl px-4"
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
            ? 'bg-[rgb(63,63,63)] rotate-0'
            : 'bg-[rgb(218,255,1)] hover:bg-[rgb(166,190,21)] hover:shadow-[0_0_30px_rgba(218,255,1,0.5)]'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-[rgb(17,17,19)]" />
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
