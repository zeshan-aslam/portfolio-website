import React, { useState, useEffect } from 'react';
import { 
  Code, Server, Database, ShieldCheck, Star, ExternalLink, 
  CheckCircle, Terminal, Layers, Monitor, ChevronRight, 
  MessageSquare, ChevronLeft, ArrowRight, Sparkles
} from 'lucide-react';

const SKILLS = [
  { name: 'React / Next.js', category: 'Frontend', icon: Code, desc: 'SPAs, SSR & Custom Components' },
  { name: 'Tailwind CSS / Bootstrap', category: 'Frontend', icon: Monitor, desc: 'Responsive UI & Animations' },
  { name: 'JavaScript (ES6+) / Vue.js', category: 'Frontend', icon: Code, desc: 'Modern JS Architectures' },
  { name: 'PHP / Laravel / WordPress', category: 'Backend', icon: Server, desc: 'REST APIs & Custom Scripts' },
  { name: 'Node.js / Express', category: 'Backend', icon: Server, desc: 'Scalable Microservices' },
  { name: 'Python (Tkinter, FastAPI)', category: 'Backend', icon: Terminal, desc: 'Desktop Apps & Automation' },
  { name: 'Stripe & Stripe Connect', category: 'Payments', icon: ShieldCheck, desc: 'Marketplaces & Webhooks' },
  { name: 'PayPal & Payoneer API', category: 'Payments', icon: ShieldCheck, desc: 'Global Payment Gateways' },
  { name: 'Docker & Nginx', category: 'DevOps', icon: Layers, desc: 'Containerization & Proxies' },
  { name: 'MySQL / MongoDB / SQLite', category: 'Database', icon: Database, desc: 'Relational & NoSQL Storage' },
];

const PROJECTS = [
  {
    id: 1,
    title: "Multi-Vendor Restaurant Stripe Connect Platform",
    category: "Payment Gateway",
    tags: ["PHP", "Stripe Connect", "JavaScript", "MySQL"],
    description: "Automated split payment processing for restaurant vendors with automated onboarding, custom platform fee deductions, and direct payouts.",
  },
  {
    id: 2,
    title: "International School Member Portal",
    category: "Full Stack",
    tags: ["React", "Tailwind CSS", "Node.js", "Express"],
    description: "Interactive dashboard featuring client management, member profile controls, role-based access, and automated data syncing.",
  },
  {
    id: 3,
    title: "Python POS Desktop Billing System",
    category: "Desktop App",
    tags: ["Python", "Tkinter", "SQLite", "PyInstaller"],
    description: "Custom thermal receipt billing desktop app with SQLite database, inventory lookup, and fast transaction handling.",
  }
];

const REVIEWS_DATA = [
  {
    id: 1,
    client: "Asifovi",
    country: "Germany",
    flag: "🇩🇪",
    rating: 5,
    date: "Dec 2025",
    gigTitle: "Stripe Connect Integration for Restaurant Platform",
    category: "Stripe & Payments",
    review: "Zeeshan is an exceptional software engineer! He integrated Stripe Connect seamlessly into our ordering platform. Fast communication, clean code, and great attention to detail.",
  },
  {
    id: 2,
    client: "Lee",
    country: "United States",
    flag: "🇺🇸",
    rating: 5,
    date: "May 2026",
    gigTitle: "Member Portal & Admin Dashboard Development",
    category: "React / Frontend",
    review: "Delivered top-quality React code on schedule. Extremely helpful with setting up clean component structures and responsiveness. Will hire again!",
  },
  {
    id: 3,
    client: "Patrick",
    country: "Netherlands",
    flag: "🇳🇱",
    rating: 5,
    date: "Oct 2026",
    gigTitle: "EU VAT & Stripe Tax Webhook Integration",
    category: "Stripe & Payments",
    review: "Handled complex EU VAT rules and reverse charge calculations effortlessly via Stripe Tax webhooks. Very knowledgeable backend developer.",
  },
  {
    id: 4,
    client: "Deborah M.",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    date: "Sep 2026",
    gigTitle: "WordPress Payment Account Migration",
    category: "Backend & APIs",
    review: "Smooth execution on short notice! Fixed payment migration bugs quickly without breaking existing WooCommerce flow.",
  }
];

