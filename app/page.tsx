'use client'
import Hero from './components/Hero'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Jet Black Background */}
      <div className="fixed inset-0" style={{ backgroundColor: '#0a0a0a' }}></div>

      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb w-96 h-96 -top-48 -right-48 animate-float"></div>
        <div className="floating-orb w-80 h-80 -bottom-40 -left-40 animate-float-delayed"></div>
        <div className="floating-orb w-64 h-64 top-1/3 left-1/4 animate-float-slow"></div>
        <div className="floating-orb w-72 h-72 bottom-1/4 right-1/3 animate-float"></div>

        {/* Beautiful Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Content */}
      <div className="relative">
        <Hero />
        <Footer />
      </div>
    </main>
  )
}