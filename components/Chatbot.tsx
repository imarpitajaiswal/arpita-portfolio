'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaPaperPlane, FaUser } from 'react-icons/fa';

interface Message {
  id: string;
  role: 'user' | 'ai';
  text: string;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'ai', text: "Hello! I am Arpita's personal AI agent. You can ask me about her skills, projects, or experience. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => { scrollToBottom(); }, [messages, isTyping]);

  // Simulated AI Logic (Ready for OpenAI API integration)
  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate network delay and AI thinking
    setTimeout(() => {
      let aiResponse = "I'm currently running in demo mode! To see my full Agentic capabilities, Arpita will connect my neural pathways to the OpenAI API soon.";
      
      const lowerInput = userMsg.text.toLowerCase();
      if (lowerInput.includes('who is') || lowerInput.includes('about')) {
        aiResponse = "Arpita is a highly skilled AI Engineer and Full Stack Developer. She specializes in building scalable web architectures and intelligent Agentic AI systems.";
      } else if (lowerInput.includes('skills') || lowerInput.includes('tech')) {
        aiResponse = "Her core stack includes Python, LangChain, Next.js, React, Node.js, FastAPI, AWS, and advanced Machine Learning/Vector Database integrations.";
      } else if (lowerInput.includes('project')) {
        aiResponse = "She has built some incredible systems, including an Agentic AI Orchestrator, a Neural Analytics Dashboard, and an Enterprise RAG Pipeline. Check out the Projects section above!";
      }

      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'ai', text: aiResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <section id="chatbot" className="relative w-full max-w-5xl mx-auto px-6 md:px-12 py-24 min-h-[80vh] flex flex-col justify-center">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 space-y-4"
      >
        <h2 className="font-heading text-primary text-sm md:text-lg font-medium tracking-widest uppercase flex items-center justify-center gap-2">
          <FaRobot className="animate-bounce" /> Ask My AI Bot
        </h2>
        <h3 className="font-heading text-4xl md:text-5xl font-bold text-white">
          Interactive <span className="text-primary-glow">Agent</span>
        </h3>
      </motion.div>

      {/* Chat Interface */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-full h-[500px] flex flex-col bg-glass-bg backdrop-blur-xl border border-glass-border shadow-neon-purple rounded-2xl overflow-hidden relative z-10"
      >
        {/* Chat Header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10 bg-black/40">
          <div className="relative">
            <div className="absolute inset-0 bg-primary blur-md opacity-50 rounded-full animate-pulse" />
            <div className="w-10 h-10 rounded-full bg-gray-900 border border-primary flex items-center justify-center relative z-10">
              <FaRobot className="text-primary text-xl" />
            </div>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white tracking-wide">ArpitaOS Agent v1.0</h4>
            <p className="text-xs font-mono text-primary animate-pulse">● Online & Listening</p>
          </div>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-transparent">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, x: msg.role === 'user' ? 20 : -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                className={`flex gap-4 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
              >
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-secondary/20 border border-secondary text-secondary' : 'bg-primary/20 border border-primary text-primary'}`}>
                  {msg.role === 'user' ? <FaUser size={12} /> : <FaRobot size={14} />}
                </div>
                
                {/* Message Bubble */}
                <div className={`p-4 rounded-2xl font-body text-sm md:text-base leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-secondary/10 border border-secondary/30 text-white rounded-tr-none' 
                    : 'bg-white/5 border border-white/10 text-gray-300 rounded-tl-none shadow-[0_0_15px_rgba(168,85,247,0.1)]'
                }`}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4 max-w-[80%]">
              <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-primary/20 border border-primary text-primary">
                <FaRobot size={14} />
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 rounded-tl-none flex gap-1 items-center">
                <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-white/10 bg-black/40">
          <div className="relative flex items-center group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask me anything about Arpita..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-6 pr-14 text-white font-body focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-gray-500"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="absolute right-2 p-2 rounded-full bg-primary/20 text-primary hover:bg-primary/40 hover:shadow-neon-purple transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaPaperPlane size={16} className="relative -left-px" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}