export default function App() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto Slider Effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextReview = () => {
    setIsAutoPlaying(false);
    setCurrentReviewIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const prevReview = () => {
    setIsAutoPlaying(false);
    setCurrentReviewIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  return (
    <div style={{ backgroundColor: '#030712', color: '#f3f4f6', minHeight: '100vh', width: '100%', fontFamily: 'system-ui, -apple-system, sans-serif', overflowX: 'hidden' }}>
      
      {/* Dynamic Background Glow Effects */}
      <div style={{ position: 'fixed', top: '-10%', left: '20%', width: '500px', height: '500px', backgroundColor: 'rgba(99, 102, 241, 0.12)', filter: 'blur(120px)', borderRadius: '50%', pointerEvents: 'none' }}></div>
      <div style={{ position: 'fixed', bottom: '10%', right: '10%', width: '450px', height: '450px', backgroundColor: 'rgba(16, 185, 129, 0.08)', filter: 'blur(120px)', borderRadius: '50%', pointerEvents: 'none' }}></div>

      {/* Glassmorphism Navbar */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(3, 7, 18, 0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.3rem', boxShadow: '0 4px 14px rgba(99, 102, 241, 0.35)' }}>
              Z
            </div>
            <div>
              <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#ffffff', display: 'block', letterSpacing: '-0.02em' }}>Zeeshan Aslam</span>
              <span style={{ fontSize: '0.75rem', color: '#818cf8', fontFamily: 'monospace' }}>@zeshanaslam385</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 500, color: '#9ca3af' }}>
            <a href="#about" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>About</a>
            <a href="#skills" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Tech Stack</a>
            <a href="#reviews" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Reviews Slider</a>
            <a href="#projects" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Projects</a>
          </div>

          <a 
            href="https://www.fiverr.com/users/zeshanaslam385" 
            target="_blank" 
            rel="noreferrer"
            style={{ padding: '0.6rem 1.25rem', borderRadius: '10px', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: '#ffffff', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)' }}
          >
            <span>Fiverr Profile</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" style={{ padding: '6rem 1.5rem 5rem 1.5rem', maxWidth: '1240px', margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.4rem 1rem', borderRadius: '9999px', backgroundColor: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#34d399', fontSize: '0.8rem', fontFamily: 'monospace', marginBottom: '1.5rem' }}>
              <Sparkles size={14} />
              <span>Available for Fiverr Orders & Full-Stack Contracts</span>
            </div>

            <h1 style={{ fontSize: '3.2rem', fontWeight: 900, lineHeight: 1.1, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              Full-Stack Software Engineer & <span style={{ background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Payment Specialist</span>
            </h1>

            <p style={{ color: '#9ca3af', fontSize: '1.1rem', lineHeight: 1.65, marginBottom: '2.5rem', maxWidth: '600px' }}>
              Hi, I’m <strong>Zeeshan Aslam Sandhu</strong>. I engineer scalable web platforms, custom React UIs, robust PHP/Node backends, and flawless <strong>Stripe & PayPal</strong> integrations for global clients.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="https://www.fiverr.com/users/zeshanaslam385" 
                target="_blank" 
                rel="noreferrer"
                style={{ padding: '0.95rem 1.8rem', borderRadius: '12px', background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', color: '#ffffff', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem', boxShadow: '0 6px 20px rgba(99, 102, 241, 0.4)' }}
              >
                <MessageSquare size={18} />
                <span>Order on Fiverr</span>
              </a>
              <a 
                href="#projects" 
                style={{ padding: '0.95rem 1.8rem', borderRadius: '12px', backgroundColor: '#111827', color: '#e5e7eb', border: '1px solid rgba(255, 255, 255, 0.12)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <span>View Portfolio Work</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Glowing Profile Badge Card */}
          <div style={{ backgroundColor: 'rgba(17, 24, 39, 0.75)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '20px', padding: '2rem', backdropFilter: 'blur(10px)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #312e81 0%, #4338ca 100%)', border: '2px solid #6366f1', color: '#a5b4fc', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.5rem', boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' }}>
                ZA
              </div>
              <div>
                <h3 style={{ margin: 0, color: '#ffffff', fontSize: '1.3rem', fontWeight: 800 }}>Zeeshan Aslam</h3>
                <span style={{ color: '#818cf8', fontSize: '0.85rem' }}>@zeshanaslam385 (Fiverr Seller)</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#fbbf24', fontSize: '0.85rem', fontWeight: 700, marginTop: '0.3rem' }}>
                  <Star size={14} fill="#fbbf24" />
                  <span>5.0 (Top Rated Performance)</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', paddingTop: '1.5rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9ca3af' }}>
                <span>Qualification</span>
                <span style={{ color: '#f3f4f6', fontWeight: 600 }}>BS Software Engineering</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9ca3af' }}>
                <span>Core Expertise</span>
                <span style={{ color: '#a5b4fc', fontWeight: 600 }}>React, PHP, Stripe API</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9ca3af' }}>
                <span>On-Time Delivery</span>
                <span style={{ color: '#34d399', fontWeight: 700 }}>100% Guaranteed</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9ca3af' }}>
                <span>Order Channel</span>
                <span style={{ color: '#f3f4f6' }}>Fiverr Platform</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Tech Stack Grid */}
      <section id="skills" style={{ backgroundColor: 'rgba(17, 24, 39, 0.5)', padding: '5rem 1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>Technical Stack & Capabilities</h2>
            <p style={{ color: '#9ca3af', fontSize: '0.95rem', marginTop: '0.6rem' }}>Core technologies I use to build robust, production-ready solutions.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '1.25rem' }}>
            {SKILLS.map((skill, index) => {
              const IconComp = skill.icon;
              return (
                <div key={index} style={{ backgroundColor: 'rgba(17, 24, 39, 0.8)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '1.25rem', transition: 'all 0.3s ease' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.75rem' }}>
                    <div style={{ padding: '0.6rem', borderRadius: '10px', backgroundColor: 'rgba(99, 102, 241, 0.15)', color: '#818cf8' }}>
                      <IconComp size={20} />
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#f3f4f6', fontWeight: 700 }}>{skill.name}</h4>
                      <span style={{ fontSize: '0.7rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{skill.category}</span>
                    </div>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: '#6b7280' }}>{skill.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fiverr Reviews Interactive Slider Section */}
      <section id="reviews" style={{ padding: '5rem 1.5rem', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#34d399', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            <CheckCircle size={16} />
            <span>Real Feedback from Verified Fiverr Orders</span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>Client Reviews & Testimonials</h2>
        </div>

        {/* Carousel Slider Card */}
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ backgroundColor: 'rgba(17, 24, 39, 0.9)', border: '1px solid rgba(99, 102, 241, 0.3)', borderRadius: '24px', padding: '3rem 2.5rem', position: 'relative', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#1e1b4b', border: '2px solid #6366f1', color: '#818cf8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1rem' }}>
                  {REVIEWS_DATA[currentReviewIndex].client.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 style={{ margin: 0, color: '#ffffff', fontSize: '1.15rem', fontWeight: 700 }}>
                    {REVIEWS_DATA[currentReviewIndex].client} <span style={{ marginLeft: '0.3rem' }}>{REVIEWS_DATA[currentReviewIndex].flag}</span>
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>
                    {REVIEWS_DATA[currentReviewIndex].country} • {REVIEWS_DATA[currentReviewIndex].date}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#fbbf24', fontSize: '0.9rem', fontWeight: 'bold', backgroundColor: 'rgba(251, 191, 36, 0.12)', padding: '0.4rem 0.8rem', borderRadius: '9999px', border: '1px solid rgba(251, 191, 36, 0.25)' }}>
                <Star size={15} fill="#fbbf24" />
                <span>{REVIEWS_DATA[currentReviewIndex].rating}.0</span>
              </div>
            </div>

            <p style={{ color: '#e5e7eb', fontSize: '1.15rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '2rem' }}>
              "{REVIEWS_DATA[currentReviewIndex].review}"
            </p>

            <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#818cf8', fontSize: '0.85rem', fontWeight: 600, fontFamily: 'monospace' }}>
                Gig: {REVIEWS_DATA[currentReviewIndex].gigTitle}
              </span>
              <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.12)', color: '#34d399', fontSize: '0.75rem', padding: '0.25rem 0.61rem', borderRadius: '6px', border: '1px solid rgba(16, 185, 129, 0.25)', fontWeight: 600 }}>
                Fiverr Verified
              </span>
            </div>
          </div>

          {/* Slider Arrow Controls */}
          <button 
            onClick={prevReview}
            style={{ position: 'absolute', left: '-25px', top: '50%', transform: 'translateY(-50%)', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#111827', border: '1px solid rgba(255, 255, 255, 0.15)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 10px 20px rgba(0,0,0,0.4)' }}
          >
            <ChevronLeft size={22} />
          </button>
          
          <button 
            onClick={nextReview}
            style={{ position: 'absolute', right: '-25px', top: '50%', transform: 'translateY(-50%)', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#111827', border: '1px solid rgba(255, 255, 255, 0.15)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 10px 20px rgba(0,0,0,0.4)' }}
          >
            <ChevronRight size={22} />
          </button>

          {/* Slider Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
            {REVIEWS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setIsAutoPlaying(false); setCurrentReviewIndex(idx); }}
                style={{ width: idx === currentReviewIndex ? '28px' : '9px', height: '9px', borderRadius: '9999px', backgroundColor: idx === currentReviewIndex ? '#6366f1' : '#374151', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" style={{ backgroundColor: 'rgba(17, 24, 39, 0.5)', padding: '5rem 1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>Featured Projects</h2>
            <p style={{ color: '#9ca3af', fontSize: '0.95rem', marginTop: '0.6rem' }}>Selected custom web builds & backend implementations.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {PROJECTS.map((proj) => (
              <div key={proj.id} style={{ backgroundColor: 'rgba(17, 24, 39, 0.85)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#818cf8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{proj.category}</span>
                  <h3 style={{ fontSize: '1.25rem', color: '#ffffff', margin: '0.5rem 0 0.85rem 0', fontWeight: 700 }}>{proj.title}</h3>
                  <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{proj.description}</p>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                  {proj.tags.map((t, i) => (
                    <span key={i} style={{ backgroundColor: '#030712', color: '#d1d5db', fontSize: '0.75rem', padding: '0.3rem 0.7rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '3.5rem 1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', textAlign: 'center', color: '#6b7280', fontSize: '0.9rem' }}>
        <p style={{ color: '#9ca3af', marginBottom: '1.25rem' }}>Ready to start your project? Let’s discuss requirements on Fiverr.</p>
        <a 
          href="https://www.fiverr.com/users/zeshanaslam385" 
          target="_blank" 
          rel="noreferrer"
          style={{ padding: '0.8rem 1.5rem', borderRadius: '12px', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: '#ffffff', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)' }}
        >
          <span>Contact Me on Fiverr (@zeshanaslam385)</span>
          <ChevronRight size={18} />
        </a>
        <div>© 2026 Zeeshan Aslam Sandhu. All Rights Reserved.</div>
      </footer>

    </div>
  );
}