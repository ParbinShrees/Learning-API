import { useState, useEffect } from 'react';
import { Mail, Phone, Instagram, MapPin, Sparkles, Award, Users, GraduationCap, Clock, Star, Heart, Zap, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Masonry from 'react-responsive-masonry';

export function InfinityAcademyPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courses = [
    {
      icon: Sparkles,
      title: 'Nail Art Basics',
      duration: '2 Weeks',
      price: 'NPR 15,000',
      description: 'Learn fundamental nail care and basic art techniques'
    },
    {
      icon: Heart,
      title: 'Gel & Acrylic Extensions',
      duration: '3 Weeks',
      price: 'NPR 25,000',
      description: 'Master gel polish application and acrylic nail extensions'
    },
    {
      icon: Star,
      title: 'Lash Lifting & Tinting',
      duration: '1 Week',
      price: 'NPR 12,000',
      description: 'Professional lash lift and tinting certification'
    },
    {
      icon: Zap,
      title: 'Russian Volume Lashes',
      duration: '4 Weeks',
      price: 'NPR 35,000',
      description: 'Advanced volume lash extension techniques'
    },
    {
      icon: Award,
      title: 'Nail Design Advanced',
      duration: '3 Weeks',
      price: 'NPR 28,000',
      description: '3D art, ombre, and advanced nail design'
    },
    {
      icon: GraduationCap,
      title: 'Complete Beauty Package',
      duration: '12 Weeks',
      price: 'NPR 85,000',
      description: 'Comprehensive training in all techniques'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1754799670312-8e7da8e40ad7?w=1080',
    'https://images.unsplash.com/photo-1773808605530-17926a0463e9?w=1080',
    'https://images.unsplash.com/photo-1772322586754-34c9e6f5be6f?w=1080',
    'https://images.unsplash.com/photo-1771441580033-3979bc33627b?w=1080',
    'https://images.unsplash.com/photo-1754799670410-b282791342c3?w=1080',
    'https://images.unsplash.com/photo-1676926606566-58f2e00b592b?w=1080',
    'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=1080',
    'https://images.unsplash.com/photo-1690749138086-7422f71dc159?w=1080'
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      course: 'Russian Volume Lashes',
      rating: 5,
      text: 'Best decision I ever made! The instructors are incredibly skilled and patient. Now I have my own successful lash studio.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
    },
    {
      name: 'Anjali Thapa',
      course: 'Complete Beauty Package',
      rating: 5,
      text: 'The training was comprehensive and hands-on. I learned so much in just 3 months. Highly recommend to anyone serious about beauty career.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400'
    },
    {
      name: 'Sunita Rai',
      course: 'Nail Art Advanced',
      rating: 5,
      text: 'Professional environment and world-class training. The certification helped me get hired at a top salon in Pokhara immediately.',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400'
    }
  ];

  return (
    <div className="bg-[#FDF8F5]" style={{ fontFamily: 'var(--font-body-infinity)' }}>
      {/* Sticky Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-[1440px] mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className={`w-8 h-8 ${isScrolled ? 'text-[#C9956C]' : 'text-white'}`} />
            <div>
              <h1 className={`text-2xl transition-colors ${isScrolled ? 'text-[#2C2C2C]' : 'text-white'}`} style={{ fontFamily: 'var(--font-heading-infinity)' }}>
                Infinity Nails & Lash Academy
              </h1>
            </div>
          </div>

          <div className={`hidden md:flex items-center gap-8 transition-colors ${isScrolled ? 'text-[#2C2C2C]' : 'text-white'}`}>
            <a href="#home" className="hover:text-[#C9956C] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#C9956C] transition-colors">About</a>
            <a href="#courses" className="hover:text-[#C9956C] transition-colors">Courses</a>
            <a href="#services" className="hover:text-[#C9956C] transition-colors">Services</a>
            <a href="#gallery" className="hover:text-[#C9956C] transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-[#C9956C] transition-colors">Contact</a>
          </div>

          <button className="bg-[#C9956C] text-white px-6 py-3 rounded-full hover:bg-[#B88A5F] transition-all">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1633681121751-e4a0392602b8?w=1920"
            alt="Luxury salon interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-8">
          <h1 className="text-7xl mb-6" style={{ fontFamily: 'var(--font-heading-infinity)' }}>
            Where Beauty Becomes Your Art
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Professional Nail & Lash Training Academy — Pokhara, Nepal
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-[#C9956C] text-white px-8 py-4 rounded-full hover:bg-[#B88A5F] transition-all">
              Explore Courses
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#2C2C2C] transition-all">
              Book a Session
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1638814378821-1c7cbbd648ac?w=800"
                alt="Beauty academy training"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#C9956C]/20 rounded-2xl -z-10"></div>
            </div>

            <div>
              <h2 className="text-5xl mb-6 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading-infinity)' }}>
                About Infinity Academy
              </h2>
              <div className="w-20 h-1 bg-[#C9956C] mb-6"></div>
              <p className="text-lg text-[#2C2C2C]/80 mb-8 leading-relaxed">
                Infinity Nails & Lash Academy is Pokhara's premier beauty training institute, dedicated to nurturing the next generation of beauty professionals. Our expert instructors bring years of international experience, providing comprehensive training in nail artistry and lash extensions with certification recognized across Nepal and beyond.
              </p>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Users className="w-8 h-8 text-[#C9956C] mx-auto mb-2" />
                    <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-heading-infinity)' }}>500+</div>
                    <div className="text-sm text-[#2C2C2C]/60">Students</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <GraduationCap className="w-8 h-8 text-[#C9956C] mx-auto mb-2" />
                    <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-heading-infinity)' }}>10+</div>
                    <div className="text-sm text-[#2C2C2C]/60">Courses</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Award className="w-8 h-8 text-[#C9956C] mx-auto mb-2" />
                    <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-heading-infinity)' }}>Expert</div>
                    <div className="text-sm text-[#2C2C2C]/60">Trainers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 px-8 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading-infinity)' }}>
              Our Courses
            </h2>
            <div className="w-20 h-1 bg-[#C9956C] mx-auto mb-4"></div>
            <p className="text-lg text-[#2C2C2C]/70">
              Professional certification programs designed to launch your beauty career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <div key={index} className="bg-[#FDF8F5] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                  <div className="w-16 h-16 bg-[#C9956C]/10 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-[#C9956C]" />
                  </div>
                  <h3 className="text-2xl mb-3 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading-infinity)' }}>
                    {course.title}
                  </h3>
                  <p className="text-[#2C2C2C]/70 mb-4">{course.description}</p>
                  <div className="flex items-center gap-4 mb-4 text-sm text-[#2C2C2C]/60">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="text-[#C9956C]">{course.price}</div>
                  </div>
                  <button className="w-full bg-[#C9956C] text-white py-3 rounded-full hover:bg-[#B88A5F] transition-all">
                    Learn More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-8 bg-[#FDF8F5]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading-infinity)' }}>
              What We Offer
            </h2>
            <div className="w-20 h-1 bg-[#C9956C] mx-auto"></div>
          </div>

          <div className="space-y-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <img
                src="https://images.unsplash.com/photo-1741769766414-188500c6d143?w=800"
                alt="Professional training"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl order-2 md:order-1"
              />
              <div className="order-1 md:order-2">
                <h3 className="text-4xl mb-4 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading-infinity)' }}>
                  Professional Training Programs
                </h3>
                <p className="text-lg text-[#2C2C2C]/70 leading-relaxed">
                  Industry-leading curriculum designed by experienced professionals. Our programs combine theoretical knowledge with extensive hands-on practice to ensure you're job-ready from day one.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-4xl mb-4 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading-infinity)' }}>
                  Certification Courses
                </h3>
                <p className="text-lg text-[#2C2C2C]/70 leading-relaxed">
                  Earn internationally recognized certifications that open doors to opportunities across Nepal and abroad. Our certificates are valued by top salons and beauty establishments.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1677369714353-bc9dc65041d2?w=800"
                alt="Certification courses"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <img
                src="https://images.unsplash.com/photo-1765871903225-f1a9b549e47f?w=800"
                alt="One-on-one mentoring"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl order-2 md:order-1"
              />
              <div className="order-1 md:order-2">
                <h3 className="text-4xl mb-4 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading-infinity)' }}>
                  One-on-One Mentoring
                </h3>
                <p className="text-lg text-[#2C2C2C]/70 leading-relaxed">
                  Personalized attention from expert instructors ensures you master every technique. Small batch sizes mean more hands-on guidance and faster skill development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading-infinity)' }}>
              Why Choose Infinity Academy
            </h2>
            <div className="w-20 h-1 bg-[#C9956C] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-2xl bg-[#FDF8F5] hover:shadow-xl transition-all">
              <div className="w-20 h-20 bg-[#C9956C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-[#C9956C]" />
              </div>
              <h3 className="text-2xl mb-3 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading-infinity)' }}>
                Certified Instructors
              </h3>
              <p className="text-[#2C2C2C]/70">
                Learn from internationally certified professionals with years of experience
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-[#FDF8F5] hover:shadow-xl transition-all">
              <div className="w-20 h-20 bg-[#C9956C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-[#C9956C]" />
              </div>
              <h3 className="text-2xl mb-3 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading-infinity)' }}>
                Hands-on Practice
              </h3>
              <p className="text-[#2C2C2C]/70">
                Extensive practical training with real clients and premium products
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-[#FDF8F5] hover:shadow-xl transition-all">
              <div className="w-20 h-20 bg-[#C9956C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-[#C9956C]" />
              </div>
              <h3 className="text-2xl mb-3 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading-infinity)' }}>
                Small Batch Classes
              </h3>
              <p className="text-[#2C2C2C]/70">
                Limited students per batch ensuring personalized attention
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-[#FDF8F5] hover:shadow-xl transition-all">
              <div className="w-20 h-20 bg-[#C9956C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-[#C9956C]" />
              </div>
              <h3 className="text-2xl mb-3 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading-infinity)' }}>
                Certificate on Completion
              </h3>
              <p className="text-[#2C2C2C]/70">
                Recognized certification that helps you start your career immediately
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-8 bg-[#FDF8F5]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading-infinity)' }}>
              Our Work Speaks For Itself
            </h2>
            <div className="w-20 h-1 bg-[#C9956C] mx-auto mb-4"></div>
            <p className="text-lg text-[#2C2C2C]/70">
              Stunning creations by our talented students and instructors
            </p>
          </div>

          <Masonry columnsCount={4} gutter="16px">
            {galleryImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02] cursor-pointer"
              />
            ))}
          </Masonry>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading-infinity)' }}>
              What Our Students Say
            </h2>
            <div className="w-20 h-1 bg-[#C9956C] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#FDF8F5] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xl text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading-infinity)' }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[#2C2C2C]/60">{testimonial.course}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C9956C] text-[#C9956C]" />
                  ))}
                </div>
                <p className="text-[#2C2C2C]/80 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 bg-[#FDF8F5]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading-infinity)' }}>
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-[#C9956C] mx-auto mb-4"></div>
            <p className="text-lg text-[#2C2C2C]/70">
              Ready to start your beauty career? Contact us today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h3 className="text-2xl mb-6 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading-infinity)' }}>
                  Visit Our Academy
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#C9956C] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#2C2C2C]">Zero Km, Pokhara</div>
                      <div className="text-sm text-[#2C2C2C]/60">Gandaki Pradesh, Nepal</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-[#C9956C] flex-shrink-0" />
                    <div className="text-[#2C2C2C]">+977 98XXXXXXXX</div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-[#C9956C] flex-shrink-0" />
                    <div className="text-[#2C2C2C]">info@infinityacademy.com.np</div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Instagram className="w-6 h-6 text-[#C9956C] flex-shrink-0" />
                    <a href="#" className="text-[#2C2C2C] hover:text-[#C9956C] transition-colors">
                      @infinityacademy_pokhara
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-[300px]">
                <div className="w-full h-full bg-[#E5E5E5] flex items-center justify-center text-[#2C2C2C]/40">
                  <MapPin className="w-12 h-12" />
                  <span className="ml-2">Map Placeholder - Zero Km, Pokhara</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl mb-6 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading-infinity)' }}>
                Send Us a Message
              </h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm mb-2 text-[#2C2C2C]">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-[#2C2C2C]/20 focus:border-[#C9956C] focus:outline-none transition-colors bg-[#FDF8F5]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[#2C2C2C]">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-[#2C2C2C]/20 focus:border-[#C9956C] focus:outline-none transition-colors bg-[#FDF8F5]"
                    placeholder="+977"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[#2C2C2C]">Course Interest</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-[#2C2C2C]/20 focus:border-[#C9956C] focus:outline-none transition-colors bg-[#FDF8F5]">
                    <option>Select a course</option>
                    <option>Nail Art Basics</option>
                    <option>Gel & Acrylic Extensions</option>
                    <option>Lash Lifting & Tinting</option>
                    <option>Russian Volume Lashes</option>
                    <option>Nail Design Advanced</option>
                    <option>Complete Beauty Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[#2C2C2C]">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[#2C2C2C]/20 focus:border-[#C9956C] focus:outline-none transition-colors bg-[#FDF8F5]"
                    placeholder="Tell us about your goals..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-[#C9956C] text-white py-4 rounded-full hover:bg-[#B88A5F] transition-all">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] text-white py-16 px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-8 h-8 text-[#C9956C]" />
                <h3 className="text-xl" style={{ fontFamily: 'var(--font-heading-infinity)' }}>
                  Infinity Academy
                </h3>
              </div>
              <p className="text-white/70 text-sm">
                Where beauty becomes your art. Professional training for aspiring beauty professionals.
              </p>
            </div>

            <div>
              <h4 className="text-lg mb-4" style={{ fontFamily: 'var(--font-heading-infinity)' }}>Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#home" className="hover:text-[#C9956C] transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-[#C9956C] transition-colors">About Us</a></li>
                <li><a href="#courses" className="hover:text-[#C9956C] transition-colors">Courses</a></li>
                <li><a href="#gallery" className="hover:text-[#C9956C] transition-colors">Gallery</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg mb-4" style={{ fontFamily: 'var(--font-heading-infinity)' }}>Courses</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Nail Art Basics</li>
                <li>Gel & Acrylic Extensions</li>
                <li>Lash Lifting & Tinting</li>
                <li>Russian Volume Lashes</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg mb-4" style={{ fontFamily: 'var(--font-heading-infinity)' }}>Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C9956C] transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            © 2025 Infinity Nails & Lash Academy, Pokhara. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
