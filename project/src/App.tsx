import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Dashboard from './pages/admin/Dashboard';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { ChatBot } from './components/ChatBot';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        <main className="flex-grow">
          <div className="max-w-8xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;