import React, { useEffect, useState } from "react";
import {
  ArrowUpRight, ArrowRight, Code2, CreditCard, Database, Globe2,
  Layers3, Menu, X, Server, ShieldCheck, Star, ChevronLeft,
  ChevronRight, CheckCircle2, Mail, ExternalLink, Terminal,
  Workflow, Smartphone, Zap
} from "lucide-react";
import "./App.css";

const FIVERR_URL = "https://www.fiverr.com/users/zeshanaslam385";

const skills = [
  { name: "React & Next.js", group: "Frontend", detail: "Modern interfaces, dashboards and web apps", icon: Code2 },
  { name: "JavaScript", group: "Frontend", detail: "Interactive, maintainable browser experiences", icon: Zap },
  { name: "Tailwind CSS & Bootstrap", group: "Frontend", detail: "Responsive layouts and polished UI", icon: Smartphone },
  { name: "PHP & Laravel", group: "Backend", detail: "Custom backends, APIs and integrations", icon: Server },
  { name: "Node.js & Express", group: "Backend", detail: "API development and server-side logic", icon: Terminal },
  { name: "Stripe & Stripe Connect", group: "Payments", detail: "Checkout, subscriptions, webhooks and payouts", icon: CreditCard },
  { name: "PayPal APIs", group: "Payments", detail: "Payment flows and transaction automation", icon: ShieldCheck },
  { name: "MySQL & MongoDB", group: "Database", detail: "Data modeling and application storage", icon: Database },
  { name: "Docker & Nginx", group: "DevOps", detail: "Deployment environments and reverse proxies", icon: Layers3 },
];

const projects = [
  {
    number: "01",
    title: "Multi-Vendor Restaurant Platform",
    category: "Payments · Marketplace",
    description: "A restaurant marketplace payment flow with Stripe Connect onboarding, platform fee deductions and vendor payouts.",
    tags: ["PHP", "Stripe Connect", "JavaScript", "MySQL"],
    icon: CreditCard,
    accent: "violet",
  },
  {
    number: "02",
    title: "International School Member Portal",
    category: "Full-stack · Dashboard",
    description: "A member and administration portal with profile management, role-based access and connected data workflows.",
    tags: ["React", "Tailwind CSS", "Node.js", "Express"],
    icon: Globe2,
    accent: "blue",
  },
  {
    number: "03",
    title: "Python POS & Billing System",
    category: "Desktop · Automation",
    description: "A desktop billing application with thermal receipt support, SQLite storage, inventory lookup and quick transaction handling.",
    tags: ["Python", "Tkinter", "SQLite", "PyInstaller"],
    icon: Terminal,
    accent: "mint",
  },
];

const reviews = [
  {
    client: "Asifovi", country: "Germany", flag: "🇩🇪", date: "Dec 2025",
    project: "Stripe Connect Integration for Restaurant Platform",
    text: "Zeeshan is an exceptional software engineer! He integrated Stripe Connect seamlessly into our ordering platform. Fast communication, clean code, and great attention to detail."
  },
  {
    client: "Lee", country: "United States", flag: "🇺🇸", date: "May 2026",
    project: "Member Portal & Admin Dashboard Development",
    text: "Delivered top-quality React code on schedule. Extremely helpful with setting up clean component structures and responsiveness. Will hire again!"
  },
  {
    client: "Patrick", country: "Netherlands", flag: "🇳🇱", date: "Oct 2026",
    project: "EU VAT & Stripe Tax Webhook Integration",
    text: "Handled complex EU VAT rules and reverse charge calculations effortlessly via Stripe Tax webhooks. Very knowledgeable backend developer."
  },
  {
    client: "Deborah M.", country: "United Kingdom", flag: "🇬🇧", date: "Sep 2026",
    project: "WordPress Payment Account Migration",
    text: "Smooth execution on short notice! Fixed payment migration bugs quickly without breaking existing WooCommerce flow."
  },
];

const services = [
  { title: "Payment integrations", text: "Stripe, Stripe Connect, PayPal, checkout flows, subscriptions and webhooks.", icon: CreditCard },
  { title: "Full-stack development", text: "Custom React interfaces, PHP/Laravel backends and Node.js APIs.", icon: Workflow },
  { title: "Existing project fixes", text: "Debugging, payment-flow improvements, API fixes and ongoing maintenance.", icon: ShieldCheck },
];

