import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Menu,
  X,
  Clock,
  ChevronRight,
  Sparkles,
  Heart,
  Calendar,
  Check,
  Send,
  MessageCircle,
  Shield,
  Star,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  category: string;
  duration: string;
  price: string;
  description: string;
  image: string;
  tag?: string;
  highlights: string[];
}

export function ClassicNailArtPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    service: 'Classic & Russian Manicure',
    artist: 'Any Available Master Artist',
    date: '2026-08-18',
    time: '11:00 AM',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const services: Service[] = [
    {
      id: 'srv-1',
      title: 'Classic & Russian Manicure',
      category: 'Care',
      duration: '45 min',
      price: 'NPR 1,500',
      tag: 'Most Popular',
      description: 'Precision dry e-file cuticle detailing, organic nail bed strengthening, natural buffing, and warm botanical hand massage.',
      image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
      highlights: ['Deep cuticle cleansing', 'Keratin strengthening', 'High-shine natural buff']
    },
    {
      id: 'srv-2',
      title: 'Handcrafted Art & 3D Accents',
      category: 'Art',
      duration: '75 min',
      price: 'NPR 2,800',
      tag: 'Signature',
      description: 'Custom hand-painted patterns, fine geometric tribal line work, encapsulated flakes, subtle chrome, and Swarovski elements.',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
      highlights: ['Bespoke 1-on-1 design consultation', 'Swarovski crystals', 'Non-yellowing gloss finish']
    },
    {
      id: 'srv-3',
      title: 'Gel Sculpting & Extensions',
      category: 'Extensions',
      duration: '90 min',
      price: 'NPR 3,500',
      tag: 'Long Lasting',
      description: 'Lightweight, durable hard gel or acrylic extensions shaped to your preference (Almond, Coffin, Stiletto, or Square).',
      image: 'https://images.unsplash.com/photo-1638814378821-1c7cbbd648ac?auto=format&fit=crop&w=800&q=80',
      highlights: ['Custom apex architecture', '4+ weeks chip-free guarantee', 'Nail-safe removal method']
    },
    {
      id: 'srv-4',
      title: 'Nourishing Hand Spa & Paraffin',
      category: 'Spa',
      duration: '50 min',
      price: 'NPR 2,000',
      description: 'Warm Himalayan herbal bath, gentle rose petal sugar scrub, warm paraffin wax envelope, and relaxing acupressure massage.',
      image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
      highlights: ['Dead skin exfoliation', 'Deep collagen hydration', 'Relieves tension & dryness']
    }
  ];

  const gallery = [
    {
      id: 'g1',
      title: 'Minimalist Line & Pearl Glaze',
      category: 'Minimal',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g2',
      title: 'Midnight Tribal Geometry',
      category: 'Hand-Painted',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g3',
      title: 'Pastel Lilac Almond Gloss',
      category: 'Extensions',
      image: 'https://images.unsplash.com/photo-1638814378821-1c7cbbd648ac?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g4',
      title: 'Classic French Ombre Chrome',
      category: 'Minimal',
      image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g5',
      title: 'Velvet Ruby Red & Gold Flakes',
      category: 'Hand-Painted',
      image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g6',
      title: 'Botanical Leaf Outline & Nude Gel',
      category: 'Minimal',
      image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const reviews = [
    {
      name: 'Aayusha Sharma',
      location: 'Pokhara',
      text: 'The best nail studio in town without question. The Russian manicure was so gentle, and my custom geometric gel art is still flawless after 4 weeks.',
      service: 'Custom Nail Art & Manicure'
    },
    {
      name: 'Smriti Gurung',
      location: 'Kathmandu',
      text: 'Got my bridal extensions done here. The staff took the time to understand my vision and matched my dress embroidery perfectly. Clean and relaxing vibe.',
      service: 'Bridal Set & Hand Spa'
    },
    {
      name: 'Sophie Laurent',
      location: 'Traveler from France',
      text: 'Stumbled upon Classic Nail Art while visiting Lakeside. The hygiene standards and tool sterilization are equal to top European salons. Highly recommend!',
      service: 'Gel Polish & Spa Treatment'
    }
  ];

  const filteredGallery = activeCategory === 'All'
    ? gallery
    : gallery.filter(item => item.category === activeCategory);

  const toggleLike = (id: string) => {
    setLikedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setBookingOpen(false);
    }, 2400);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#222222] font-sans antialiased selection:bg-[#5C3D75] selection:text-white">
      
      {/* 1. TOP UTILITY BAR (Clean, human, functional) */}
      <div className="bg-[#FFFFFF] border-b border-[#EBE7DF] text-[13px] text-[#555555] py-2 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left: Socials + Phone */}
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-3 text-[#666666]">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#5C3D75] transition-colors" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#5C3D75] transition-colors" aria-label="Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#5C3D75] transition-colors" aria-label="Twitter">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#5C3D75] transition-colors" aria-label="YouTube">
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="h-3.5 w-px bg-[#E2DED5]" />

            <a href="tel:+9779846000000" className="flex items-center gap-1.5 hover:text-[#5C3D75] transition-colors font-medium">
              <Phone className="w-3.5 h-3.5 text-[#5C3D75]" />
              <span>+977 9846000000</span>
            </a>

            <span className="hidden md:inline-flex items-center gap-1.5 text-[#777777]">
              <Mail className="w-3.5 h-3.5 text-[#5C3D75]" />
              nailcareexpert@gmail.com
            </span>
          </div>

          {/* Right: Location & Opening Info */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-1.5 text-[#666666]">
              <MapPin className="w-3.5 h-3.5 text-[#5C3D75]" />
              <span>Lakeside-6, Pokhara</span>
            </div>
            <div className="h-3.5 w-px bg-[#E2DED5]" />
            <button
              onClick={() => {
                setFormData(prev => ({ ...prev, service: 'Classic & Russian Manicure' }));
                setBookingOpen(true);
              }}
              className="text-[#5C3D75] hover:underline font-semibold cursor-pointer"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION (Clean white, sticky, clear hierarchy) */}
      <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-200 border-b ${scrolled ? 'border-[#E8E4DC] shadow-sm py-3.5' : 'border-[#EFEBE4] py-4'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#5C3D75] text-white flex items-center justify-center shadow-sm">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A] leading-none">
                Classic Nail Art
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-widest text-[#777777] mt-0.5">
                Studio & Nail Care
              </span>
            </div>
          </a>

          {/* Nav Items (Matching screenshot) */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-semibold uppercase tracking-wider text-[#444444]">
            <a href="#home" className="text-[#5C3D75] hover:text-[#462B5B] transition-colors">Home</a>
            <a href="#services" className="hover:text-[#5C3D75] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#5C3D75] transition-colors">About Us</a>
            <a href="#gallery" className="hover:text-[#5C3D75] transition-colors">Gallery</a>
            <a href="#testimonials" className="hover:text-[#5C3D75] transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-[#5C3D75] transition-colors">Contact</a>
          </nav>

          {/* Direct CTA */}
          <div className="hidden sm:block">
            <button
              onClick={() => setBookingOpen(true)}
              className="bg-[#5C3D75] hover:bg-[#4B2F60] text-white text-xs uppercase font-semibold tracking-wider px-5 py-2.5 rounded-full transition-all duration-150 shadow-sm"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden p-1.5 text-[#333333] hover:text-[#5C3D75]"
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenu && (
          <div className="lg:hidden bg-white border-b border-[#E8E4DC] px-6 py-4 space-y-3 text-sm font-semibold uppercase tracking-wide">
            <a href="#home" onClick={() => setMobileMenu(false)} className="block text-[#5C3D75] py-1">Home</a>
            <a href="#services" onClick={() => setMobileMenu(false)} className="block text-[#444444] hover:text-[#5C3D75] py-1">Services</a>
            <a href="#about" onClick={() => setMobileMenu(false)} className="block text-[#444444] hover:text-[#5C3D75] py-1">About Us</a>
            <a href="#gallery" onClick={() => setMobileMenu(false)} className="block text-[#444444] hover:text-[#5C3D75] py-1">Gallery</a>
            <a href="#testimonials" onClick={() => setMobileMenu(false)} className="block text-[#444444] hover:text-[#5C3D75] py-1">Testimonials</a>
            <a href="#contact" onClick={() => setMobileMenu(false)} className="block text-[#444444] hover:text-[#5C3D75] py-1">Contact</a>
            <button
              onClick={() => { setMobileMenu(false); setBookingOpen(true); }}
              className="w-full mt-2 bg-[#5C3D75] text-white py-2.5 rounded-xl text-xs uppercase font-bold"
            >
              Book Appointment
            </button>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (High aesthetic fidelity, natural & human design) */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#F7F4EE] to-[#FAF9F6] py-12 md:py-20 border-b border-[#EDE8DE]">
        {/* Subtle, tasteful hand-drawn botanical branch lines */}
        <div className="absolute left-2 top-4 bottom-4 pointer-events-none opacity-25 select-none hidden sm:block">
          <svg width="180" height="420" viewBox="0 0 180 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-20 10C30 70 80 110 70 190C60 270 -10 310 40 400" stroke="#7A6682" strokeWidth="1.2" />
            <path d="M45 80C75 70 98 85 98 102C98 120 75 125 45 80Z" stroke="#5C3D75" strokeWidth="1" />
            <path d="M65 160C95 150 120 165 120 182C120 200 95 205 65 160Z" stroke="#5C3D75" strokeWidth="1" />
            <path d="M30 260C60 250 85 262 85 280C85 298 60 300 30 260Z" stroke="#5C3D75" strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Hero Image (Black pattern nail art photo with clean border) */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-md">
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85"
                    alt="Creative and Beautiful Nail Art"
                    className="w-full h-[360px] sm:h-[420px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Clean Editorial Headline & CTA */}
            <div className="lg:col-span-6 text-center lg:text-left order-1 lg:order-2 space-y-5">
              <div className="inline-block text-xs font-semibold uppercase tracking-widest text-[#5C3D75] bg-[#5C3D75]/10 px-3 py-1 rounded-full">
                Boutique Nail Studio & Spa
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight leading-[1.2]">
                Creative and Beautiful Nail Art <br />
                <span className="text-[#5C3D75]">Designs For You</span>
              </h1>

              <p className="text-sm sm:text-base text-[#555555] max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Personalized nail enhancements, gentle Russian cuticle care, hand-painted seasonal art, and long-lasting gel extensions designed to elevate your everyday elegance.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                {/* Purple pill button matching screenshot */}
                <a
                  href="#services"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#5C3D75] hover:bg-[#4A2E66] text-white text-xs uppercase font-semibold tracking-wider transition-colors shadow-sm"
                >
                  Explore Now
                </a>

                <button
                  onClick={() => setBookingOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full bg-white hover:bg-[#F5F2EB] text-[#222222] border border-[#DCD6C9] text-xs uppercase font-semibold tracking-wider transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5 mr-2 text-[#5C3D75]" />
                  Book Appointment
                </button>
              </div>

              {/* Clean human notes */}
              <div className="pt-4 border-t border-[#E5E0D5] grid grid-cols-3 gap-3 text-center lg:text-left text-xs text-[#666666]">
                <div>
                  <div className="font-bold text-[#1C1917] text-sm">Medical-Grade</div>
                  <div>Sterilized Tools</div>
                </div>
                <div>
                  <div className="font-bold text-[#1C1917] text-sm">Non-Toxic</div>
                  <div>Vegan Gels</div>
                </div>
                <div>
                  <div className="font-bold text-[#1C1917] text-sm">4+ Weeks</div>
                  <div>Durability</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION (Clean centered title + 4 rounded cards matching reference) */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1C1917]">
              Services
            </h2>
            <div className="w-12 h-0.5 bg-[#5C3D75] mx-auto rounded-full" />
            <p className="text-xs sm:text-sm text-[#666666]">
              Thoughtfully curated treatments for healthy, beautifully sculpted nails.
            </p>
          </div>

          {/* 4 Service Cards Grid (as in screenshot) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-[#FAF9F6] rounded-2xl overflow-hidden border border-[#EBE6DC] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Photo with clean rounded top */}
                  <div className="relative h-48 overflow-hidden bg-[#ECE8DF]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-bold text-[#5C3D75]">
                      {service.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-[#777777]">
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3 h-3 text-[#5C3D75]" />
                        {service.duration}
                      </span>
                      {service.tag && (
                        <span className="text-[10px] uppercase font-bold text-[#5C3D75] bg-[#5C3D75]/10 px-2 py-0.5 rounded-full">
                          {service.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-base font-bold text-[#1C1917] leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs text-[#666666] leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => {
                      setFormData(prev => ({ ...prev, service: service.title }));
                      setBookingOpen(true);
                    }}
                    className="w-full bg-[#5C3D75] hover:bg-[#482F5E] text-white text-xs font-semibold py-2.5 rounded-xl transition-colors text-center"
                  >
                    Book This Service
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. ABOUT US & HYGIENE PROMISE */}
      <section id="about" className="py-16 md:py-24 bg-[#F7F5F0] border-y border-[#EAE5DA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-4 border-white shadow-md bg-white">
                <img
                  src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80"
                  alt="Classic Nail Art Studio experience"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5C3D75]">
                About Our Studio
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917]">
                A Peaceful Haven For Thoughtful Nail Care
              </h2>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                At <strong>Classic Nail Art</strong>, we believe manicures are more than beauty — they are an act of self-care. Located near the serene lakeside of Pokhara, our studio provides a calm, unhurried atmosphere where every client receives dedicated, one-on-one attention.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-white p-3.5 rounded-xl border border-[#E5E0D5] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#5C3D75]/10 text-[#5C3D75] shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1C1917]">Autoclave Sterilization</h4>
                    <p className="text-[11px] text-[#666666] mt-0.5">Medical-grade sterilization for every metal tool.</p>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-[#E5E0D5] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#5C3D75]/10 text-[#5C3D75] shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1C1917]">Certified Master Artists</h4>
                    <p className="text-[11px] text-[#666666] mt-0.5">Over 7 years of specialized Russian manicure experience.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. DESIGN GALLERY */}
      <section id="gallery" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917]">
              Design Gallery
            </h2>
            <div className="w-12 h-0.5 bg-[#5C3D75] mx-auto rounded-full" />
            <p className="text-xs sm:text-sm text-[#666666]">
              Real work created in our Pokhara studio.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
              {['All', 'Minimal', 'Hand-Painted', 'Extensions'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-[#5C3D75] text-white'
                      : 'bg-[#F2EFE8] text-[#555555] hover:bg-[#EAE5DC]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map(item => (
              <div
                key={item.id}
                className="group rounded-2xl overflow-hidden bg-[#F7F5F0] border border-[#ECE7DC] shadow-sm flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    onClick={() => toggleLike(item.id)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-rose-500 shadow-sm"
                    aria-label="Like photo"
                  >
                    <Heart className={`w-4 h-4 ${likedItems[item.id] ? 'fill-rose-500' : ''}`} />
                  </button>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#777777]">{item.category}</span>
                    <h4 className="text-xs font-bold text-[#1C1917]">{item.title}</h4>
                  </div>
                  <button
                    onClick={() => {
                      setFormData(prev => ({ ...prev, notes: `Inquiry for gallery style: ${item.title}` }));
                      setBookingOpen(true);
                    }}
                    className="text-xs text-[#5C3D75] font-semibold hover:underline"
                  >
                    Request Look
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS */}
      <section id="testimonials" className="py-16 md:py-24 bg-[#FAF9F6] border-t border-[#EAE5DA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917]">
              Client Stories
            </h2>
            <div className="w-12 h-0.5 bg-[#5C3D75] mx-auto rounded-full" />
            <p className="text-xs sm:text-sm text-[#666666]">
              Kind words from our regulars and travelers in Pokhara.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-[#EAE5DA] shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-[#444444] leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F0EBE0]">
                  <div className="font-bold text-xs text-[#1C1917]">{rev.name}</div>
                  <div className="text-[11px] text-[#777777]">{rev.location} • {rev.service}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. CONTACT & LOCATION SECTION */}
      <section id="contact" className="py-16 md:py-24 bg-white border-t border-[#EAE5DA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Studio Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C3D75]">Visit Us</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917] mt-1">
                  Studio Location & Hours
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#555555]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#5C3D75] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1C1917] block">Address:</strong>
                    Lakeside Road, Street No. 6, Pokhara, Nepal
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#5C3D75] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1C1917] block">Hours:</strong>
                    Sunday – Saturday: 10:00 AM – 7:30 PM
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#5C3D75] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1C1917] block">Phone:</strong>
                    +977 9846000000
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#5C3D75] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1C1917] block">Email:</strong>
                    nailcareexpert@gmail.com
                  </div>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <a
                  href="https://wa.me/9779846000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="lg:col-span-7 bg-[#FAF9F6] p-6 sm:p-8 rounded-2xl border border-[#EAE5DA]">
              <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-4">Send a Message</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will get back to you shortly.'); }} className="space-y-3.5 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[#444444] font-semibold mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Shrestha"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD6C9] bg-white focus:outline-none focus:border-[#5C3D75]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#444444] font-semibold mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+977 98..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD6C9] bg-white focus:outline-none focus:border-[#5C3D75]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#444444] font-semibold mb-1">Message</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us what style or question you have..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD6C9] bg-white focus:outline-none focus:border-[#5C3D75]"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#5C3D75] hover:bg-[#482F5E] text-white font-semibold px-6 py-2.5 rounded-xl transition-colors inline-flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-[#1C1917] text-[#999999] text-xs py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white font-serif text-lg font-bold">
            <Sparkles className="w-4 h-4 text-[#A879CA]" />
            <span>Classic Nail Art Studio</span>
          </div>

          <div className="flex items-center space-x-6 text-[#CCCCCC]">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <p className="text-[#777777]">
            © {new Date().getFullYear()} Classic Nail Art. All rights reserved.
          </p>
        </div>
      </footer>

      {/* 10. CLEAN APPOINTMENT BOOKING MODAL */}
      {bookingOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-7 shadow-xl relative animate-in fade-in duration-150 text-xs">
            <button
              onClick={() => setBookingOpen(false)}
              className="absolute top-4 right-4 text-[#777777] hover:text-[#111111] p-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingSuccess ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1C1917]">Booking Request Received!</h3>
                <p className="text-[#666666] leading-relaxed">
                  We look forward to seeing you. We will contact you at <strong>{formData.phone}</strong> to confirm your slot.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-5">
                  <span className="text-[10px] font-bold text-[#5C3D75] uppercase tracking-wider">Appointment</span>
                  <h3 className="font-serif text-xl font-bold text-[#1C1917]">Reserve Your Time</h3>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[#444444] font-semibold mb-1">Select Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-[#DCD6C9] bg-white focus:outline-none focus:border-[#5C3D75]"
                    >
                      {services.map(s => (
                        <option key={s.id} value={s.title}>{s.title} — {s.price}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#444444] font-semibold mb-1">Date</label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-[#DCD6C9] bg-white focus:outline-none focus:border-[#5C3D75]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#444444] font-semibold mb-1">Time</label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-[#DCD6C9] bg-white focus:outline-none focus:border-[#5C3D75]"
                      >
                        <option>10:00 AM</option>
                        <option>11:30 AM</option>
                        <option>01:00 PM</option>
                        <option>02:30 PM</option>
                        <option>04:00 PM</option>
                        <option>05:30 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#444444] font-semibold mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Gurung"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-[#DCD6C9] bg-white focus:outline-none focus:border-[#5C3D75]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#444444] font-semibold mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+977 98..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-[#DCD6C9] bg-white focus:outline-none focus:border-[#5C3D75]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#444444] font-semibold mb-1">Notes / Specific Style</label>
                    <input
                      type="text"
                      placeholder="Optional details or design references"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-[#DCD6C9] bg-white focus:outline-none focus:border-[#5C3D75]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#5C3D75] hover:bg-[#482F5E] text-white py-2.5 rounded-xl font-semibold uppercase tracking-wider transition-colors mt-2"
                  >
                    Confirm Appointment
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
