import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Predefined answers for common questions
  const getBotResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    // Product related questions
    if (lowerQuestion.includes('milk') || lowerQuestion.includes('dairy') || lowerQuestion.includes('cream') || lowerQuestion.includes('cheese') || lowerQuestion.includes('yogurt') || lowerQuestion.includes('butter')) {
      return "We offer a wide range of dairy products including Pasteurized Cow Milk, Gold Milk, Standardized Milk, Toned Milk, Buttermilk, Cream, Cheese, Yogurt, and Butter. All our milk products are fresh and processed under strict quality control to ensure the best taste and nutrition. Our dairy products are sourced from healthy cows and are rich in vitamins and minerals.";
    }
    
    if (lowerQuestion.includes('sugar') || lowerQuestion.includes('sweetener') || lowerQuestion.includes('honey') || lowerQuestion.includes('jaggery')) {
      return "We provide high-quality sugar products including Brown Sugar, Pure White Sugar, natural sweeteners, Honey, and Jaggery. Our sugar products are processed and packaged under strict quality standards to ensure purity, flavor, and health benefits.";
    }

    if (lowerQuestion.includes('price') || lowerQuestion.includes('cost') || lowerQuestion.includes('pricing') || lowerQuestion.includes('discount')) {
      return "Our product prices vary based on type, package size, and current market conditions. Please visit our products page or contact our sales team for detailed pricing information, special offers, and bulk purchase discounts.";
    }

    // Company related questions
    if (lowerQuestion.includes('about') || lowerQuestion.includes('company') || lowerQuestion.includes('information') || lowerQuestion.includes('history')) {
      return "HGR FOOD AND AGRO PRODUCT Pvt. Ltd. is a leading dairy and food products company dedicated to quality and innovation. We are committed to providing high-quality products while maintaining the highest standards of food safety and customer satisfaction. Our company has a rich history of excellence in the dairy industry and a strong commitment to sustainability.";
    }

    if (lowerQuestion.includes('contact') || lowerQuestion.includes('location') || lowerQuestion.includes('address') || lowerQuestion.includes('support')) {
      return "You can contact us at info@hgrfood.com or call us at +91 123 456 7890. Our office is located at [Your Company Address]. Visit our contact page for more details, customer support, and inquiries.";
    }

    if (lowerQuestion.includes('delivery') || lowerQuestion.includes('shipping') || lowerQuestion.includes('logistics') || lowerQuestion.includes('tracking')) {
      return "We provide daily delivery services across various regions. Our products are delivered fresh and on time. Contact our customer service for specific delivery information in your area, tracking your order, and to check availability.";
    }

    // Quality related questions
    if (lowerQuestion.includes('quality') || lowerQuestion.includes('certification') || lowerQuestion.includes('standards') || lowerQuestion.includes('safety')) {
      return "We maintain the highest quality standards with FSSAI certification and other relevant certifications. Our products undergo rigorous quality checks and are processed in state-of-the-art facilities to ensure safety, excellence, and compliance with health regulations.";
    }

    // Additional information
    if (lowerQuestion.includes('recipes') || lowerQuestion.includes('usage') || lowerQuestion.includes('cooking')) {
      return "Explore our website for delicious recipes using our dairy products, including desserts, beverages, and savory dishes. Our products can enhance your cooking and baking experience, providing rich flavors and nutritional benefits.";
    }

    // Default response
    return "Thank you for your question. For more specific information, please contact our customer service team or visit our website's relevant sections for detailed insights, FAQs, and assistance.";
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Add bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);

    setInputText('');
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-[#2C5530] text-white rounded-full shadow-lg hover:bg-[#234426] transition-colors z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-24 right-6 w-96 bg-white rounded-2xl shadow-2xl z-50"
          >
            {/* Header */}
            <div className="p-4 bg-[#2C5530] text-white rounded-t-2xl flex justify-between items-center">
              <div>
                <h3 className="font-semibold">HGR Food Support</h3>
                <p className="text-sm text-green-100">Ask us anything about our products and services</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-[#2C5530] text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-[#2C5530]"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-[#2C5530] text-white rounded-lg hover:bg-[#234426] transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 