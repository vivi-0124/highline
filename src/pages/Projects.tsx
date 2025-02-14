import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: "photo-1533174072545-7a4b6ad7a6c3",
    title: "サマーフェスティバル2023",
    date: "2023年8月",
    description: "野外音楽フェスティバル",
  },
  {
    id: "photo-1470229722913-7c0e2dbbafd3",
    title: "ビーチパーティー",
    date: "2023年7月",
    description: "砂浜でのライブイベント",
  },
  {
    id: "photo-1516450360452-9312f5e86fc7",
    title: "クラブイベント",
    date: "2023年6月",
    description: "ナイトクラブでのDJイベント",
  },
  {
    id: "photo-1429962714451-bb934ecdc4ec",
    title: "ウェディングパーティー",
    date: "2023年5月",
    description: "結婚式の音響・照明演出",
  },
  {
    id: "photo-1493225457124-a3eb161ffa5f",
    title: "企業パーティー",
    date: "2023年4月",
    description: "企業周年記念イベント",
  },
  {
    id: "photo-1506157786151-b8491531f063",
    title: "地域フェスティバル",
    date: "2023年3月",
    description: "地域のお祭りイベント",
  },
  {
    id: "photo-1501386761578-eac5c94b800a",
    title: "スポーツイベント",
    date: "2023年2月",
    description: "マラソン大会の音響サポート",
  },
  {
    id: "photo-1574391884720-bbc3740c59d1",
    title: "新年会イベント",
    date: "2023年1月",
    description: "ホテルでの新年会パーティー",
  },
];

function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            トップページに戻る
          </Link>
        </div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          実績一覧
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden group"
            >
              <div className="relative aspect-video">
                <img
                  src={`https://images.unsplash.com/${project.id}?auto=format&fit=crop&q=80`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center p-4">
                    <Calendar className="w-6 h-6 mx-auto mb-2" />
                    <p className="font-bold">{project.date}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;