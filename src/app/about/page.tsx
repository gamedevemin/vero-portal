'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { 
  BeakerIcon,
  UserGroupIcon,
  SparklesIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

const values = [
  {
    icon: BeakerIcon,
    title: 'İnovasyon',
    description: 'Sürekli AR-GE ve yenilikçi üretim teknolojileri',
  },
  {
    icon: UserGroupIcon,
    title: 'Uzman Ekip',
    description: '30 yıllık tecrübe ve profesyonel kadro',
  },
  {
    icon: SparklesIcon,
    title: 'Premium Kalite',
    description: 'ISO ve CE sertifikalı üretim süreçleri',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Güvenilirlik',
    description: 'Müşteri memnuniyeti odaklı yaklaşım',
  },
]

const milestones = [
  {
    year: '1993',
    title: 'Kuruluş',
    description: 'VERO Manufacturing kuruldu',
  },
  {
    year: '2005',
    title: 'ISO 9001:2015',
    description: 'Uluslararası kalite standartları',
  },
  {
    year: '2015',
    title: 'Kapasite Artışı',
    description: 'Modern üretim tesisi',
  },
  {
    year: '2023',
    title: 'Dijital Dönüşüm',
    description: 'B2B platformu',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-800/20" />
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/e2e8f0/ffffff?text=VERO')] bg-cover bg-center"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              30 Yıllık Tecrübe
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              1993'ten beri kalite ve inovasyonu birleştirerek üretim yapıyoruz.
            </p>
            <Button
              as="link"
              href="/contact"
              size="lg"
              className="!px-12 !py-4"
            >
              İletişime Geçin
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
              Değerlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Müşterilerimize en iyi hizmeti sunmak için benimsediğimiz temel değerler
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <value.icon className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
              Kilometre Taşlarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              VERO'nun kuruluşundan bugüne önemli dönüm noktaları
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-8 mb-16 last:mb-0"
              >
                <div className="w-32 h-32 flex-shrink-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex flex-col items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <span className="text-3xl font-bold">{milestone.year}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 