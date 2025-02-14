import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Music4, 
  Lightbulb, 
  Zap, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Calendar, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Projects from './pages/Projects';
import SoundEquipment from './pages/SoundEquipment';
import LightingEquipment from './pages/LightingEquipment';

function Section({ children, className = '', id = '' }: { children: React.ReactNode; className?: string; id?: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { href: '#services', label: 'サービス' },
    { href: '#equipment', label: '所有機材' },
    { href: '#projects', label: '実績' },
    { href: '#contact', label: 'お問い合わせ' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="text-2xl font-bold text-yellow-400">HIGHLINE</Link>
            <div className="flex gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-bold text-yellow-400">HIGHLINE</Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-40 md:hidden pt-16"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col gap-6">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function InstagramFeed() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array(4).fill(null).map((_, index) => (
        <div
          key={index}
          className="aspect-square bg-gray-800 rounded-lg overflow-hidden relative group"
        >
          <img
            src={`https://images.unsplash.com/photo-${1500000000000 + index}?auto=format&fit=crop&q=80`}
            alt={`Instagram post ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Instagram className="w-8 h-8 text-white" />
          </div>
        </div>
      ))}
    </div>
  );
}

function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
            alt="Concert background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400"
          >
            HIGHLINE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8"
          >
            宮古島の音響・照明のプロフェッショナル
          </motion.p>
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors inline-block"
          >
            お問い合わせ
          </motion.a>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" className="bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">サービス</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <Music4 className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-2xl font-bold mb-4">音響機材</h3>
              <p>プロフェッショナルな音響システムで、最高の音響体験を提供します。</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <Lightbulb className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-2xl font-bold mb-4">照明機材</h3>
              <p>最新の照明機材で、イベントを華やかに演出します。</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <Zap className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-2xl font-bold mb-4">レーザー</h3>
              <p>迫力のあるレーザー演出で、会場を魅力的な空間に変えます。</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Equipment Section */}
      <Section id="equipment">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">所有機材</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/sound-equipment" className="bg-gray-800 p-6 rounded-lg group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80"
                  alt="音響機材"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center p-4">
                    <h4 className="text-xl font-bold mb-2">高品質な音響システム</h4>
                    <p>最新のデジタル機器で高品質なサウンドを実現</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">音響システム</h3>
                <ChevronRight className="text-yellow-400" />
              </div>
            </Link>
            <Link to="/lighting-equipment" className="bg-gray-800 p-6 rounded-lg group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80"
                  alt="照明機材"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center p-4">
                    <h4 className="text-xl font-bold mb-2">多彩な照明システム</h4>
                    <p>LED技術とレーザーで魅力的な空間を演出</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">照明システム</h3>
                <ChevronRight className="text-yellow-400" />
              </div>
            </Link>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">実績</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "photo-1533174072545-7a4b6ad7a6c3",
              "photo-1470229722913-7c0e2dbbafd3",
              "photo-1516450360452-9312f5e86fc7",
              "photo-1429962714451-bb934ecdc4ec"
            ].map((photoId, index) => (
              <div key={index} className="relative group aspect-square">
                <img
                  src={`https://images.unsplash.com/${photoId}?auto=format&fit=crop&q=80`}
                  alt={`イベント${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                  <div className="text-center p-2">
                    <Calendar className="w-6 h-6 mx-auto mb-2" />
                    <p className="text-sm font-bold">イベント {index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              全ての実績を見る
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Instagram Feed Section */}
      <Section className="bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Instagram</h2>
          <InstagramFeed />
          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/highline098"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span>@highline098</span>
            </a>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">お問い合わせ</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">お名前</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">メールアドレス</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">メッセージ</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                送信する
              </button>
            </form>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="w-6 h-6 text-yellow-400 mr-3" />
                <span>0980-XX-XXXX</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="w-6 h-6 text-yellow-400 mr-3" />
                <span>info@highline098.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="w-6 h-6 text-yellow-400 mr-3" />
                <span>宮古島市</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-gray-100">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sound-equipment" element={<SoundEquipment />} />
          <Route path="/lighting-equipment" element={<LightingEquipment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;