export default function App() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeReview = (direction) => {
    setReviewIndex((current) => (current + direction + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 760) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const activeReview = reviews[reviewIndex];

  return (
    <div className="portfolio-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Zeeshan Aslam home">
            <span className="brand-mark">Z<span>.</span></span>
            <span className="brand-copy">
              <strong>Zeeshan Aslam</strong>
              <small>Full-stack developer</small>
            </span>
          </a>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#skills" onClick={closeMenu}>Expertise</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#reviews" onClick={closeMenu}>Testimonials</a>
            <a className="nav-cta" href={FIVERR_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>
              Let's talk <ArrowUpRight size={15} />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Available for freelance projects</div>
            <p className="hero-kicker">BUILDING DIGITAL PRODUCTS THAT WORK</p>
            <h1>Full-stack development.<br /><span>Payments that just work.</span></h1>
            <p className="hero-description">
              I'm Zeeshan Aslam, a software developer focused on building reliable web applications,
              custom backend systems and seamless Stripe & PayPal integrations for businesses worldwide.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={FIVERR_URL} target="_blank" rel="noreferrer">
                Discuss your project <ArrowUpRight size={17} />
              </a>
              <a className="button button-secondary" href="#projects">
                Explore my work <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-trust">
              <span><CheckCircle2 size={16} /> Clear communication</span>
              <span><CheckCircle2 size={16} /> Practical solutions</span>
              <span><CheckCircle2 size={16} /> Worldwide clients</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Developer profile summary">
            <div className="visual-topline"><span className="window-dots"><i /><i /><i /></span><span>developer.profile</span><span className="visual-live">● ONLINE</span></div>
            <div className="profile-card">
              <div className="profile-avatar">ZA</div>
              <div>
                <p className="profile-label">HELLO, I'M</p>
                <h2>Zeeshan Aslam</h2>
                <p className="profile-role">Full-Stack Developer <span>·</span> Payment Specialist</p>
              </div>
            </div>
            <div className="code-window">
              <div className="code-line"><span className="code-muted">const</span> developer = {"{"}</div>
              <div className="code-line indent"><span className="code-key">focus</span>: <span className="code-string">"Full-stack web apps"</span>,</div>
              <div className="code-line indent"><span className="code-key">payments</span>: [<span className="code-string">"Stripe"</span>, <span className="code-string">"PayPal"</span>],</div>
              <div className="code-line indent"><span className="code-key">backend</span>: [<span className="code-string">"PHP"</span>, <span className="code-string">"Node.js"</span>],</div>
              <div className="code-line indent"><span className="code-key">frontend</span>: [<span className="code-string">"React"</span>, <span className="code-string">"Next.js"</span>]</div>
              <div className="code-line">{"};"}</div>
              <div className="code-cursor">Building something useful<span>_</span></div>
            </div>
            <div className="floating-chip chip-payment"><CreditCard size={16} /> Payment integrations</div>
            <div className="floating-chip chip-stack"><Code2 size={16} /> Modern web stack</div>
          </div>
        </section>

        <section className="intro-strip">
          <div className="container intro-strip-inner">
            <p>TECHNOLOGY IS ONLY USEFUL WHEN IT SOLVES A REAL BUSINESS PROBLEM.</p>
            <div className="strip-tags"><span>WEB APPS</span><span>PAYMENTS</span><span>BACKEND SYSTEMS</span></div>
          </div>
        </section>

        <section className="section container" id="about">
          <div className="section-heading">
            <p className="section-kicker">A LITTLE ABOUT ME</p>
            <h2>Turning complex requirements<br /><span>into dependable software.</span></h2>
          </div>
          <div className="about-grid">
            <p className="about-lead">
              I work across the frontend and backend to help businesses launch, improve and maintain
              their digital products. My work combines clean interfaces, dependable APIs and payment
              systems designed around real-world workflows.
            </p>
            <div className="about-note">
              <span className="note-icon"><Zap size={19} /></span>
              <div><strong>My approach</strong><p>Understand the requirement, build the right solution, and keep the experience clear for both users and businesses.</p></div>
            </div>
          </div>
        </section>

        <section className="section section-tinted" id="services">
          <div className="container">
            <div className="section-heading centered">
              <p className="section-kicker">WHAT I CAN HELP WITH</p>
              <h2>Development built around <span>your goals.</span></h2>
              <p className="section-subtitle">From a focused integration to a complete web application, I can help move your project forward.</p>
            </div>
            <div className="service-grid">
              {services.map((service, index) => {
                const Icon = service.icon;
                return <article className="service-card" key={service.title}>
                  <div className="service-icon"><Icon size={22} /></div>
                  <span className="service-number">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href={FIVERR_URL} target="_blank" rel="noreferrer">Discuss this service <ArrowUpRight size={15} /></a>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="section container" id="skills">
          <div className="section-heading">
            <p className="section-kicker">TOOLS OF THE TRADE</p>
            <h2>Technical expertise, <span>practical results.</span></h2>
            <p className="section-subtitle">A versatile stack for building, integrating and supporting modern applications.</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return <article className="skill-card" key={skill.name}>
                <div className="skill-icon"><Icon size={19} /></div>
                <div><span className="skill-group">{skill.group}</span><h3>{skill.name}</h3><p>{skill.detail}</p></div>
              </article>;
            })}
          </div>
        </section>

        <section className="section section-tinted" id="projects">
          <div className="container">
            <div className="section-heading project-heading">
              <div><p className="section-kicker">SELECTED WORK</p><h2>Projects & <span>implementations.</span></h2></div>
              <p className="section-subtitle">A selection of the types of products and systems I work on.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => {
                const Icon = project.icon;
                return <article className={`project-card accent-${project.accent}`} key={project.number}>
                  <div className="project-card-top"><span className="project-number">{project.number} / CASE STUDY</span><span className="project-icon"><Icon size={23} /></span></div>
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </article>;
              })}
            </div>
            <p className="project-disclaimer">Project descriptions are summaries of selected development work. Further details can be shared where permitted.</p>
          </div>
        </section>

        <section className="section container" id="reviews">
          <div className="section-heading centered">
            <p className="section-kicker">CLIENT FEEDBACK</p>
            <h2>Good work. <span>Good relationships.</span></h2>
            <p className="section-subtitle">A few words shared by clients after working together.</p>
          </div>
          <div className="testimonial-wrap">
            <div className="testimonial-card">
              <div className="testimonial-top">
                <div className="client-avatar">{activeReview.client.slice(0, 1).toUpperCase()}</div>
                <div className="client-info"><strong>{activeReview.client} <span>{activeReview.flag}</span></strong><small>{activeReview.country} · {activeReview.date}</small></div>
                <div className="review-rating"><Star size={15} fill="currentColor" /> 5.0</div>
              </div>
              <div className="quote-mark">“</div>
              <blockquote>{activeReview.text}</blockquote>
              <div className="testimonial-bottom"><span>{activeReview.project}</span><span className="review-source"><CheckCircle2 size={14} /> Fiverr review</span></div>
            </div>
            <div className="testimonial-controls">
              <button onClick={() => changeReview(-1)} aria-label="Previous review"><ChevronLeft size={19} /></button>
              <div className="review-dots">{reviews.map((review, index) => <button key={review.client} className={index === reviewIndex ? "active" : ""} onClick={() => setReviewIndex(index)} aria-label={`Show review ${index + 1}`} />)}</div>
              <button onClick={() => changeReview(1)} aria-label="Next review"><ChevronRight size={19} /></button>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="container contact-inner">
            <div><p className="section-kicker">HAVE A PROJECT IN MIND?</p><h2>Let's build something<br /><span>that makes a difference.</span></h2><p>Tell me what you're working on. I'll be happy to discuss the requirements and a practical way forward.</p></div>
            <a className="button button-light" href={FIVERR_URL} target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home"><span className="brand-mark">Z<span>.</span></span><span className="brand-copy"><strong>Zeeshan Aslam</strong><small>Full-stack developer</small></span></a>
          <p>Building useful digital experiences with code.</p>
          <a className="footer-link" href={FIVERR_URL} target="_blank" rel="noreferrer">Fiverr profile <ExternalLink size={14} /></a>
          <small className="copyright">© {new Date().getFullYear()} Zeeshan Aslam. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
}
