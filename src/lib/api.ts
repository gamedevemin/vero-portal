type ContactFormData = {
  name: string
  company: string
  email: string
  phone?: string
  message: string
  productInterest: string
}

export async function submitContactForm(data: ContactFormData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Failed to submit form')
  }

  return response.json()
}

export async function subscribeToNewsletter(email: string) {
  const response = await fetch('/api/newsletter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Failed to subscribe')
  }

  return response.json()
}

// Analytics tracking
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  // Google Analytics
  if (window.gtag) {
    window.gtag('event', eventName, properties)
  }

  // Facebook Pixel
  if (window.fbq) {
    window.fbq('track', eventName, properties)
  }

  // LinkedIn Insight
  if (window.lintrk) {
    window.lintrk('track', { conversion_id: eventName })
  }
}

// Declare global types for analytics
declare global {
  interface Window {
    gtag: (command: string, eventName: string, params?: any) => void
    fbq: (command: string, eventName: string, params?: any) => void
    lintrk: (command: string, params: any) => void
  }
} 