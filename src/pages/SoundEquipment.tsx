import { motion } from 'framer-motion';
import { ArrowLeft, Music4, Volume2, Mic2, Speaker, Sliders } from 'lucide-react';
import { Link } from 'react-router-dom';

const equipment = [
  {
    category: "スピーカーシステム",
    icon: Speaker,
    items: [
      "NEXO GEO M10 ラインアレイスピーカー",
      "NEXO PS15 フルレンジスピーカー",
      "NEXO LS18 サブウーファー",
      "Electro-Voice ELX200-12P パワードスピーカー",
      "JBL EON ONE PRO ポータブルPAシステム"
    ]
  },
  {
    category: "ミキサー",
    icon: Sliders,
    items: [
      "Yamaha CL5 デジタルミキサー",
      "Yamaha QL1 デジタルミキサー",
      "Allen & Heath SQ-5 デジタルミキサー",
      "Behringer X32 デジタルミキサー"
    ]
  },
  {
    category: "マイク",
    icon: Mic2,
    items: [
      "Shure QLX-D ワイヤレスシステム",
      "Shure SM58 ダイナミックマイク",
      "Shure SM57 楽器用マイク",
      "AKG C414 コンデンサーマイク",
      "Sennheiser e935 ボーカルマイク"
    ]
  },
  {
    category: "パワーアンプ",
    icon: Volume2,
    items: [
      "Crown XTi 6002 パワーアンプ",
      "QSC PLD4.5 パワーアンプ",
      "Powersoft K3 パワーアンプ"
    ]
  }
];

function SoundEquipment() {
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
          <Music4 className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
          <h1 className="text-4xl font-bold">音響機材一覧</h1>
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

export default SoundEquipment;