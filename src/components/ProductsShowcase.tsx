'use client'

import React from 'react'
import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'Bebek Giyim Koleksiyonu',
    description: 'Markanız için özel tasarım ve sertifikalı üretim. GOTS organik pamuk ve Oeko-Tex® 100 standartlarında.',
    features: [
      { title: 'Minimum Sipariş', value: '1000 adet' },
      { title: 'Üretim Süresi', value: '30-45 gün' },
      { title: 'Sertifikalar', value: 'GOTS, Oeko-Tex®' },
    ],
  },
  {
    id: 2,
    name: 'Bebek Bakım Ürünleri',
    description: 'ISO 22716 GMP sertifikalı tesislerimizde, markanıza özel formülasyon ve ambalaj tasarımı.',
    features: [
      { title: 'Minimum Sipariş', value: '5000 adet' },
      { title: 'Üretim Süresi', value: '45-60 gün' },
      { title: 'Sertifikalar', value: 'ISO 22716, GMP' },
    ],
  },
  {
    id: 3,
    name: 'Bebek Mobilyaları',
    description: 'TSE ve EN 716-1 standartlarında, E1 sınıfı malzemelerle üretilen güvenli ve modern tasarımlar.',
    features: [
      { title: 'Minimum Sipariş', value: '500 adet' },
      { title: 'Üretim Süresi', value: '60-75 gün' },
      { title: 'Sertifikalar', value: 'TSE, EN 716-1' },
    ],
  },
]

export default function ProductsShowcase() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <span className="text-blue-600 font-semibold tracking-wide">ÜRÜN KATEGORİLERİ</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-6 mb-8">
            Global Standartlarda Üretim
          </h2>
          <p className="text-xl text-gray-600">
            Uluslararası sertifikalarımız ve modern üretim tesislerimizle, markanız için en yüksek kalitede ürünler üretiyoruz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 bg-white rounded-2xl mb-8 flex items-center justify-center">
                <span className="text-blue-600 text-lg font-medium">[Product Image]</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
              <p className="text-gray-600 mb-8">{product.description}</p>
              <div className="space-y-6">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">{feature.title}</span>
                    <span className="font-semibold text-gray-900">{feature.value}</span>
                  </div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full mt-8 bg-gray-900 text-white py-4 px-6 rounded-xl font-medium hover:bg-gray-800 transition-colors"
              >
                Detaylı Bilgi ve Fiyat
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-gray-600 mb-8">
            Özel üretim gereksinimleriniz için bizimle iletişime geçin
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="bg-white border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-50 transition-all"
          >
            Bizimle İletişime Geçin
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 