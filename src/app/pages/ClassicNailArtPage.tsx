import React, { useState, useEffect, useMemo } from 'react';
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
  ChevronDown,
  Sparkles,
  Heart,
  Calendar,
  Check,
  Send,
  MessageCircle,
  Shield,
  Star,
  ArrowRight,
  Sliders,
  HelpCircle,
  Palette,
  CheckCircle2,
  Copy,
  Info,
  Search,
  Play,
  Share2,
  Gift,
  Tag,
  CheckCircle
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  category: string;
  duration: string;
  price: string;
  priceNum: number;
  description: string;
  image: string;
  tag?: string;
  highlights: string[];
}

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  details: string;
  productsUsed: string;
  timeEstimate: string;
  priceEstimate: string;
}

interface VideoTutorial {
  id: string;
  title: string;
  duration: string;
  views: string;
  thumbnail: string;
  description: string;
  tag: string;
}

export function ClassicNailArtPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeServiceTab, setActiveServiceTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoTutorial | null>(null);
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Live Studio Open Status
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Live Nail Simulator State
  const [simShape, setSimShape] = useState<'Almond' | 'Coffin' | 'Stiletto' | 'Square' | 'Oval'>('Almond');
  const [simLength, setSimLength] = useState<'Natural' | 'Medium' | 'Long' | 'XL'>('Medium');
  const [simColor, setSimColor] = useState({ name: 'Midnight Plum', hex: '#4A2A61', bgHex: '#F2ECF7' });
  const [simFinish, setSimFinish] = useState<'Mirror Gloss' | 'Velvet Matte' | 'Chrome Glazed' | '3D Embellished'>('Mirror Gloss');

  // Form State
  const [formData, setFormData] = useState({
    service: 'Classic & Russian Manicure',
    artist: 'Priya Shrestha (Master Artist)',
    date: '2026-08-18',
    time: '11:00 AM',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);

    // Calculate if salon is open (10:00 to 19:30)
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentMins = hours * 60 + minutes;
    const openMins = 10 * 60;
    const closeMins = 19 * 60 + 30;
    setIsOpenNow(currentMins >= openMins && currentMins <= closeMins);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const colorSwatches = [
    { name: 'Midnight Plum', hex: '#4A2A61', bgHex: '#F2ECF7' },
    { name: 'Lavender Mist', hex: '#A78BFA', bgHex: '#F5F3FF' },
    { name: 'Porcelain Nude', hex: '#E7D8CF', bgHex: '#FAF7F5' },
    { name: 'Cherry Noir', hex: '#6B1D2F', bgHex: '#FDF2F4' },
    { name: 'Pearl Glaze', hex: '#F0EDE6', bgHex: '#FAF8F5' },
    { name: 'Sage Velvet', hex: '#6A8473', bgHex: '#F1F5F2' },
    { name: 'Onyx Tribal', hex: '#1C1917', bgHex: '#F5F5F4' },
    { name: 'Champagne Gold', hex: '#C5A880', bgHex: '#FAF6F0' }
  ];

  const services: Service[] = [
    {
      id: 'srv-1',
      title: 'Classic & Russian Manicure',
      category: 'Care',
      duration: '45 min',
      price: 'NPR 1,500',
      priceNum: 1500,
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
      priceNum: 2800,
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
      priceNum: 3500,
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
      priceNum: 2000,
      description: 'Warm Himalayan herbal bath, gentle rose petal sugar scrub, warm paraffin wax envelope, and relaxing acupressure massage.',
      image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
      highlights: ['Dead skin exfoliation', 'Deep collagen hydration', 'Relieves tension & dryness']
    },
    {
      id: 'srv-5',
      title: 'Glazed French Chrome & Ombre',
      category: 'Art',
      duration: '60 min',
      price: 'NPR 2,400',
      priceNum: 2400,
      description: 'The iconic Hailey-inspired glazed pearl sheen, micro-French tips, and seamless airbrushed gradient transitions.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      highlights: ['Fine chrome powder buffing', 'Micro precision smile line', '4-week mirror shine']
    },
    {
      id: 'srv-6',
      title: 'Bridal & Red Carpet Set',
      category: 'Extensions',
      duration: '120 min',
      price: 'NPR 5,500',
      priceNum: 5500,
      tag: 'Luxury',
      description: 'Bespoke bridal consultation, full sculpted gel extensions, genuine freshwater pearl embellishments, and matching pedicure.',
      image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80',
      highlights: ['Matching hand + foot set', 'Swarovski & pearl accents', 'Bridal touch-up kit included']
    }
  ];

  const gallery: GalleryItem[] = [
    {
      id: 'g1',
      title: 'Minimalist Line & Pearl Glaze',
      category: 'Minimal',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      details: 'Clean neutral almond nails finished with micro white geometric arch lines and holographic pearl chrome dusting.',
      productsUsed: 'Japanese Hard Gel Base + Chrome Dust #01 + No-Wipe High Gloss Top',
      timeEstimate: '60 mins',
      priceEstimate: 'NPR 2,400'
    },
    {
      id: 'g2',
      title: 'Midnight Tribal Geometry',
      category: 'Hand-Painted',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
      details: 'Our signature monochrome editorial set with precise hand-painted symmetric mandala and tribal geometric motifs.',
      productsUsed: 'Black Onyx Gel Liner + Matte Velvet Base + Silver Micro Foils',
      timeEstimate: '75 mins',
      priceEstimate: 'NPR 2,800'
    },
    {
      id: 'g3',
      title: 'Pastel Lilac Almond Gloss',
      category: 'Extensions',
      image: 'https://images.unsplash.com/photo-1638814378821-1c7cbbd648ac?auto=format&fit=crop&w=800&q=80',
      details: 'Soft lavender-lilac apex extensions crafted with flexible polygel for natural weight and unbreakable strength.',
      productsUsed: 'Sculpting Polygel + Pastel Lilac Polish #42 + Organic Cuticle Oil',
      timeEstimate: '90 mins',
      priceEstimate: 'NPR 3,500'
    },
    {
      id: 'g4',
      title: 'Classic French Ombre Chrome',
      category: 'Minimal',
      image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80',
      details: 'Subtle baby boomer soft fade from natural translucent pink into crisp white, glazed with fine iridescent powder.',
      productsUsed: 'Airbrush Ombre Gel + Glazed Powder + Keratin Base',
      timeEstimate: '65 mins',
      priceEstimate: 'NPR 2,500'
    },
    {
      id: 'g5',
      title: 'Velvet Ruby Red & Gold Flakes',
      category: 'Hand-Painted',
      image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80',
      details: 'Deep royal crimson red gel accented with encapsulated 24k gold leafing and 3D crystal clusters for celebrations.',
      productsUsed: 'Crimson Red Gel #18 + 24K Gold Flake Foil + Swarovski Crystals',
      timeEstimate: '85 mins',
      priceEstimate: 'NPR 3,200'
    },
    {
      id: 'g6',
      title: 'Botanical Leaf Outline & Nude Gel',
      category: 'Minimal',
      image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
      details: 'Understated elegance featuring delicate hand-drawn botanical sprigs on a sheer porcelain nude base.',
      productsUsed: 'Sheer Nude Base #03 + Ultra-Fine Detail Liner Brush #000',
      timeEstimate: '55 mins',
      priceEstimate: 'NPR 2,200'
    }
  ];

  const videos: VideoTutorial[] = [
    {
      id: 'v1',
      title: 'Intricate Tribal Geometric Detailing',
      duration: '4:15',
      views: '18.4K views',
      tag: 'Hand-Painted Art',
      thumbnail: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
      description: 'Master nail artist Priya demonstrates razor-thin brush strokes for symmetrical mandala patterns.'
    },
    {
      id: 'v2',
      title: 'Flawless Glazed Chrome Application',
      duration: '3:20',
      views: '29.1K views',
      tag: 'Technique',
      thumbnail: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      description: 'The secret temperature and top coat cure time needed for a reflective glass chrome shine.'
    },
    {
      id: 'v3',
      title: 'Russian Manicure E-File Cuticle Prep',
      duration: '5:40',
      views: '42.6K views',
      tag: 'Care & Prep',
      thumbnail: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
      description: 'How diamond ball and flame bits cleanly lift and buff cuticles without scissors or trauma.'
    }
  ];

  const packages = [
    {
      title: 'Lakeside Refresh Package',
      discount: 'Save 20%',
      price: 'NPR 3,200',
      original: 'NPR 4,000',
      includes: ['Classic Russian Manicure', 'Warm Paraffin Hand Spa', 'Solid Gel Polish Finish', 'Botanical Cuticle Oil Bottle']
    },
    {
      title: 'Bridal Couture Glamour Duo',
      discount: 'Save 25%',
      price: 'NPR 6,800',
      original: 'NPR 9,000',
      includes: ['Full Sculpted Gel Extensions', 'Swarovski & Pearl 3D Accents', 'Luxury Pedicure & Foot Scrub', '1 Free 3-Week Refill Touchup']
    }
  ];

  const careTips = [
    {
      title: 'First 24 Hours',
      desc: 'Avoid heavy sauna sessions, scalding hot baths, and harsh cleaning chemicals to let the gel seal completely.'
    },
    {
      title: 'Daily Hydration',
      desc: 'Apply jojoba or vitamin E cuticle oil twice daily to keep natural nail beds flexible and prevent edge lifting.'
    },
    {
      title: 'Nails Are Jewels, Not Tools',
      desc: 'Use fingertips or tools to open soda cans and peel labels to preserve apex strength and extension structure.'
    }
  ];

  const faqs = [
    {
      q: 'What is a Russian Manicure and how does it differ from a standard manicure?',
      a: 'A Russian Manicure is a specialized dry technique using electric e-file diamond bits to gently and cleanly remove dead cuticle skin and prepare the entire nail plate. Because we polish extremely close to the proximal fold, the manicure looks immaculate for 3 to 4 weeks with no lifting or ragged edges.'
    },
    {
      q: 'How long do your gel extensions typically last?',
      a: 'Our polygel and hard gel extensions last 3 to 5 weeks without chipping or lifting when proper aftercare is followed. We recommend a refill or removal after 4 weeks to maintain nail balance and healthy growth.'
    },
    {
      q: 'Are your tools medical-grade sterilized?',
      a: 'Yes, 100%. All stainless steel instruments undergo a three-step medical disinfection cycle: ultrasonic bath cleansing, high-level chemical disinfection, and medical autoclave sterilization sealed in single-use pouches opened right before your service. Buffers and nail files are always single-use.'
    },
    {
      q: 'Do you take walk-ins or is an appointment required?',
      a: 'We welcome walk-ins based on daily studio availability, but because each bespoke nail art appointment requires dedicated 1-on-1 focus, we strongly recommend booking an appointment online or via WhatsApp.'
    },
    {
      q: 'Can I bring my own nail design inspiration from Pinterest or Instagram?',
      a: 'Absolutely! Our master artists love custom work. You can show us reference photos during your appointment, and we will tailor the colors, shapes, and proportions to your hands.'
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

  const filteredServices = useMemo(() => {
    return services.filter(s => {
      const matchesCategory = activeServiceTab === 'All' || s.category === activeServiceTab;
      const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            s.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeServiceTab, searchQuery]);

  const filteredGallery = activeCategory === 'All'
    ? gallery
    : gallery.filter(item => item.category === activeCategory);

  const toggleLike = (id: string) => {
    const nextState = !likedItems[id];
    setLikedItems(prev => ({ ...prev, [id]: nextState }));
    showToast(nextState ? 'Saved look to your favorites!' : 'Removed from favorites');
  };

  const calculateSimulatorPrice = () => {
    let base = 1500;
    if (simShape === 'Coffin' || simShape === 'Stiletto') base += 400;
    if (simLength === 'Medium') base += 500;
    if (simLength === 'Long') base += 900;
    if (simLength === 'XL') base += 1300;
    if (simFinish === 'Chrome Glazed') base += 500;
    if (simFinish === '3D Embellished') base += 900;
    return base;
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
    <div className="min-h-screen bg-[#FAF9F6] text-[#222222] font-sans antialiased selection:bg-[#5C3D75] selection:text-white pb-14 sm:pb-0">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1C1917] text-white text-xs px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 border border-gray-700 animate-in slide-in-from-bottom-2 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. TOP UTILITY BAR (Clean, functional, with Live Open Status) */}
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

          {/* Right: Live Open Badge + Location */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-1.5">
              <span className={`inline-block w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
              <span className="text-xs font-semibold text-gray-700">
                {isOpenNow ? 'Open Now (Closes 7:30 PM)' : 'Opens at 10:00 AM'}
              </span>
            </div>

            <div className="h-3.5 w-px bg-[#E2DED5]" />

            <div className="flex items-center gap-1.5 text-[#666666]">
              <MapPin className="w-3.5 h-3.5 text-[#5C3D75]" />
              <span>Lakeside-6, Pokhara</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
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
                Studio & Academy
              </span>
            </div>
          </a>

          {/* Nav Items */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-semibold uppercase tracking-wider text-[#444444]">
            <a href="#home" className="text-[#5C3D75] hover:text-[#462B5B] transition-colors">Home</a>
            <a href="#services" className="hover:text-[#5C3D75] transition-colors">Services</a>
            <a href="#packages" className="hover:text-[#5C3D75] transition-colors">Packages</a>
            <a href="#customizer" className="hover:text-[#5C3D75] transition-colors">Customizer</a>
            <a href="#gallery" className="hover:text-[#5C3D75] transition-colors">Lookbook</a>
            <a href="#videos" className="hover:text-[#5C3D75] transition-colors">Videos</a>
            <a href="#about" className="hover:text-[#5C3D75] transition-colors">About Us</a>
            <a href="#faq" className="hover:text-[#5C3D75] transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-[#5C3D75] transition-colors">Contact</a>
          </nav>

          {/* Direct CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setBookingOpen(true)}
              className="bg-[#5C3D75] hover:bg-[#4B2F60] text-white text-xs uppercase font-semibold tracking-wider px-5 py-2.5 rounded-full transition-all duration-150 shadow-sm cursor-pointer"
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
            <a href="#packages" onClick={() => setMobileMenu(false)} className="block text-[#444444] hover:text-[#5C3D75] py-1">Packages</a>
            <a href="#customizer" onClick={() => setMobileMenu(false)} className="block text-[#444444] hover:text-[#5C3D75] py-1">Customizer</a>
            <a href="#gallery" onClick={() => setMobileMenu(false)} className="block text-[#444444] hover:text-[#5C3D75] py-1">Lookbook</a>
            <a href="#videos" onClick={() => setMobileMenu(false)} className="block text-[#444444] hover:text-[#5C3D75] py-1">Videos</a>
            <a href="#about" onClick={() => setMobileMenu(false)} className="block text-[#444444] hover:text-[#5C3D75] py-1">About Us</a>
            <a href="#faq" onClick={() => setMobileMenu(false)} className="block text-[#444444] hover:text-[#5C3D75] py-1">FAQ</a>
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

      {/* 3. HERO SECTION */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#F7F4EE] to-[#FAF9F6] py-12 md:py-20 border-b border-[#EDE8DE]">
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
            
            {/* Left: Hero Image */}
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

      {/* 4. SERVICES SECTION WITH SEARCH & CATEGORY FILTERS */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1C1917]">
              Services & Treatments
            </h2>
            <div className="w-12 h-0.5 bg-[#5C3D75] mx-auto rounded-full" />
            <p className="text-xs sm:text-sm text-[#666666]">
              Thoughtfully curated treatments for healthy, beautifully sculpted nails.
            </p>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-[#ECE7DC]">
            <div className="flex flex-wrap items-center gap-2">
              {['All', 'Care', 'Art', 'Extensions', 'Spa'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveServiceTab(tab)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    activeServiceTab === tab
                      ? 'bg-[#5C3D75] text-white shadow-xs'
                      : 'bg-[#F2EFE8] text-[#555555] hover:bg-[#EAE5DC]'
                  }`}
                >
                  {tab === 'All' ? 'All Services' : tab}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search treatments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-[#DCD6C9] bg-[#FAF9F6] text-xs focus:outline-none focus:border-[#5C3D75]"
              />
            </div>
          </div>

          {/* Service Cards Grid */}
          {filteredServices.length === 0 ? (
            <div className="text-center py-12 text-gray-500 text-xs">
              No services match "{searchQuery}". Try searching for manicure, gel, or spa.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-[#FAF9F6] rounded-2xl overflow-hidden border border-[#EBE6DC] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
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

                      <div className="pt-2 border-t border-[#ECE7DC] space-y-1">
                        {service.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#555555]">
                            <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <button
                      onClick={() => {
                        setFormData(prev => ({ ...prev, service: service.title }));
                        setBookingOpen(true);
                      }}
                      className="w-full bg-[#5C3D75] hover:bg-[#482F5E] text-white text-xs font-semibold py-2.5 rounded-xl transition-colors text-center cursor-pointer"
                    >
                      Book This Service
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 5. SPECIAL SEASONAL PACKAGES */}
      <section id="packages" className="py-16 md:py-20 bg-[#F7F5F0] border-y border-[#EAE5DA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-800 text-[11px] font-bold">
              <Gift className="w-3.5 h-3.5" />
              <span>Curated Bundles</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917]">
              Seasonal Studio Packages
            </h2>
            <p className="text-xs sm:text-sm text-[#666666]">
              Save more by bundling your favorite nail enhancements with relaxing spa rituals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E5DFD4] shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                      {pkg.discount}
                    </span>
                    <div className="text-right">
                      <span className="text-xs text-gray-400 line-through mr-2">{pkg.original}</span>
                      <span className="font-serif text-xl font-bold text-[#5C3D75]">{pkg.price}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-gray-900">{pkg.title}</h3>

                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Includes:</span>
                    <ul className="space-y-1.5">
                      {pkg.includes.map((inc, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setFormData(prev => ({ ...prev, service: pkg.title }));
                    setBookingOpen(true);
                  }}
                  className="w-full bg-[#5C3D75] hover:bg-[#472E5E] text-white py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Book Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE LIVE NAIL CUSTOMIZER / SHADE SIMULATOR */}
      <section id="customizer" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5C3D75]/10 text-[#5C3D75] text-xs font-bold">
              <Palette className="w-3.5 h-3.5" />
              <span>Interactive Style Simulator</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917]">
              Build Your Custom Nail Set
            </h2>
            <p className="text-xs sm:text-sm text-[#666666]">
              Choose your shape, length, shade, and finish to calculate instant estimated cost and book your custom session.
            </p>
          </div>

          <div className="bg-[#FAF9F6] rounded-3xl p-6 sm:p-10 border border-[#E2DBD0] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Customizer Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Shape */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-2">
                  1. Nail Shape
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {(['Almond', 'Coffin', 'Stiletto', 'Square', 'Oval'] as const).map(shape => (
                    <button
                      key={shape}
                      type="button"
                      onClick={() => setSimShape(shape)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                        simShape === shape
                          ? 'bg-[#5C3D75] text-white border-[#5C3D75] shadow-xs'
                          : 'bg-white text-[#555555] border-[#E5DFD4] hover:border-[#D0C8BC]'
                      }`}
                    >
                      {shape}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Length */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-2">
                  2. Desired Length
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {(['Natural', 'Medium', 'Long', 'XL'] as const).map(len => (
                    <button
                      key={len}
                      type="button"
                      onClick={() => setSimLength(len)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                        simLength === len
                          ? 'bg-[#5C3D75] text-white border-[#5C3D75] shadow-xs'
                          : 'bg-white text-[#555555] border-[#E5DFD4] hover:border-[#D0C8BC]'
                      }`}
                    >
                      {len}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Color Palette Swatches */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-2">
                  3. Color Shade: <span className="text-[#5C3D75] font-semibold">{simColor.name}</span>
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {colorSwatches.map(swatch => (
                    <button
                      key={swatch.name}
                      type="button"
                      onClick={() => setSimColor(swatch)}
                      className={`w-9 h-9 rounded-full border-2 transition-transform relative ${
                        simColor.name === swatch.name
                          ? 'scale-110 border-[#5C3D75] ring-2 ring-[#5C3D75]/20'
                          : 'border-white hover:scale-105'
                      }`}
                      style={{ backgroundColor: swatch.hex }}
                      title={swatch.name}
                    >
                      {simColor.name === swatch.name && (
                        <Check className={`w-3.5 h-3.5 mx-auto ${swatch.hex === '#F0EDE6' || swatch.hex === '#E7D8CF' ? 'text-gray-800' : 'text-white'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Finish */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-2">
                  4. Top Finish
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['Mirror Gloss', 'Velvet Matte', 'Chrome Glazed', '3D Embellished'] as const).map(fin => (
                    <button
                      key={fin}
                      type="button"
                      onClick={() => setSimFinish(fin)}
                      className={`py-2 px-2 rounded-xl text-[11px] font-semibold border transition-all text-center ${
                        simFinish === fin
                          ? 'bg-[#5C3D75] text-white border-[#5C3D75]'
                          : 'bg-white text-[#555555] border-[#E5DFD4] hover:border-[#D0C8BC]'
                      }`}
                    >
                      {fin}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Live Preview Box & Summary */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#E5DFD4] text-center space-y-4 shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#5C3D75]">
                Real-Time Configuration
              </span>

              {/* Graphical Visualizer Preview Card */}
              <div
                className="py-6 px-4 rounded-xl border border-[#E0D8CC] transition-colors relative overflow-hidden"
                style={{ backgroundColor: simColor.bgHex }}
              >
                <div
                  className="w-16 h-28 mx-auto rounded-t-full shadow-inner border-2 border-white/60 transition-all duration-300"
                  style={{
                    backgroundColor: simColor.hex,
                    borderRadius: simShape === 'Square' ? '6px 6px 0 0' : simShape === 'Stiletto' ? '40px 40px 0 0' : '30px 30px 0 0',
                    transform: simLength === 'XL' ? 'scaleY(1.2)' : simLength === 'Long' ? 'scaleY(1.1)' : simLength === 'Natural' ? 'scaleY(0.9)' : 'scaleY(1)'
                  }}
                />
                <div className="mt-4 font-serif text-sm font-bold text-gray-900">
                  {simShape} • {simLength} Length
                </div>
                <div className="text-xs text-gray-600">
                  {simColor.name} ({simFinish})
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs text-gray-500">Estimated Total</div>
                <div className="text-3xl font-serif font-bold text-[#1C1917]">
                  NPR {calculateSimulatorPrice().toLocaleString()}
                </div>
              </div>

              <button
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    notes: `Custom Simulator: Shape: ${simShape}, Length: ${simLength}, Color: ${simColor.name}, Finish: ${simFinish} (Est: NPR ${calculateSimulatorPrice()})`
                  }));
                  setBookingOpen(true);
                }}
                className="w-full bg-[#5C3D75] hover:bg-[#472E5E] text-white py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
              >
                Book This Custom Look
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 7. STUDIO LOOKBOOK & PORTFOLIO */}
      <section id="gallery" className="py-16 md:py-24 bg-[#F7F5F0] border-t border-[#EAE5DA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917]">
              Studio Lookbook
            </h2>
            <div className="w-12 h-0.5 bg-[#5C3D75] mx-auto rounded-full" />
            <p className="text-xs sm:text-sm text-[#666666]">
              Click any look to view details, duration, and required products.
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
                      : 'bg-white text-[#555555] border border-gray-200 hover:bg-[#EAE5DC]'
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
                className="group rounded-2xl overflow-hidden bg-white border border-[#ECE7DC] shadow-sm flex flex-col cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setSelectedGalleryItem(item)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(item.id);
                    }}
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
                  <span className="text-xs text-[#5C3D75] font-semibold flex items-center gap-1 group-hover:underline">
                    View Look <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. VIDEO TUTORIALS & ART REELS */}
      <section id="videos" className="py-16 md:py-24 bg-white border-t border-[#EAE5DA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#5C3D75]/10 text-[#5C3D75] text-[11px] font-bold">
              <Play className="w-3 h-3 fill-current" />
              <span>Studio Reels & Techniques</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917]">
              Watch Behind The Art
            </h2>
            <p className="text-xs sm:text-sm text-[#666666]">
              Short tutorials showcasing our Russian e-file cuticle techniques and hand-painted art.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((vid) => (
              <div
                key={vid.id}
                className="bg-[#FAF9F6] rounded-2xl overflow-hidden border border-[#EAE5DA] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div
                    onClick={() => setActiveVideo(vid)}
                    className="relative h-48 overflow-hidden bg-black cursor-pointer"
                  >
                    <img
                      src={vid.thumbnail}
                      alt={vid.title}
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white text-[#5C3D75] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                      {vid.duration}
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-gray-500">
                      <span className="text-[#5C3D75] font-bold uppercase">{vid.tag}</span>
                      <span>{vid.views}</span>
                    </div>
                    <h3 className="font-serif text-sm font-bold text-gray-900 leading-snug">{vid.title}</h3>
                    <p className="text-xs text-gray-600 line-clamp-2">{vid.description}</p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <button
                    onClick={() => setActiveVideo(vid)}
                    className="text-xs font-semibold text-[#5C3D75] hover:underline inline-flex items-center gap-1"
                  >
                    Watch Reel <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. NAIL AFTERCARE GUIDE */}
      <section className="py-14 bg-[#FAF9F6] border-t border-[#EAE5DA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-lg mx-auto mb-8 space-y-1">
            <h2 className="font-serif text-2xl font-bold text-[#1C1917]">Nail Health & Aftercare Tips</h2>
            <p className="text-xs text-gray-600">Keep your gel extensions and manicures fresh for 4+ weeks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {careTips.map((tip, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-[#EAE5DA] space-y-2">
                <div className="w-7 h-7 rounded-lg bg-[#5C3D75]/10 text-[#5C3D75] font-serif font-bold text-sm flex items-center justify-center">
                  0{i + 1}
                </div>
                <h3 className="font-bold text-xs text-gray-900">{tip.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. ABOUT US & HYGIENE PROMISE */}
      <section id="about" className="py-16 md:py-24 bg-white border-t border-[#EAE5DA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-4 border-[#FAF9F6] shadow-md bg-white">
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
                <div className="bg-[#FAF9F6] p-3.5 rounded-xl border border-[#E5E0D5] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#5C3D75]/10 text-[#5C3D75] shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#1C1917]">Autoclave Sterilization</h3>
                    <p className="text-[11px] text-[#666666] mt-0.5">Medical-grade sterilization for every metal tool.</p>
                  </div>
                </div>

                <div className="bg-[#FAF9F6] p-3.5 rounded-xl border border-[#E5E0D5] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#5C3D75]/10 text-[#5C3D75] shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#1C1917]">Certified Master Artists</h3>
                    <p className="text-[11px] text-[#666666] mt-0.5">Over 7 years of specialized Russian manicure experience.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. FREQUENTLY ASKED QUESTIONS */}
      <section id="faq" className="py-16 md:py-24 bg-[#FAF9F6] border-t border-[#EAE5DA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5C3D75]/10 text-[#5C3D75] text-xs font-bold">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#666666]">
              Everything you need to know before your appointment at Classic Nail Art.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#EAE5DA] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF9F6] transition-colors cursor-pointer"
                  >
                    <span className="font-serif text-sm sm:text-base font-bold text-[#1C1917]">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#5C3D75] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#F2ECE2] pt-3 animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 12. CLIENT TESTIMONIALS */}
      <section id="testimonials" className="py-16 md:py-24 bg-white border-t border-[#EAE5DA]">
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
              <div key={idx} className="bg-[#FAF9F6] p-6 rounded-2xl border border-[#EAE5DA] shadow-xs flex flex-col justify-between space-y-4">
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

      {/* 13. CONTACT & LOCATION SECTION */}
      <section id="contact" className="py-16 md:py-24 bg-[#FAF9F6] border-t border-[#EAE5DA]">
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

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/9779846000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard?.writeText('Lakeside Road, Street No. 6, Pokhara, Nepal');
                    showToast('Studio address copied to clipboard!');
                  }}
                  className="inline-flex items-center gap-1.5 bg-white border border-[#DCD6C9] hover:bg-[#F2EFE8] text-gray-700 text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  Copy Address
                </button>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE5DA]">
              <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-4">Send a Message</h3>
              <form onSubmit={(e) => { e.preventDefault(); showToast('Thank you! We will reply to your message shortly.'); }} className="space-y-3.5 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[#444444] font-semibold mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Shrestha"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD6C9] bg-[#FAF9F6] focus:outline-none focus:border-[#5C3D75]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#444444] font-semibold mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+977 98..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD6C9] bg-[#FAF9F6] focus:outline-none focus:border-[#5C3D75]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#444444] font-semibold mb-1">Message</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us what style or question you have..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD6C9] bg-[#FAF9F6] focus:outline-none focus:border-[#5C3D75]"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#5C3D75] hover:bg-[#482F5E] text-white font-semibold px-6 py-2.5 rounded-xl transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* 14. FOOTER */}
      <footer className="bg-[#1C1917] text-[#999999] text-xs py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white font-serif text-lg font-bold">
            <Sparkles className="w-4 h-4 text-[#A879CA]" />
            <span>Classic Nail Art Studio</span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-5 text-[#CCCCCC]">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#packages" className="hover:text-white transition-colors">Packages</a>
            <a href="#customizer" className="hover:text-white transition-colors">Customizer</a>
            <a href="#gallery" className="hover:text-white transition-colors">Lookbook</a>
            <a href="#videos" className="hover:text-white transition-colors">Videos</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <p className="text-[#777777]">
            © {new Date().getFullYear()} Classic Nail Art. All rights reserved.
          </p>
        </div>
      </footer>

      {/* 15. MOBILE FLOATING ACTION BAR */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-2.5 flex items-center justify-between gap-3 shadow-lg">
        <a
          href="tel:+9779846000000"
          className="flex-1 bg-gray-100 text-gray-800 text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#5C3D75]" />
          Call Studio
        </a>
        <button
          onClick={() => setBookingOpen(true)}
          className="flex-1 bg-[#5C3D75] text-white text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow"
        >
          <Calendar className="w-3.5 h-3.5" />
          Book Slot
        </button>
      </div>

      {/* 16. GALLERY LOOK DETAIL MODAL */}
      {selectedGalleryItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-in fade-in duration-150">
            <button
              onClick={() => setSelectedGalleryItem(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 text-gray-700 hover:text-black flex items-center justify-center shadow cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative h-64 bg-gray-100">
              <img
                src={selectedGalleryItem.image}
                alt={selectedGalleryItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#5C3D75] text-white text-[10px] uppercase font-bold px-2.5 py-1 rounded-full">
                {selectedGalleryItem.category}
              </div>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1C1917]">{selectedGalleryItem.title}</h3>
                <p className="text-[#555555] mt-1 leading-relaxed">{selectedGalleryItem.details}</p>
              </div>

              <div className="bg-[#FAF9F6] p-4 rounded-xl border border-[#EAE5DA] space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500 font-semibold">Products:</span>
                  <span className="text-gray-900 font-medium text-right max-w-xs">{selectedGalleryItem.productsUsed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-semibold">Duration:</span>
                  <span className="text-gray-900 font-medium">{selectedGalleryItem.timeEstimate}</span>
                </div>
                <div className="flex justify-between border-t border-[#ECE7DC] pt-2">
                  <span className="text-[#5C3D75] font-bold">Estimated Cost:</span>
                  <span className="text-[#1C1917] font-bold text-sm">{selectedGalleryItem.priceEstimate}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => {
                    setFormData(prev => ({ ...prev, notes: `Booked from Lookbook: ${selectedGalleryItem.title}` }));
                    setSelectedGalleryItem(null);
                    setBookingOpen(true);
                  }}
                  className="flex-1 bg-[#5C3D75] hover:bg-[#482F5E] text-white py-3 rounded-xl font-semibold uppercase tracking-wider cursor-pointer"
                >
                  Book This Look
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 17. VIDEO REEL PLAYER MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-gray-950 text-white rounded-3xl max-w-xl w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="space-y-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute text-center space-y-2">
                  <div className="w-14 h-14 rounded-full bg-[#5C3D75] flex items-center justify-center mx-auto shadow-lg animate-pulse">
                    <Play className="w-7 h-7 fill-white ml-0.5 text-white" />
                  </div>
                  <p className="text-xs text-gray-300">Playing Tutorial Demonstration</p>
                </div>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#A879CA]">{activeVideo.tag}</span>
                <h3 className="font-serif text-lg font-bold mt-0.5">{activeVideo.title}</h3>
                <p className="text-xs text-gray-400 mt-1">{activeVideo.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 18. APPOINTMENT BOOKING MODAL */}
      {bookingOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-7 shadow-xl relative animate-in fade-in duration-150 text-xs">
            <button
              onClick={() => setBookingOpen(false)}
              className="absolute top-4 right-4 text-[#777777] hover:text-[#111111] p-1 cursor-pointer"
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
                  We look forward to seeing you. We will contact you at <strong>{formData.phone}</strong> to confirm your slot with <strong>{formData.artist}</strong>.
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
                      {packages.map((p, i) => (
                        <option key={`pkg-${i}`} value={p.title}>{p.title} — {p.price}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#444444] font-semibold mb-1">Preferred Nail Artist</label>
                    <select
                      value={formData.artist}
                      onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-[#DCD6C9] bg-white focus:outline-none focus:border-[#5C3D75]"
                    >
                      <option>Priya Shrestha (Master Artist & Educator)</option>
                      <option>Sunita Gurung (Senior Gel Specialist)</option>
                      <option>Rojina Tamang (Russian Cuticle Expert)</option>
                      <option>First Available Specialist</option>
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
                    className="w-full bg-[#5C3D75] hover:bg-[#482F5E] text-white py-2.5 rounded-xl font-semibold uppercase tracking-wider transition-colors mt-2 cursor-pointer"
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
