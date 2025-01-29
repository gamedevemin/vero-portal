'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { submitContactForm, trackEvent } from '@/lib/api'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { animations } from '@/styles/shared'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    productInterest: 'other'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [currentStep, setCurrentStep] = useState(1)

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'email':
        if (!value.trim() && !formData.phone.trim()) {
          return 'E-posta veya telefon numarasından en az birini giriniz'
        }
        return value.trim() ? (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Geçerli bir e-posta adresi giriniz') : ''
      case 'phone':
        if (!value.trim() && !formData.email.trim()) {
          return 'E-posta veya telefon numarasından en az birini giriniz'
        }
        return value.trim() ? (/^[0-9\s+()-]{10,}$/.test(value) ? '' : 'Geçerli bir telefon numarası giriniz') : ''
      default:
        return value.trim() ? '' : 'Bu alan zorunludur'
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')
    
    // Validate all required fields except email and phone
    const requiredFields = ['name', 'company', 'message']
    const errors = requiredFields.reduce((acc, key) => {
      const error = validateField(key, formData[key as keyof typeof formData])
      if (error) acc[key] = error
      return acc
    }, {} as Record<string, string>)

    // Validate that at least one contact method is provided
    if (!formData.email.trim() && !formData.phone.trim()) {
      errors.email = 'E-posta veya telefon numarasından en az birini giriniz'
      errors.phone = 'E-posta veya telefon numarasından en az birini giriniz'
    } else {
      // If email is provided, validate its format
      if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Geçerli bir e-posta adresi giriniz'
      }
      // If phone is provided, validate its format
      if (formData.phone.trim() && !/^[0-9\s+()-]{10,}$/.test(formData.phone)) {
        errors.phone = 'Geçerli bir telefon numarası giriniz'
      }
    }

    if (Object.keys(errors).length > 0) {
      setErrorMessage('Lütfen gerekli alanları doğru şekilde doldurunuz')
      setIsSubmitting(false)
      return
    }
    
    try {
      await submitContactForm(formData)
      setSubmitStatus('success')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        productInterest: 'other'
      })
      setTouched({})
      
      trackEvent('contact_form_submit', {
        product_interest: 'other',
      })
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Form gönderilirken bir hata oluştu')
      
      trackEvent('contact_form_error', {
        error_message: error instanceof Error ? error.message : 'Bilinmeyen hata',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
  }

  return (
    <section className="pt-12 pb-4 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-[2fr,1fr] gap-12">
            {/* Contact Form Section */}
            <div>
              <div className="text-center mb-4">
                <span className="text-blue-600 font-semibold tracking-wide inline-block px-2 py-0.5 sm:py-1 bg-blue-50 rounded-full text-xs sm:text-sm lg:text-base">
                  ✉️ İLETİŞİM
                </span>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl shadow-blue-900/5 p-8 sm:p-12 border border-blue-100/20">
                <div className="flex justify-between mb-12 relative">
                  <div className="w-full absolute top-1/2 h-0.5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 -translate-y-1/2"></div>
                  {[1, 2].map((step) => (
                    <div key={step} className="relative z-10">
                      <div className={`
                        flex items-center justify-center w-12 h-12 rounded-2xl
                        ${step <= currentStep 
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20' 
                          : 'bg-gray-100 text-gray-400'}
                        transition-all duration-500 transform
                        ${step === currentStep ? 'scale-110' : 'scale-100'}
                      `}>
                        {step === 1 ? '👤' : '✍️'}
                      </div>
                      <span className={`
                        absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium
                        ${step <= currentStep ? 'text-blue-600' : 'text-gray-400'}
                      `}>
                        {step === 1 ? 'Kişisel Bilgiler' : 'İletişim Detayları'}
                      </span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <Input
                            label="Ad Soyad"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.name ? validateField('name', formData.name) : ''}
                            touched={touched.name}
                            required
                            className="transition-all duration-300 focus:scale-[1.02] bg-white/60"
                            icon="👤"
                          />

                          <Input
                            label="Firma Adı"
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.company ? validateField('company', formData.company) : ''}
                            touched={touched.company}
                            required
                            className="transition-all duration-300 focus:scale-[1.02] bg-white/60"
                            icon="🏢"
                          />
                        </div>

                        <div className="flex justify-end pt-4">
                          <Button
                            type="button"
                            onClick={() => {
                              if (formData.name && formData.company) {
                                setCurrentStep(2)
                              } else {
                                setTouched({ name: true, company: true })
                              }
                            }}
                            size="lg"
                            className="min-w-[200px] bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                          >
                            Devam Et &nbsp;→
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <Input
                            label="E-posta Adresi"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.email ? validateField('email', formData.email) : ''}
                            touched={touched.email}
                            className="transition-all duration-300 focus:scale-[1.02] bg-white/60"
                            placeholder="E-posta veya telefon numarasından birini giriniz"
                          />

                          <Input
                            label="Telefon Numarası"
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.phone ? validateField('phone', formData.phone) : ''}
                            touched={touched.phone}
                            className="transition-all duration-300 focus:scale-[1.02] bg-white/60"
                            placeholder="E-posta veya telefon numarasından birini giriniz"
                          />
                        </div>

                        <Textarea
                          label="Mesajınız"
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.message ? validateField('message', formData.message) : ''}
                          touched={touched.message}
                          rows={4}
                          required
                          className="transition-all duration-300 focus:scale-[1.02] bg-white/60"
                          icon="💭"
                        />

                        <div className="flex justify-between pt-4">
                          <Button
                            type="button"
                            onClick={() => setCurrentStep(1)}
                            variant="outline"
                            size="lg"
                            className="border-2 hover:bg-gray-50"
                          >
                            ← &nbsp;Geri
                          </Button>

                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            isLoading={isSubmitting}
                            size="lg"
                            className="min-w-[200px] bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                          >
                            {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={animations.fade.initial}
                        animate={animations.fade.animate}
                        exit={animations.fade.exit}
                        className="p-8 bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200/50 rounded-2xl text-center"
                      >
                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-green-800 mb-2">Teşekkürler!</h3>
                        <p className="text-green-700">En kısa sürede size dönüş yapacağız.</p>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={animations.fade.initial}
                        animate={animations.fade.animate}
                        exit={animations.fade.exit}
                        className="p-8 bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200/50 rounded-2xl text-center"
                      >
                        <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-500/20">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-red-800 mb-2">Üzgünüz!</h3>
                        <p className="text-red-700">{errorMessage || 'Bir hata oluştu. Lütfen tekrar deneyin.'}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </div>

            {/* Address Section */}
            <div className="lg:mt-0">
              <div className="text-center mb-3">
                <span className="text-blue-600 font-semibold tracking-wide inline-block px-2 py-0.5 sm:py-1 bg-blue-50 rounded-full text-xs sm:text-sm lg:text-base">
                  📍 ADRES
                </span>
              </div>
              <a 
                href="https://maps.google.com/?q=VERO+Plastik+Bağcılar+İstanbul" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-6 px-8 py-6 bg-white/70 backdrop-blur-sm border border-blue-100/20 hover:border-blue-500 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-0.5"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all duration-300">
                  <span className="text-3xl group-hover:scale-110 transition-transform">📍</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                    VERO Plastik A.Ş.
                  </div>
                  <div className="text-gray-500 mb-3">Bağcılar / İstanbul / Türkiye</div>
                  <div className="inline-flex items-center gap-2 text-blue-600 font-medium">
                    <span>Haritada Görüntüle</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 