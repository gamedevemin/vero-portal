'use client'
import React from 'react'
import { motion } from 'framer-motion'
import ProductsShowcase from '@/components/ProductsShowcase'
import ManufacturingProcess from '@/components/ManufacturingProcess'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <style jsx global>{`
        body {
          overflow-x: hidden;
        }
        main {
          min-width: auto;
          width: 100%;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-300px * 2 - 1.5rem * 2));
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: running;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="w-full min-h-[30vh] sm:min-h-[80vh] lg:min-h-[80vh] bg-white relative">
        <div className="container mx-auto px-4 py-0 flex flex-col items-center justify-center min-h-[30vh] sm:min-h-[80vh] lg:min-h-[80vh]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full space-y-2 sm:space-y-3 lg:space-y-1 text-center mt-4 sm:mt-0 lg:mt-0"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-blue-600 font-semibold tracking-wide inline-block px-2 py-0.5 bg-blue-50 rounded-full text-xs sm:text-sm lg:text-base mb-0 sm:mb-2"
            >
              🏭 PROFESYONEL ÜRETİM ORTAĞINIZ
            </motion.span>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight mt-0 sm:mt-2">
              Bebek Ürünlerinde<br />
              <span className="text-blue-600">Fason Üretim</span>
            </h1>
            <p className="text-sm sm:text-lg lg:text-2xl text-gray-600 leading-relaxed max-w-xl mx-auto">
              Profesyonel ekibimizle emzik, biberon gibi tüm bebek besin ürünlerinin üretimini ve sevkiyatını yapıyoruz.
            </p>

            <div className="flex flex-row sm:flex-row gap-2 sm:gap-3 justify-center items-center mt-2 sm:mt-6">
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: "#2563EB" }}
                whileTap={{ scale: 0.98 }}
                className="w-[48%] sm:w-auto bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 lg:px-12 lg:py-3 rounded-xl text-base sm:text-lg lg:text-xl font-bold transition-all duration-300 shadow-lg shadow-blue-600/20"
              >
                İletişime Geçin
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: "#F8FAFC" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  document.getElementById('address-section')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                  });
                }}
                className="w-[48%] sm:w-auto border-2 border-gray-900 text-gray-900 px-4 sm:px-6 py-2 sm:py-2.5 lg:px-12 lg:py-3 rounded-xl text-base sm:text-lg lg:text-xl font-medium transition-all duration-300"
              >
                Ofisimize Gelin
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-6 sm:py-12 lg:py-0 bg-white mt-4 sm:mt-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 py-4 lg:py-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center group"
            >
              <div className="text-3xl sm:text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">30+</div>
              <div className="text-sm sm:text-sm lg:text-base text-gray-600">Yıllık Tecrübe</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-2">1M+</div>
              <div className="text-sm sm:text-sm lg:text-base text-gray-600">TL İş Hacmi</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-sm sm:text-sm lg:text-base text-gray-600">Tamamlanan Sipariş</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-2">%100</div>
              <div className="text-sm sm:text-sm lg:text-base text-gray-600">Müşteri Memnuniyeti</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Showcase Section */}
      <section className="py-2 sm:py-16 lg:py-32 bg-white relative w-full overflow-hidden mt-4 sm:mt-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container mx-auto px-1 sm:px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-4 sm:mb-12"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-blue-600 font-semibold tracking-wide inline-block px-2 py-0.5 sm:py-1 bg-blue-50 rounded-full text-xs sm:text-sm lg:text-base"
            >
              🍼 ÜRÜNLERİMİZ
            </motion.span>
            <p className="text-base sm:text-xl text-gray-600 mt-3 sm:mt-6">
              👶🏻 Bebekler için güvenli, markanız için mükemmel. ✅
            </p>
          </motion.div>

          <div className="relative w-full overflow-hidden h-[400px] sm:h-[700px]">
            <div className="animate-scroll h-full py-2 sm:py-12">
              <motion.div 
                className="flex gap-2 sm:gap-6 cursor-grab active:cursor-grabbing px-2 sm:px-8 h-full items-center"
                drag="x"
                dragConstraints={{ right: 0, left: -2000 }}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                whileDrag={{ scale: 1.02 }}
                onDragStart={() => {
                  const element = document.querySelector('.animate-scroll');
                  if (element) {
                    element.classList.add('pause-animation');
                  }
                }}
                onDragEnd={() => {
                  const element = document.querySelector('.animate-scroll');
                  if (element) {
                    element.classList.remove('pause-animation');
                  }
                }}
                style={{ touchAction: "none" }}
              >
                {/* Product Cards */}
                {[...Array(2)].map((_, setIndex) => (
                  <React.Fragment key={setIndex}>
                    {/* Emzik */}
                    <div className="flex-shrink-0 w-[200px] sm:w-[300px]">
                      <div className="bg-white rounded-xl sm:rounded-3xl p-3 sm:p-8 hover:shadow-xl transition-all duration-300 h-full">
                        <div className="aspect-square rounded-lg sm:rounded-2xl overflow-hidden relative">
                          <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: 'url("https://placehold.co/400x400/e2e8f0/ffffff?text=Emzik")' }}
                            role="img"
                            aria-label="Emzik"
                          />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">Emzik</h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-6">
                          Ortodontik tasarım, BPA içermeyen silikon malzeme
                        </p>
                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-50 text-blue-600 rounded-lg text-xs sm:text-sm">Anti-kolik</span>
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-50 text-blue-600 rounded-lg text-xs sm:text-sm">BPA Free</span>
                        </div>
                        <div className="pt-3 border-t border-gray-100">
                          <div className="flex justify-between text-xs text-gray-600 mb-1">
                            <span>Min. Sipariş:</span>
                            <span className="font-medium">10.000 adet</span>
                          </div>
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>Tamamlanma:</span>
                            <span className="font-medium">15-20 gün</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Biberon */}
                    <div className="flex-shrink-0 w-[200px] sm:w-[300px]">
                      <div className="bg-white rounded-xl sm:rounded-3xl p-3 sm:p-8 hover:shadow-xl transition-all duration-300 h-full">
                        <div className="aspect-square rounded-lg sm:rounded-2xl overflow-hidden relative">
                          <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: 'url("https://placehold.co/400x400/e2e8f0/ffffff?text=Biberon")' }}
                            role="img"
                            aria-label="Biberon"
                          />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">Biberon</h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-6">
                          Anti-kolik sistem, geniş ağız yapısı
                        </p>
                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-50 text-blue-600 rounded-lg text-xs sm:text-sm">Anti-kolik</span>
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-50 text-blue-600 rounded-lg text-xs sm:text-sm">BPA Free</span>
                        </div>
                        <div className="pt-3 border-t border-gray-100">
                          <div className="flex justify-between text-xs text-gray-600 mb-1">
                            <span>Min. Sipariş:</span>
                            <span className="font-medium">5.000 adet</span>
                          </div>
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>Tamamlanma:</span>
                            <span className="font-medium">20-25 gün</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mama Kasesi */}
                    <div className="flex-shrink-0 w-[200px] sm:w-[300px]">
                      <div className="bg-white rounded-xl sm:rounded-3xl p-3 sm:p-8 hover:shadow-xl transition-all duration-300 h-full">
                        <div className="aspect-square rounded-lg sm:rounded-2xl overflow-hidden relative">
                          <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: 'url("https://placehold.co/400x400/e2e8f0/ffffff?text=Mama+Kasesi")' }}
                            role="img"
                            aria-label="Mama Kasesi"
                          />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">Mama Kasesi</h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-6">
                          Kaymaz taban, mikrodalga uyumlu
                        </p>
                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-50 text-blue-600 rounded-lg text-xs sm:text-sm">Kaymaz</span>
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-50 text-blue-600 rounded-lg text-xs sm:text-sm">BPA Free</span>
                        </div>
                        <div className="pt-3 border-t border-gray-100">
                          <div className="flex justify-between text-xs text-gray-600 mb-1">
                            <span>Min. Sipariş:</span>
                            <span className="font-medium">6.000 adet</span>
                          </div>
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>Tamamlanma:</span>
                            <span className="font-medium">15-20 gün</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bebek Bardağı */}
                    <div className="flex-shrink-0 w-[200px] sm:w-[300px]">
                      <div className="bg-white rounded-xl sm:rounded-3xl p-3 sm:p-8 hover:shadow-xl transition-all duration-300 h-full">
                        <div className="aspect-square rounded-lg sm:rounded-2xl overflow-hidden relative">
                          <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: 'url("https://placehold.co/400x400/e2e8f0/ffffff?text=Bebek+Bardagi")' }}
                            role="img"
                            aria-label="Bebek Bardağı"
                          />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">Bebek Bardağı</h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-6">
                          360° içilebilir kapak, damlatmaz
                        </p>
                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-50 text-blue-600 rounded-lg text-xs sm:text-sm">360°</span>
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-50 text-blue-600 rounded-lg text-xs sm:text-sm">BPA Free</span>
                        </div>
                        <div className="pt-3 border-t border-gray-100">
                          <div className="flex justify-between text-xs text-gray-600 mb-1">
                            <span>Min. Sipariş:</span>
                            <span className="font-medium">7.000 adet</span>
                          </div>
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>Tamamlanma:</span>
                            <span className="font-medium">15-20 gün</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
            
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 sm:py-16 lg:py-24 bg-white mt-4 sm:mt-0">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-8 sm:mb-12"
          >
            <span className="text-blue-600 font-semibold tracking-wide inline-block px-2 py-0.5 sm:py-1 bg-blue-50 rounded-full text-xs sm:text-sm lg:text-base">
              🤝 REFERANSLARIMIZ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 sm:mt-6 mb-4 sm:mb-8">
              Güvenilir Markalar
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              Türkiye'nin önde gelen markaları ile çalışıyoruz
            </p>
          </motion.div>

          {/* Testimonial Cards with Continuous Scroll */}
          <div className="relative w-full overflow-hidden">
            <div className="animate-scroll pointer-events-none">
              <div className="flex gap-6 whitespace-nowrap">
                {[...Array(2)].map((_, setIndex) => (
                  <React.Fragment key={setIndex}>
                    <div className="inline-flex flex-shrink-0 w-[300px] sm:w-[400px]">
                      <div className="bg-gray-50 rounded-xl sm:rounded-3xl p-4 sm:p-8 hover:shadow-lg transition-all duration-300 w-full">
                        <div className="flex items-center mb-3 sm:mb-6">
                          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm sm:text-base font-bold">
                            KC
                          </div>
                          <div className="ml-2 sm:ml-4">
                            <h4 className="text-base sm:text-lg font-bold text-gray-900 truncate">KidsCare</h4>
                            <p className="text-xs sm:text-sm text-gray-600 truncate">Bebek Bakım Ürünleri</p>
                          </div>
                        </div>
                        <p className="text-xs sm:text-base text-gray-600 mb-3 sm:mb-6 line-clamp-4">
                          "Özel formülasyonlarımızı üretmekteki başarıları ve kalite standartlarına olan bağlılıkları gerçekten etkileyici. Uzun yıllar birlikte çalışmayı düşünüyoruz."
                        </p>
                        <div className="flex items-center text-blue-600">
                          <span className="text-xs sm:text-base font-semibold">5+ yıllık iş ortağı</span>
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex flex-shrink-0 w-[300px] sm:w-[400px]">
                      <div className="bg-gray-50 rounded-xl sm:rounded-3xl p-4 sm:p-8 hover:shadow-lg transition-all duration-300 w-full">
                        <div className="flex items-center mb-3 sm:mb-6">
                          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm sm:text-base font-bold">
                            TN
                          </div>
                          <div className="ml-2 sm:ml-4">
                            <h4 className="text-base sm:text-lg font-bold text-gray-900 truncate">TinyNest</h4>
                            <p className="text-xs sm:text-sm text-gray-600 truncate">Bebek Mobilya Markası</p>
                          </div>
                        </div>
                        <p className="text-xs sm:text-base text-gray-600 mb-3 sm:mb-6 line-clamp-4">
                          "Mobilyalarımızın üretiminde gösterdikleri özen ve detaylara verdikleri önem bizi her zaman memnun etti. Teslimat süreleri ve kalite kontrolleri mükemmel."
                        </p>
                        <div className="flex items-center text-blue-600">
                          <span className="text-xs sm:text-base font-semibold">2 yıllık iş ortağı</span>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
            
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>

          {/* Infinite Logo Marquee */}
          <div className="relative overflow-hidden py-4 mt-16 bg-white">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-16 mx-8">
                  <div className="w-32 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center p-4">
                    <img src="https://placehold.co/200x100/e2e8f0/4b5563?text=Logo+1" alt="Partner Logo" className="max-w-full h-auto" />
                  </div>
                  <div className="w-32 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center p-4">
                    <img src="https://placehold.co/200x100/e2e8f0/4b5563?text=Logo+2" alt="Partner Logo" className="max-w-full h-auto" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="w-full bg-white border-t border-gray-100">
        <div className="w-full max-w-[2000px] mx-auto px-4">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>© 2025 VERO Plastik A.Ş.</span>
                <a 
                  href="https://www.linkedin.com/in/ramazanarikan" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"/>
                  </svg>
                </a>
              </div>
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <span>👨‍💻</span>
                <a 
                  href="https://wa.me/905373420161"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-2 py-1 text-blue-600 font-medium group rounded-md hover:text-blue-800 transition-colors"
                >
                  <span className="relative z-10">Emin</span>
                  <div className="absolute inset-0 bg-blue-50 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-md"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
} 