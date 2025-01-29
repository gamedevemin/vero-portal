'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function ManufacturingProcess() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 mb-8">
            Üretim sürecimiz hakkında detaylı bilgi almak için bizimle iletişime geçin
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition-all"
          >
            Bizimle İletişime Geçin
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 