import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  User,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Menu,
  X,
  Sparkles,
  Star,
  Clock,
  ChevronRight,
  Play,
  Heart,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Award,
  Gem,
  Scissors,
  Check,
  Send,
  MessageCircle,
  Eye,
  Sliders,
  Camera,
  ArrowUpRight
} from 'lucide-react';

// Types
interface ServiceItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  price: string;
  description: string;
  image: string;
  popular?: boolean;
  features: string[];
}

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  likes: number;
  image: string;
}

interface VideoItem {
  id: string;
  title: string;
  duration: string;
  views: string;
  thumbnail: string;
  description: string;
  youtubeId?: string;
}

export function ClassicNailArtPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<Record<string, boolean>>({});
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);

  // Booking Form State
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: 'Classic & Russian Manicure',
    nailArtist: 'Priya Shrestha (Master Artist)',
    date: '2026-08-18',
    time: '02:00 PM',
    name: '',
    phone: '',
    notes: '',
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Style Calculator State
  const [calcShape, setCalcShape] = useState<'Almond' | 'Coffin' | 'Stiletto' | 'Square' | 'Oval'>('Almond');
  const [calcLength, setCalcLength] = useState<'Short' | 'Medium' | 'Long' | 'XL'>('Medium');
  const [calcArtLevel, setCalcArtLevel] = useState<'Simple' | 'Medium 3D' | 'Luxury Gems & Chrome'>('Medium 3D');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services: ServiceItem[] = [
    {
      id: 'srv-1',
      title: 'Classic & Russian Manicure',
      category: 'Manicure',
      duration: '45 mins',
      price: 'NPR 1,500',
      popular: true,
      description: 'Precision e-file cuticle detailing, organic keratin nail strengthening, shaping, and soothing hand massage.',
      image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
      features: ['Deep cuticle cleansing', 'Keratin nourishment', 'Buff & natural shine']
    },
    {
      id: 'srv-2',
      title: 'Custom Gel Nail Art & 3D Charms',
      category: 'Nail Art',
      duration: '75 mins',
      price: 'NPR 2,800',
      popular: true,
      description: 'Bespoke hand-painted illustrations, fine geometric line art, metallic foils, 3D acrylic charms, and Swarovski accents.',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
      features: ['Hand-painted custom patterns', 'Swarovski crystals', 'High-gloss top coat']
    },
    {
      id: 'srv-3',
      title: 'Gel Polish & Acrylic Extensions',
      category: 'Extensions',
      duration: '90 mins',
      price: 'NPR 3,500',
      popular: true,
      description: 'Premium fiberglass & acrylic sculpting with long-lasting gel overlays in pastel lilac, nude glaze, or bold hues.',
      image: 'https://images.unsplash.com/photo-1638814378821-1c7cbbd648ac?auto=format&fit=crop&w=800&q=80',
      features: ['Custom length & apex shape', 'Chip-resistant 4+ weeks', 'Cuticle oil treatment']
    },
    {
      id: 'srv-4',
      title: 'Luxury Hand Spa & Restoration',
      category: 'Spa Care',
      duration: '60 mins',
      price: 'NPR 2,200',
      popular: false,
      description: 'Aromatic botanical salt soak, rose petal exfoliation scrub, warm paraffin wax envelope, and acupressure hand massage.',
      image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
      features: ['Warm paraffin mask', 'Dead skin exfoliation', 'Botanical essential oils']
    },
    {
      id: 'srv-5',
      title: 'French Chrome & Glazed Ombre',
      category: 'Nail Art',
      duration: '60 mins',
      price: 'NPR 2,400',
      popular: false,
      description: 'The viral glazed donut finish, modern micro-French tips, holographic pearl dust, and subtle airbrushed gradients.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      features: ['Pearl & chrome powder', 'Ultra-precise micro tips', 'Mirror glass reflection']
    },
    {
      id: 'srv-6',
      title: 'Bridal & Red Carpet Nail Couture',
      category: 'Bridal',
      duration: '120 mins',
      price: 'NPR 5,500',
      popular: true,
      description: 'Exclusive bridal packages featuring intricate lace art, genuine pearls, gold leafing, and full nail extension sculpting.',
      image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80',
      features: ['Bridal consultation', 'Hand + Foot matching set', 'Touch-up maintenance kit']
    }
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 'g-1',
      title: 'Midnight Tribal Geometry',
      category: 'Nail Art',
      likes: 342,
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g-2',
      title: 'Pastel Lilac Stiletto Gloss',
      category: 'Extensions',
      likes: 512,
      image: 'https://images.unsplash.com/photo-1638814378821-1c7cbbd648ac?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g-3',
      title: 'Clean Minimalist Pearl Glaze',
      category: 'Minimalist',
      likes: 289,
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g-4',
      title: 'Ruby Red Almond Glamour',
      category: 'Extensions',
      likes: 420,
      image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g-5',
      title: 'Delicate Botanical Gold Accents',
      category: 'Nail Art',
      likes: 671,
      image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g-6',
      title: 'Royal Velvet 3D Jewels',
      category: '3D Art',
      likes: 388,
      image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const videos: VideoItem[] = [
    {
      id: 'v-1',
      title: 'Intricate Black & White Geometry Tutorial',
      duration: '4:25',
      views: '24K views',
      thumbnail: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
      description: 'Learn how our master artists sketch fine symmetric tribal lines using ultra-thin detail brushes.'
    },
    {
      id: 'v-2',
      title: 'Chrome Mirror Finish Step-by-Step',
      duration: '3:10',
      views: '38K views',
      thumbnail: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      description: 'Mastering no-wipe top coat buffing technique for an immaculate reflective chrome mirror finish.'
    },
    {
      id: 'v-3',
      title: 'Full Acrylic Sculpting & Cuticle Sealing',
      duration: '6:45',
      views: '51K views',
      thumbnail: 'https://images.unsplash.com/photo-1638814378821-1c7cbbd648ac?auto=format&fit=crop&w=800&q=80',
      description: 'Professional bead placement, apex structure building, and seamless seamless e-file cuticle blending.'
    }
  ];

  const testimonials = [
    {
      name: 'Aayusha Karki',
      role: 'Fashion Blogger',
      rating: 5,
      comment: 'Classic Nail Art is genuinely the best studio in Nepal! The geometric line work on my acrylics lasted over 5 weeks with zero chipping. The vibe is so soothing!',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      service: 'Custom Nail Art & Extensions'
    },
    {
      name: 'Smriti Gurung',
      role: 'Bride',
      rating: 5,
      comment: 'They did my bridal nails with Swarovski pearls and French ombre. Everyone at my wedding was asking where I got them done. Truly artists at work!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
      service: 'Bridal Nail Couture'
    },
    {
      name: 'Rojina Shrestha',
      role: 'Verified Client',
      rating: 5,
      comment: 'Extremely hygienic, autoclaved tools, medical-grade cleanliness, and the staff treats you like royalty. Highly recommended for Russian manicures.',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
      service: 'Russian Manicure & Hand Spa'
    }
  ];

  const filteredGallery = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const toggleLike = (id: string) => {
    setLikedPhotos(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const calculateEstimate = () => {
    let base = 1500;
    if (calcShape === 'Coffin' || calcShape === 'Stiletto') base += 500;
    if (calcLength === 'Medium') base += 400;
    if (calcLength === 'Long') base += 800;
    if (calcLength === 'XL') base += 1200;
    if (calcArtLevel === 'Medium 3D') base += 900;
    if (calcArtLevel === 'Luxury Gems & Chrome') base += 1800;
    return base;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
    setTimeout(() => {
      setBookingConfirmed(false);
      setIsBookingOpen(false);
      setBookingStep(1);
    }, 2800);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F5] text-[#222222] font-sans antialiased selection:bg-[#582C87] selection:text-white">
      {/* 1. TOP UTILITY BAR (Exact layout as mockup) */}
      <div className="bg-[#FFFFFF] border-b border-gray-100 text-xs text-gray-600 py-2.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left: Social Icons + Contact info */}
          <div className="flex items-center flex-wrap gap-4 sm:gap-6">
            <div className="flex items-center space-x-3 text-gray-700">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#582C87] transition-colors" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#582C87] transition-colors" aria-label="Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#582C87] transition-colors" aria-label="Twitter">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#582C87] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#582C87] transition-colors" aria-label="YouTube">
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="hidden sm:block h-3.5 w-[1px] bg-gray-200" />

            <div className="flex items-center gap-1.5 text-gray-700 hover:text-[#582C87] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#582C87]" />
              <a href="tel:+9779846000000" className="font-medium">+977 9846000000</a>
            </div>

            <div className="hidden md:flex items-center gap-1.5 text-gray-700 hover:text-[#582C87] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#582C87]" />
              <a href="mailto:nailcareexpert@gmail.com">nailcareexpert@gmail.com</a>
            </div>
          </div>

          {/* Right: Location + Log In / Sign Up */}
          <div className="flex items-center space-x-5">
            <div className="flex items-center gap-1 text-gray-700">
              <MapPin className="w-3.5 h-3.5 text-[#582C87]" />
              <span>Lakeside-6, Pokhara, Nepal</span>
            </div>

            <div className="h-3.5 w-[1px] bg-gray-200" />

            <button
              onClick={() => { setAuthMode('login'); setIsAuthOpen(true); }}
              className="flex items-center gap-1 text-gray-800 hover:text-[#582C87] font-semibold transition-colors cursor-pointer"
            >
              <User className="w-3.5 h-3.5 text-[#582C87]" />
              <span>Log In / Sign Up</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER */}
      <header
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? 'shadow-sm py-3' : 'py-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4E2677] to-[#7B46B9] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1F1F24] group-hover:text-[#582C87] transition-colors leading-none">
                Classic
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-[0.25em] text-[#582C87] mt-0.5">
                Nail Art Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (matching screenshot) */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold uppercase tracking-wider text-gray-700">
            <a href="#home" className="text-[#582C87] hover:text-[#4E2677] transition-colors">
              Home
            </a>
            <a href="#services" className="hover:text-[#582C87] transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-[#582C87] transition-colors">
              About Us
            </a>
            <a href="#gallery" className="hover:text-[#582C87] transition-colors">
              Gallery
            </a>
            <a href="#videos" className="hover:text-[#582C87] transition-colors">
              Videos
            </a>
            <a href="#testimonials" className="hover:text-[#582C87] transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-[#582C87] transition-colors">
              Contact Us
            </a>
          </nav>

          {/* CTA Book Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-[#582C87] hover:bg-[#47226F] text-white text-xs uppercase font-semibold tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#582C87] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-5 shadow-lg animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-4 text-sm font-semibold uppercase tracking-wider text-gray-800">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#582C87] hover:text-[#4E2677]"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#582C87]"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#582C87]"
              >
                About Us
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#582C87]"
              >
                Gallery
              </a>
              <a
                href="#videos"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#582C87]"
              >
                Videos
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#582C87]"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#582C87]"
              >
                Contact Us
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsBookingOpen(true);
                }}
                className="w-full mt-2 bg-[#582C87] text-white py-3 rounded-xl font-medium tracking-normal text-center shadow"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (Faithful recreation with botanical foliage + black patterned nail hand showcase + purple Explore Now button) */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#FAF8F5] via-[#F6F2EE] to-[#EFEAE4] py-12 md:py-20 lg:py-28 border-b border-[#E8E1D9]">
        {/* Subtle Decorative Botanical Leaves (SVG Line Art as in screenshot) */}
        <div className="absolute left-0 top-0 bottom-0 pointer-events-none opacity-40 select-none">
          <svg width="220" height="480" viewBox="0 0 220 480" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-40 20C20 80 80 120 70 200C60 280 -20 320 30 420" stroke="#7E6C88" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M40 90C70 80 100 95 100 115C100 135 70 140 40 90Z" stroke="#582C87" strokeWidth="1.2" />
            <path d="M60 170C95 160 125 175 125 195C125 215 95 220 60 170Z" stroke="#582C87" strokeWidth="1.2" />
            <path d="M20 280C55 265 85 280 85 300C85 320 55 325 20 280Z" stroke="#582C87" strokeWidth="1.2" />
            <path d="M-10 380C25 365 55 380 55 400C55 420 25 425 -10 380Z" stroke="#582C87" strokeWidth="1.2" />
          </svg>
        </div>

        <div className="absolute right-0 top-6 pointer-events-none opacity-30 select-none">
          <svg width="180" height="300" viewBox="0 0 180 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M190 20C140 70 110 130 130 200" stroke="#7E6C88" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M130 90C100 80 80 95 80 115C80 135 105 140 130 90Z" stroke="#582C87" strokeWidth="1.2" />
            <path d="M140 180C110 170 90 185 90 205C90 225 115 230 140 180Z" stroke="#582C87" strokeWidth="1.2" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Hero Image (Black & White Patterned Nail Art hand on grey knitwear) */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-lg">
                {/* Glow & Backdrop Ring */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#582C87]/20 via-[#C9A227]/10 to-transparent rounded-[2.5rem] filter blur-xl opacity-70" />
                
                {/* Main Hero Card Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-white group">
                  <img
                    src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=85"
                    alt="Creative and Beautiful Nail Art Designs"
                    className="w-full h-[380px] sm:h-[460px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlay for luxury feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Highlight Pill */}
                  <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#582C87]/10 flex items-center justify-center text-[#582C87]">
                        <Gem className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-xs font-bold text-gray-900">Custom Hand-Painted Art</h2>
                        <p className="text-[11px] text-gray-500">Intricate geometric & luxury jewel finish</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#582C87] bg-[#582C87]/10 px-2.5 py-1 rounded-full">
                      Trending
                    </span>
                  </div>
                </div>

                {/* Floating Rating Badge */}
                <div className="absolute -top-4 -right-4 bg-white px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 animate-bounce duration-1000">
                  <div className="flex text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-gray-900">4.9 / 5.0 Rating</div>
                    <div className="text-[10px] text-gray-500">1,200+ Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Typography & CTA (Exact headline from screenshot) */}
            <div className="lg:col-span-6 text-center lg:text-left order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#582C87]/10 text-[#582C87] text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premier Nail Sanctuary & Academy</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1F1F24] tracking-tight leading-[1.15]">
                Creative and Beautiful Nail Art <br className="hidden sm:inline" />
                <span className="text-[#582C87]">Designs For You</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Indulge in couture nail enhancements, delicate hand-painted motifs, Russian manicure precision, and long-lasting gel extensions crafted specifically for your unique elegance.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                {/* Exact Pill Button as shown in screenshot */}
                <a
                  href="#services"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#582C87] hover:bg-[#482073] text-white text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Explore Now
                  <ChevronRight className="w-4 h-4 ml-1.5" />
                </a>

                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 text-sm font-semibold tracking-wide shadow-sm hover:shadow transition-all"
                >
                  <Calendar className="w-4 h-4 mr-2 text-[#582C87]" />
                  Book Appointment
                </button>
              </div>

              {/* Highlights & Guarantees */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200/80 max-w-lg mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-serif font-bold text-gray-900">500+</div>
                  <div className="text-xs text-gray-500 mt-0.5">Exclusive Designs</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-serif font-bold text-gray-900">100%</div>
                  <div className="text-xs text-gray-500 mt-0.5">Sterilized Tools</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-serif font-bold text-gray-900">4+ Weeks</div>
                  <div className="text-xs text-gray-500 mt-0.5">Lasting Gel Durability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION (Matching clean title "Services" and rounded cards from screenshot) */}
      <section id="services" className="py-20 md:py-28 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Centered Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F1F24] tracking-tight">
              Services
            </h2>
            <div className="w-16 h-1 bg-[#582C87] mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-gray-600 font-normal">
              Explore our curated selection of bespoke nail art, Russian cuticle care, extensions, and restorative hand spa rituals.
            </p>
          </div>

          {/* Service Cards Grid (4 featured cards as in screenshot + more) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="bg-[#FAF7F5] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 flex flex-col group"
              >
                {/* Image Container with rounded top */}
                <div className="relative h-56 sm:h-60 overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#582C87] shadow-sm">
                    {service.price}
                  </div>
                  {service.popular && (
                    <div className="absolute top-3 left-3 bg-[#582C87] text-white px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider shadow-sm">
                      Popular
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[#582C87] font-semibold mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{service.duration}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-[#582C87] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gray-200/60 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedServiceForModal(service)}
                      className="text-xs font-semibold text-gray-700 hover:text-[#582C87] transition-colors flex items-center"
                    >
                      Details
                      <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                    </button>
                    <button
                      onClick={() => {
                        setBookingData(prev => ({ ...prev, service: service.title }));
                        setIsBookingOpen(true);
                      }}
                      className="bg-[#582C87] hover:bg-[#451F6E] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-sm hover:shadow"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Remaining Services expandable row */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.slice(4).map((service) => (
              <div
                key={service.id}
                className="bg-[#FAF7F5] p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-5 items-center hover:shadow-md transition-shadow"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full sm:w-36 h-36 object-cover rounded-2xl shadow-sm"
                />
                <div className="flex-1 space-y-2 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-between">
                    <span className="text-xs font-bold text-[#582C87] uppercase tracking-wider">{service.category}</span>
                    <span className="text-xs font-bold text-gray-900">{service.price}</span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-gray-900">{service.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{service.description}</p>
                  <div className="pt-2 flex items-center justify-center sm:justify-start gap-3">
                    <button
                      onClick={() => {
                        setBookingData(prev => ({ ...prev, service: service.title }));
                        setIsBookingOpen(true);
                      }}
                      className="bg-[#582C87] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#431B6D] transition-colors"
                    >
                      Book This Service
                    </button>
                    <button
                      onClick={() => setSelectedServiceForModal(service)}
                      className="text-xs text-gray-600 hover:text-gray-900 underline font-medium"
                    >
                      View Inclusions
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE NAIL STYLE & PRICE ESTIMATOR */}
      <section className="py-16 bg-gradient-to-b from-[#FFFFFF] to-[#FAF7F5] border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#E9E1DA]">
            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#582C87]/10 text-[#582C87] text-xs font-bold">
                <Sliders className="w-3.5 h-3.5" />
                <span>Interactive Visualizer</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
                Design Your Custom Nail Set
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Pick your preferred shape, length, and art style to get an instant cost estimate.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Controls */}
              <div className="lg:col-span-2 space-y-6">
                {/* 1. Shape Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2.5">
                    1. Select Nail Shape
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {(['Almond', 'Coffin', 'Stiletto', 'Square', 'Oval'] as const).map((shape) => (
                      <button
                        key={shape}
                        type="button"
                        onClick={() => setCalcShape(shape)}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                          calcShape === shape
                            ? 'bg-[#582C87] text-white border-[#582C87] shadow-sm'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {shape}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Length Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2.5">
                    2. Select Nail Length
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {(['Short', 'Medium', 'Long', 'XL'] as const).map((len) => (
                      <button
                        key={len}
                        type="button"
                        onClick={() => setCalcLength(len)}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                          calcLength === len
                            ? 'bg-[#582C87] text-white border-[#582C87] shadow-sm'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {len}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Art Complexity */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2.5">
                    3. Art & Embellishment Level
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {(['Simple', 'Medium 3D', 'Luxury Gems & Chrome'] as const).map((art) => (
                      <button
                        key={art}
                        type="button"
                        onClick={() => setCalcArtLevel(art)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                          calcArtLevel === art
                            ? 'bg-[#582C87] text-white border-[#582C87] shadow-sm'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {art}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Estimate Summary Box */}
              <div className="bg-[#FAF7F5] p-6 rounded-2xl border border-gray-200 text-center space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#582C87]">Estimated Total</span>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
                  NPR {calculateEstimate().toLocaleString()}
                </div>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>Shape: <span className="font-semibold text-gray-700">{calcShape}</span></div>
                  <div>Length: <span className="font-semibold text-gray-700">{calcLength}</span></div>
                  <div>Art: <span className="font-semibold text-gray-700">{calcArtLevel}</span></div>
                </div>
                <button
                  onClick={() => {
                    setBookingData(prev => ({
                      ...prev,
                      notes: `Custom Set: Shape ${calcShape}, Length ${calcLength}, Art Level ${calcArtLevel} (Estimate: NPR ${calculateEstimate()})`
                    }));
                    setIsBookingOpen(true);
                  }}
                  className="w-full bg-[#582C87] hover:bg-[#431B6D] text-white py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
                >
                  Book This Custom Set
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ABOUT US SECTION */}
      <section id="about" className="py-20 md:py-28 bg-[#FAF7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1000&q=80"
                  alt="Classic Nail Art Studio Experience"
                  className="w-full h-[440px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-gray-900">Certified Nail Masters</h5>
                    <p className="text-xs text-gray-500">Over 8 years of international salon excellence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text & Philosophy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#582C87]/10 text-[#582C87] text-xs font-semibold tracking-wide">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Heritage & Standards</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
                Where Nail Care Meets High Artistry
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Founded with a passion for creative self-expression, <strong>Classic Nail Art</strong> has evolved into Nepal's leading studio for luxury nail aesthetics and academy training. We believe nails are a canvas of personality, combining European Russian manicure standards with bespoke handcrafted art.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-sm flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#582C87]/10 text-[#582C87]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Medical-Grade Hygiene</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Autoclaved instruments & single-use disposable files</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-sm flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#582C87]/10 text-[#582C87]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Non-Toxic Gel Polishes</h4>
                    <p className="text-xs text-gray-500 mt-0.5">10-free vegan formulas that nurture natural nail beds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GALLERY SECTION (Filterable portfolio) */}
      <section id="gallery" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F1F24] tracking-tight">
              Design Gallery
            </h2>
            <div className="w-16 h-1 bg-[#582C87] mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-gray-600">
              Browse our latest creations handcrafted by our certified nail technicians.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {['All', 'Nail Art', 'Extensions', 'Minimalist', '3D Art'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#582C87] text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-3xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-80"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <button
                      onClick={() => toggleLike(item.id)}
                      className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-rose-500 hover:scale-110 transition-transform shadow"
                    >
                      <Heart className={`w-4 h-4 ${likedPhotos[item.id] ? 'fill-rose-500' : ''}`} />
                    </button>
                  </div>
                  <div className="text-white space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">{item.category}</span>
                    <h4 className="font-serif text-lg font-bold">{item.title}</h4>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-white/80">{likedPhotos[item.id] ? item.likes + 1 : item.likes} likes</span>
                      <button
                        onClick={() => {
                          setBookingData(prev => ({ ...prev, notes: `Interested in Gallery style: ${item.title}` }));
                          setIsBookingOpen(true);
                        }}
                        className="text-xs bg-[#582C87] text-white px-3 py-1.5 rounded-full font-semibold hover:bg-[#431B6D]"
                      >
                        Request This Look
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. VIDEOS SECTION (As shown in top nav) */}
      <section id="videos" className="py-20 md:py-28 bg-[#FAF7F5] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#582C87]/10 text-[#582C87] text-xs font-bold">
              <Camera className="w-3.5 h-3.5" />
              <span>Behind The Art</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F1F24] tracking-tight">
              Techniques & Tutorials
            </h2>
            <div className="w-16 h-1 bg-[#582C87] mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-gray-600">
              Watch how our master artists bring intricate geometric designs and chrome effects to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((vid) => (
              <div
                key={vid.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div
                  onClick={() => setActiveVideo(vid)}
                  className="relative h-52 overflow-hidden cursor-pointer bg-gray-900"
                >
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 opacity-90 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#582C87] shadow-xl group-hover:scale-115 group-hover:bg-[#582C87] group-hover:text-white transition-all">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/75 text-white text-[11px] font-semibold px-2 py-0.5 rounded-md">
                    {vid.duration}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                      <Eye className="w-3.5 h-3.5 text-[#582C87]" />
                      <span>{vid.views}</span>
                    </div>
                    <h4 className="font-serif text-base font-bold text-gray-900 group-hover:text-[#582C87] transition-colors">
                      {vid.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                      {vid.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveVideo(vid)}
                    className="text-xs font-bold text-[#582C87] hover:underline inline-flex items-center"
                  >
                    Watch Video Tutorial
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F1F24] tracking-tight">
              Testimonials
            </h2>
            <div className="w-16 h-1 bg-[#582C87] mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-gray-600">
              Read real feedback from our satisfied clients in Pokhara and worldwide travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F5] rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
                    "{t.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white shadow"
                  />
                  <div>
                    <h5 className="font-serif font-bold text-sm text-gray-900">{t.name}</h5>
                    <div className="text-[11px] text-gray-500">{t.service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CONTACT US & STUDIO LOCATION SECTION */}
      <section id="contact" className="py-20 md:py-28 bg-[#FAF7F5] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F1F24] tracking-tight">
              Contact Us
            </h2>
            <div className="w-16 h-1 bg-[#582C87] mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-gray-600">
              Visit our serene lakeside studio or send us an inquiry for custom appointments & masterclasses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Details Card */}
            <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-gray-900">Studio Hours & Location</h3>

              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#582C87]/10 text-[#582C87] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-gray-900">Address:</strong>
                    Lakeside Road, Street No. 6, Pokhara 33700, Nepal
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#582C87]/10 text-[#582C87] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-gray-900">Phone / WhatsApp:</strong>
                    +977 9846000000 / +977 61 520000
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#582C87]/10 text-[#582C87] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-gray-900">Email:</strong>
                    nailcareexpert@gmail.com
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#582C87]/10 text-[#582C87] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-gray-900">Opening Hours:</strong>
                    Sunday – Saturday: 10:00 AM – 7:30 PM (All 7 Days)
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex gap-3">
                <a
                  href="https://wa.me/9779846000000"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="flex-1 bg-[#582C87] hover:bg-[#431B6D] text-white text-xs font-semibold py-3 rounded-xl shadow"
                >
                  Book Online
                </button>
              </div>
            </div>

            {/* Quick Message Form */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Send Us A Message</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for reaching out! Our team will contact you shortly.'); }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#582C87] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+977 98..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#582C87] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#582C87] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">How Can We Help?</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the nail style or appointment you'd like to book..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#582C87] text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#582C87] hover:bg-[#431B6D] text-white px-8 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow"
                >
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-[#18151D] text-gray-300 py-16 px-4 sm:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#582C87] to-[#8C52D3] flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold text-white">Classic Nail Art</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Nepal's premier luxury nail art studio and beauty academy. Elevating personal beauty through world-class manicure artistry and certified masterclasses.
            </p>
            <div className="flex items-center space-x-3 pt-2 text-gray-400">
              <a href="https://instagram.com" className="hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="https://facebook.com" className="hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="https://youtube.com" className="hover:text-white transition-colors"><Youtube className="w-4 h-4" /></a>
              <a href="https://twitter.com" className="hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">Navigation</h5>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#videos" className="hover:text-white transition-colors">Videos</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">Our Services</h5>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Russian Manicure</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Gel Extensions</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Custom 3D Art</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Chrome Glazed Nails</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Bridal Nail Sets</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">VIP Newsletter</h5>
            <p className="text-xs text-gray-400 leading-relaxed">
              Subscribe for exclusive seasonal lookbooks, discounts, and masterclass updates.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to VIP club!'); }} className="space-y-2">
              <input
                type="email"
                required
                placeholder="Enter email"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white text-xs border border-gray-700 focus:outline-none focus:border-[#8C52D3]"
              />
              <button
                type="submit"
                className="w-full bg-[#582C87] hover:bg-[#6D34A8] text-white text-xs font-semibold py-2 rounded-lg transition-colors"
              >
                Join Club
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Classic Nail Art Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* 12. APPOINTMENT BOOKING MODAL */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingConfirmed ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900">Appointment Confirmed!</h3>
                <p className="text-xs text-gray-600 max-w-xs mx-auto">
                  We look forward to welcoming you to Classic Nail Art. A confirmation SMS & email has been dispatched.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-[10px] font-bold text-[#582C87] uppercase tracking-widest">Online Reservation</span>
                  <h3 className="font-serif text-2xl font-bold text-gray-900">Book Your Session</h3>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Select Service</label>
                    <select
                      value={bookingData.service}
                      onChange={(e) => setBookingData({ ...bookingData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#582C87] focus:outline-none"
                    >
                      {services.map(s => (
                        <option key={s.id} value={s.title}>{s.title} ({s.price})</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Date</label>
                      <input
                        type="date"
                        required
                        value={bookingData.date}
                        onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#582C87] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Time Slot</label>
                      <select
                        value={bookingData.time}
                        onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#582C87] focus:outline-none"
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
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Gurung"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#582C87] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+977 98..."
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#582C87] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Special Preferences / Notes</label>
                    <input
                      type="text"
                      placeholder="e.g. Prefer matte finish or custom design inspiration"
                      value={bookingData.notes}
                      onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#582C87] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#582C87] hover:bg-[#431B6D] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md mt-2"
                  >
                    Confirm Booking
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 13. AUTH MODAL (Log In / Sign Up) */}
      {isAuthOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setIsAuthOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#582C87]/10 flex items-center justify-center text-[#582C87] mx-auto mb-2">
                <User className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
              </h3>
              <p className="text-xs text-gray-500">
                {authMode === 'login' ? 'Sign in to view your appointments and loyalty rewards' : 'Join our VIP member club for 15% off your first visit'}
              </p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert(`Signed in successfully!`); setIsAuthOpen(false); }} className="space-y-3">
              {authMode === 'signup' && (
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Aayusha Thapa"
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#582C87] focus:outline-none"
                  />
                </div>
              )}
              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#582C87] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Password</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#582C87] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#582C87] hover:bg-[#431B6D] text-white py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors shadow mt-2"
              >
                {authMode === 'login' ? 'Sign In' : 'Register'}
              </button>
            </form>

            <div className="text-center mt-4 text-xs text-gray-500">
              {authMode === 'login' ? (
                <>Don't have an account? <button onClick={() => setAuthMode('signup')} className="text-[#582C87] font-bold hover:underline">Sign Up</button></>
              ) : (
                <>Already a member? <button onClick={() => setAuthMode('login')} className="text-[#582C87] font-bold hover:underline">Log In</button></>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 14. SERVICE DETAILS MODAL */}
      {selectedServiceForModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedServiceForModal(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <img
                src={selectedServiceForModal.image}
                alt={selectedServiceForModal.title}
                className="w-full h-48 object-cover rounded-2xl"
              />
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#582C87] uppercase tracking-wider">
                  {selectedServiceForModal.category} • {selectedServiceForModal.duration}
                </span>
                <span className="text-base font-serif font-bold text-gray-900">{selectedServiceForModal.price}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900">{selectedServiceForModal.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{selectedServiceForModal.description}</p>
              
              <div className="space-y-2 pt-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-gray-800">What's Included:</h5>
                <ul className="space-y-1.5">
                  {selectedServiceForModal.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  onClick={() => {
                    setBookingData(prev => ({ ...prev, service: selectedServiceForModal.title }));
                    setSelectedServiceForModal(null);
                    setIsBookingOpen(true);
                  }}
                  className="flex-1 bg-[#582C87] text-white py-3 rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#431B6D]"
                >
                  Book This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 15. VIDEO PLAYER MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-gray-950 text-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-1.5"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="space-y-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute text-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-[#582C87] flex items-center justify-center mx-auto animate-pulse">
                    <Play className="w-8 h-8 fill-white ml-1 text-white" />
                  </div>
                  <p className="text-xs text-gray-300">Playing Tutorial Demo</p>
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold">{activeVideo.title}</h3>
              <p className="text-xs text-gray-400">{activeVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
