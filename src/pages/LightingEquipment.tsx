import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Lightbulb, Zap, Flashlight, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const equipment = [
  {
    category: "ムービングライト",
    icon: Flashlight,
    items: [
      "Martin MAC Quantum Profile",
      "Martin MAC Aura XB",
      "Robe Pointe",
      "Clay Paky Sharpy",
      "Vari-Lite VL2600 Profile"
    ]
  },
  {
    category: "LEDライト",
    icon: Lightbulb,
    items: [
      "Chauvet COLORado 1-Tri Tour",
      "ADJ COB Cannon Wash",
      "Elation SixPar 200",
      "Martin RUSH PAR 2 RGBW Zoom",
      "Astera AX1 PixelTube"
    ]
  },
  {
    category: "レーザー",
    icon: Zap,
    items: [
      "Kvant Clubmax 10 RGB",
      "X-Laser Mercury",
      "LaserWorld CS-1000RGB",
      "RYGB 30W レーザープロジェクター"
    ]
  },
  {
    category: "コントロール",
    icon: Monitor,
    items: [
      "MA Lighting grandMA3",
      "Avolites Tiger Touch II",
      "High End Systems Hog 4",
      "Pangolin BEYOND"
    ]
  }
];

function LightingEquipment() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            トップページに戻る
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Lightbulb className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
          <h1 className="text-4xl font-bold">照明機材一覧</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {equipment.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <category.icon className="w-8 h-8 text-yellow-400" />
                <h2 className="text-2xl font-bold">{category.category}</h2>
              </div>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LightingEquipment;