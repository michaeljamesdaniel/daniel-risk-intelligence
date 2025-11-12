'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    comments: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [faqOpen, setFaqOpen] = useState([false, false, false, false, false, false]);

  // Refs for animation triggers
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const methodologyRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  const useIntersectionObserver = (ref: React.RefObject<HTMLElement | null>, options: IntersectionObserverInit) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      }, options);

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref, options]);

    return isIntersecting;
  };

  const heroVisible = useIntersectionObserver(heroRef, { threshold: 0.1 });
  const servicesVisible = useIntersectionObserver(servicesRef, { threshold: 0.1 });
  const methodologyVisible = useIntersectionObserver(methodologyRef, { threshold: 0.1 });
  const aboutVisible = useIntersectionObserver(aboutRef, { threshold: 0.1 });
  const contactVisible = useIntersectionObserver(contactRef, { threshold: 0.1 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll respond within 48 hours.');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          service: '',
          comments: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // FAQ Accordion toggle function
  const toggleFAQ = (index: number) => {
    setFaqOpen(prev => {
      const newOpen = [...prev];
      // Close all other FAQs and toggle the current one
      for (let i = 0; i < newOpen.length; i++) {
        newOpen[i] = i === index ? !newOpen[i] : false;
      }
      return newOpen;
    });
  };

  // Smooth scroll for hero CTAs
  useEffect(() => {
    const ctaButtons = document.querySelectorAll('.hero-cta-primary, .hero-cta-secondary, .service-cta');
    
    const handleClick = (e: Event) => {
      e.preventDefault();
      const button = e.currentTarget as HTMLAnchorElement;
      const targetId = button.getAttribute('href');
      if (targetId) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    ctaButtons.forEach(button => {
      button.addEventListener('click', handleClick);
    });

    return () => {
      ctaButtons.forEach(button => {
        button.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-center items-center h-20 relative">
            <div className="absolute left-6">
              <a href="/" className="nav-logo" aria-label="Daniel Risk Intelligence Home">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 90" style={{height: '40px', width: 'auto', display: 'block', margin: '0 auto'}}>
                  <g transform="translate(-15, 0)">
                    <path d="M 18,20 L 18,70 L 42,70 C 58,70 68,60 68,45 C 68,30 58,20 42,20 Z" 
                          fill="none" stroke={isScrolled ? "#0F172A" : "#FFFFFF"} strokeWidth="2.5" strokeLinecap="square"/>
                    <line x1="92" y1="28" x2="92" y2="62" stroke={isScrolled ? "#CBD5E1" : "#FFFFFF"} strokeWidth="1" opacity={isScrolled ? "1" : "0.2"}/>
                    <text x="125" y="47" fontFamily="Inter, 'Helvetica Neue', Arial, sans-serif" 
                          fontSize="28" fontWeight="600" fill={isScrolled ? "#0F172A" : "#FFFFFF"} letterSpacing="3.0">DANIEL</text>
                    <text x="110" y="69" fontFamily="Inter, 'Helvetica Neue', Arial, sans-serif" 
                          fontSize="13" fontWeight="500" fill={isScrolled ? "#475569" : "#FFFFFF"} letterSpacing="2.0">RISK INTELLIGENCE</text>
                  </g>
                </svg>
              </a>
            </div>
            
            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('services')} 
                className={`${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'} font-medium transition-colors`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('methodology')} 
                className={`${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'} font-medium transition-colors`}
              >
                Methodology
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className={`${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'} font-medium transition-colors`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className={`${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'} font-medium transition-colors`}
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className={`${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'} font-medium transition-colors`}
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="absolute right-6 md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'} p-2`}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className={`md:hidden ${isScrolled ? 'bg-white border-t border-gray-200' : 'bg-gray-900/95 backdrop-blur-sm border-t border-gray-700'}`}>
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('services')} className={`block w-full text-left px-3 py-2 ${isScrolled ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' : 'text-white hover:text-gray-200 hover:bg-gray-800'} font-medium`}>
                  Services
                </button>
                <button onClick={() => scrollToSection('methodology')} className={`block w-full text-left px-3 py-2 ${isScrolled ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' : 'text-white hover:text-gray-200 hover:bg-gray-800'} font-medium`}>
                  Methodology
                </button>
                <button onClick={() => scrollToSection('about')} className={`block w-full text-left px-3 py-2 ${isScrolled ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' : 'text-white hover:text-gray-200 hover:bg-gray-800'} font-medium`}>
                  About
                </button>
                <button onClick={() => scrollToSection('faq')} className={`block w-full text-left px-3 py-2 ${isScrolled ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' : 'text-white hover:text-gray-200 hover:bg-gray-800'} font-medium`}>
                  FAQ
                </button>
                <button onClick={() => scrollToSection('contact')} className={`block w-full text-left px-3 py-2 ${isScrolled ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' : 'text-white hover:text-gray-200 hover:bg-gray-800'} font-medium`}>
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - PREMIUM REBUILD */}
      <section id="hero" className="hero-section" ref={heroRef}>
        <div className="hero-background"></div>
        
        <div className="hero-container">
          
          {/* Logo */}
          <div className="hero-logo-wrapper">
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 90" style={{height: '100px', width: 'auto', display: 'block', margin: '0 auto'}}>
                <path d="M 18,20 L 18,70 L 42,70 C 58,70 68,60 68,45 C 68,30 58,20 42,20 Z"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                      strokeLinecap="square"/>
                <line
                     x1="92"
                     y1="28"
                     x2="92"
                     y2="62"
                     stroke="#FFFFFF"
                     strokeWidth="1"
                     opacity="0.2"/>
                <text
                     x="148"
                     y="48"
                     fontFamily="Inter, 'Helvetica Neue', Arial, sans-serif"
                     fontSize="26"
                     fontWeight="600"
                     fill="#FFFFFF"
                     letterSpacing="0.3"
                     textAnchor="start">D A N I E L</text>
                <text
                     x="118"
                     y="68"
                     fontFamily="Inter, 'Helvetica Neue', Arial, sans-serif"
                     fontSize="12"
                     fontWeight="400"
                     fill="#FFFFFF"
                     letterSpacing="5.0"
                     opacity="0.85"
                     textAnchor="start">RISK INTELLIGENCE</text>
              </svg>
            </div>
          </div>
          
          {/* Main Headline */}
          <h1 className="hero-headline">
            Intelligence-Grade M&A Analysis<br />
            <span className="hero-headline-emphasis">for Central & Eastern Europe</span>
          </h1>
          
          {/* Subheadline */}
          <h2 className="hero-subheadline">
            McKinsey-quality analysis. U.S. Intelligence Community rigor.
          </h2>
          
          {/* Body Copy */}
          <p className="hero-body">
            We help private equity and corporate investors make confident acquisition 
            and expansion decisions across CEE using U.S. intelligence methods—transparent 
            evidence, tested conclusions, stated confidence levels.
          </p>
          
          {/* CTA Button */}
          <div className="hero-cta-wrapper">
            <a href="#contact" className="hero-cta-primary">
              Request a Discussion
              <svg className="cta-arrow" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </a>
            <a href="#services" className="hero-cta-secondary">
              Explore Services
            </a>
          </div>
          
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section" ref={servicesRef}>
        <div className="services-container">
          
          {/* Section Header */}
          <header className="section-header">
            <span className="section-eyebrow">What We Deliver</span>
            <h2 className="section-title">Intelligence-Grade Advisory Reports</h2>
            <p className="section-subtitle">
              Two focused reports combining intelligence-community rigor with clear business language
            </p>
            <div className="section-divider"></div>
          </header>

          {/* Updated Service Tiles: Geopolitical Intelligence & Due Diligence */}
          <div className="service-card geo">
            <div className="service-header">
              <h3 className="service-title" role="heading" aria-level={3}>Geopolitical Intelligence Reports</h3>
              <p className="service-tagline">Forecast how policy shifts, sanctions, and regional security moves will affect your revenue, supply chain, and compliance over the next 12–24 months.</p>
            </div>

            <div className="service-description">
              <ul className="deliverables-list">
                <li className="deliverable-item">
                  <div className="deliverable-content">Clear probability estimates for each scenario</div>
                </li>
                <li className="deliverable-item">
                  <div className="deliverable-content">Euro-level cost and revenue impacts</div>
                </li>
                <li className="deliverable-item">
                  <div className="deliverable-content">Early-warning indicators you can monitor</div>
                </li>
              </ul>
            </div>

            <div className="service-cta-wrapper">
              <a className="button button--primary" href="/geopolitical-intel">See sample report</a>
            </div>
          </div>

          <div className="service-card dd">
            <div className="service-header">
              <h3 className="service-title" role="heading" aria-level={3}>Due Diligence Reports</h3>
              <p className="service-tagline">Identify political, regulatory, reputational, and operational risks before you commit capital, and receive a clear Go / Conditional Go / No-Go recommendation.</p>
            </div>

            <div className="service-description">
              <ul className="deliverables-list">
                <li className="deliverable-item">
                  <div className="deliverable-content">All risks quantified in euros</div>
                </li>
                <li className="deliverable-item">
                  <div className="deliverable-content">Best-, base-, and worst-case deal outcomes</div>
                </li>
                <li className="deliverable-item">
                  <div className="deliverable-content">Negotiation safeguards to protect value</div>
                </li>
              </ul>
            </div>

            <div className="service-cta-wrapper">
              <a className="button button--primary" href="/due-diligence">See sample report</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
           INDUSTRIES SECTION
           ═══════════════════════════════════════════════════════════════ */}

      <section id="industries" className="industries-section">
        <div className="industries-container">
          
          {/* Section Header */}
          <header className="section-header">
            <span className="section-eyebrow">Sector Expertise</span>
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">
              Deep experience across high-value M&A sectors in Central & Eastern Europe
            </p>
            <div className="section-divider"></div>
          </header>
          
          {/* Industries Grid */}
          <div className="industries-grid">
            
            {/* Industry 1: Technology & Software */}
            <div className="industry-card">
              <div className="industry-icon-wrapper">
                <svg className="industry-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="industry-heading">Technology & Software</h3>
              <p className="industry-description">
                SaaS platforms, IT services, cybersecurity, fintech, software development
              </p>
            </div>
            
            {/* Industry 2: Manufacturing & Industrial */}
            <div className="industry-card">
              <div className="industry-icon-wrapper">
                <svg className="industry-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="industry-heading">Manufacturing & Industrial</h3>
              <p className="industry-description">
                Automotive components, specialized equipment, industrial automation, chemicals
              </p>
            </div>
            
            {/* Industry 3: Consumer & Retail */}
            <div className="industry-card">
              <div className="industry-icon-wrapper">
                <svg className="industry-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
              <h3 className="industry-heading">Consumer & Retail</h3>
              <p className="industry-description">
                E-commerce, consumer brands, retail chains, FMCG, distribution networks
              </p>
            </div>
            
            {/* Industry 4: Healthcare & Life Sciences */}
            <div className="industry-card">
              <div className="industry-icon-wrapper">
                <svg className="industry-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="industry-heading">Healthcare & Life Sciences</h3>
              <p className="industry-description">
                Private clinics, diagnostic services, med-tech devices, pharmaceutical distribution
              </p>
            </div>
            
            {/* Industry 5: Energy & Infrastructure */}
            <div className="industry-card">
              <div className="industry-icon-wrapper">
                <svg className="industry-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3 className="industry-heading">Energy & Infrastructure</h3>
              <p className="industry-description">
                Renewable energy, utilities, logistics infrastructure, smart grid technology
              </p>
            </div>
            
            {/* Industry 6: Business Services & BPO */}
            <div className="industry-card">
              <div className="industry-icon-wrapper">
                <svg className="industry-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="industry-heading">Business Services & BPO</h3>
              <p className="industry-description">
                Professional services, business intelligence, staffing agencies, shared services
              </p>
            </div>
            
          </div>
          
          {/* Bottom Note */}
          <p className="industries-note">
            Working on a deal in a different sector? 
            <a href="#contact" className="industries-link">
              Let's discuss your specific situation →
            </a>
          </p>
          
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="methodology-section">
        <div className="methodology-container">
          
          {/* Section Header */}
          <header className="section-header">
            <span className="section-eyebrow">Our Methodology</span>
            <h2 className="section-title">Why Most M&A Advisory Gets It Wrong—And How We Get It Right</h2>
            <p className="section-subtitle">
              CEE executives don't need more opinions. They need defensible intelligence.
            </p>
            <div className="section-divider"></div>
          </header>
          
          {/* ═══════════════════════════════════════════════════════════════
               THE PROBLEM SECTION
               ═══════════════════════════════════════════════════════════════ */}
          
          <div className="methodology-problem">
            <h3 className="problem-heading">What Typically Goes Wrong</h3>
            <p className="problem-intro">
              You've hired a top consulting firm. Three months and €150,000 later, you get a 
              beautiful deck. But when you ask "How confident are you in this recommendation?" 
              they say "We're very confident"—without stating what that actually means.
            </p>
            
            <div className="problem-grid">
              
              {/* Problem 1 */}
              <div className="problem-card">
                <div className="problem-icon">⚠️</div>
                <h4>Confirmation Bias Goes Unchecked</h4>
                <p>
                  They form a hypothesis early, then cherry-pick evidence to support it. 
                  You don't discover this until after you've closed the deal—and the forecasts don't materialize.
                </p>
              </div>
              
              {/* Problem 2 */}
              <div className="problem-card">
                <div className="problem-icon">❓</div>
                <h4>Sources Aren't Verified</h4>
                <p>
                  That market size estimate? It came from a single industry report. No one checked 
                  if the assumptions made sense for CEE. By the time you realize the market is 40% 
                  smaller, you've already committed capital.
                </p>
              </div>
              
              {/* Problem 3 */}
              <div className="problem-card">
                <div className="problem-icon">🎯</div>
                <h4>"High Confidence" Means Nothing</h4>
                <p>
                  When pressed, consultants can't explain why they're confident. Is it 60% likely? 
                  85%? They don't know—because they never tested their assumptions against alternative scenarios.
                </p>
              </div>
              
            </div>
          </div>
          
          {/* ═══════════════════════════════════════════════════════════════
               THE DIAGNOSIS SECTION
               ═══════════════════════════════════════════════════════════════ */}
          
          <div className="methodology-diagnosis">
            <h3 className="diagnosis-heading">Why Traditional Consulting Falls Short</h3>
            <p className="diagnosis-text">
              Traditional firms rely on <strong>partner experience and brand reputation</strong>. 
              That works for familiar markets and standard situations. But CEE deals are different—
              less transparent data, rapidly changing regulations, unreliable local sources. 
              <strong>Experience isn't enough when the context keeps shifting.</strong>
            </p>
            <p className="diagnosis-text">
              What you need is a <strong>structured methodology</strong> that works regardless of 
              how familiar the analyst is with the sector—one that systematically prevents the 
              errors that kill deals.
            </p>
          </div>
          
          {/* ═══════════════════════════════════════════════════════════════
               THE SOLUTION SECTION
               ═══════════════════════════════════════════════════════════════ */}
          
          <div className="methodology-solution">
            <h3 className="solution-heading">How U.S. Intelligence Methods Change This</h3>
            <p className="solution-intro">
              For 20 years, I analyzed high-stakes situations where getting it wrong had severe 
              consequences. The U.S. Intelligence Community developed systematic methods to 
              prevent exactly these errors. We've adapted them for M&A decisions in CEE.
            </p>
            
            <div className="solution-grid">
              {/* Solution Card 1: Rated Sources */}
              <div className="solution-card">
                <div className="solution-badge">01</div>
                <h4 className="solution-card-heading">Every Source Gets a Reliability Rating</h4>
                <p className="solution-description">
                  Before we use any piece of information, we classify it: <strong>Primary</strong> 
                  (direct access to facts), <strong>Credible</strong> (reputable but secondhand), 
                  or <strong>Requires Verification</strong> (needs corroboration). You see exactly 
                  how solid each conclusion is.
                </p>
                <div className="solution-result">
                  <strong>What this prevents:</strong> Treating a competitor's marketing claim as 
                  if it were audited financial data.
                </div>
              </div>

              {/* Solution Card 2: Scenario Testing */}
              <div className="solution-card">
                <div className="solution-badge">02</div>
                <h4 className="solution-card-heading">We Test Multiple Scenarios Before Recommending</h4>
                <p className="solution-description">
                  Instead of forming one hypothesis and defending it, we actively test 3-5 competing 
                  explanations. We only recommend one after systematically ruling out the alternatives. 
                  This forces us to confront disconfirming evidence instead of ignoring it.
                </p>
                <div className="solution-result">
                  <strong>What this prevents:</strong> Missing the scenario where your target's growth 
                  came from an unsustainable government contract, not genuine market demand.
                </div>
              </div>

              {/* Solution Card 3: Calibrated Confidence */}
              <div className="solution-card">
                <div className="solution-badge">03</div>
                <h4 className="solution-card-heading">Confidence Levels Are Explicit and Calibrated</h4>
                <p className="solution-description">
                  When we say "Highly Likely," we mean 80-95% probability. "Likely" means 65-75%. 
                  These aren't feelings—they're calibrated estimates tied to how much contradictory 
                  evidence exists and how many scenarios we've ruled out.
                </p>
                <div className="solution-result">
                  <strong>What this gives you:</strong> The ability to adjust your deal structure 
                  and price based on actual risk, not consultant overconfidence.
                </div>
              </div>

              {/* Solution Card 4: 16 Quality Gates */}
              <div className="solution-card">
                <div className="solution-badge">04</div>
                <h4 className="solution-card-heading">16 Mandatory Quality Gates Before Delivery</h4>
                <p className="solution-description">
                  Every report passes through 16 specific checks. Did we verify the target's top 
                  3 customers independently? Did we test our market size estimate against two different 
                  methodologies? Did we identify the one assumption that, if wrong, invalidates our 
                  recommendation? Non-negotiable, regardless of deadline pressure.
                </p>
                <div className="solution-result">
                  <strong>What this prevents:</strong> Delivering a report that looks polished but 
                  rests on a single unchecked assumption.
                </div>
              </div>

              {/* Solution Card 5: Red Team Challenge */}
              <div className="solution-card">
                <div className="solution-badge">05</div>
                <h4 className="solution-card-heading">Red Team Challenge: We Try to Prove Ourselves Wrong</h4>
                <p className="solution-description">
                  Before finalizing any recommendation, we deliberately adopt the opposite position 
                  and try to build the strongest case against our own conclusion. If that case is weak, 
                  we're confident. If it's strong, we revise our assessment or lower our confidence.
                </p>
                <div className="solution-result">
                  <strong>What this prevents:</strong> The consultant who's so invested in their 
                  recommendation that they can't see the warning signs you're about to ignore.
                </div>
              </div>

              {/* Solution Card 6: Source Traceability */}
              <div className="solution-card">
                <div className="solution-badge">06</div>
                <h4 className="solution-card-heading">Full Source Traceability in Every Report</h4>
                <p className="solution-description">
                  Every claim in our reports links back to a specific source with its reliability 
                  rating. You can trace any conclusion to the underlying evidence. If your board 
                  challenges an assumption, you know exactly where it came from and how solid it is.
                </p>
                <div className="solution-result">
                  <strong>What this gives you:</strong> The ability to defend your decision with 
                  confidence when stakeholders question the basis for a €20M acquisition.
                </div>
              </div>
            </div>
          </div>
          
          {/* ═══════════════════════════════════════════════════════════════
               THE CONCLUSION SECTION
               ═══════════════════════════════════════════════════════════════ */}
          
          <div className="methodology-conclusion">
            <h3 className="conclusion-heading">The Difference This Makes</h3>
            <p className="conclusion-text">
              Traditional consulting gives you <strong>a recommendation backed by brand reputation</strong>. 
              We give you <strong>transparent intelligence you can interrogate</strong>. You see exactly 
              what we know, how we know it, and how confident we are. When your board asks "How do we 
              know this is true?"—you have answers.
            </p>
            <p className="conclusion-text">
              This is what intelligence-grade analysis means: <strong>Defensible conclusions based on 
              rated evidence, with stated confidence levels</strong>—not consultant opinions dressed 
              up as certainty.
            </p>
          </div>
          
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white" ref={aboutRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Daniel Risk Intelligence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded by former U.S. intelligence officer
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-start">
              <h3 className="founder-name" style={{textAlign: 'left', marginTop: '32px', marginBottom: '24px'}}>Intelligence-Grade Analysis</h3>
              <p className="text-lg text-gray-700 mb-6">
                Daniel Risk Intelligence brings together the rigor of U.S. Intelligence Community analysis 
                with McKinsey-style business consulting. We help private equity and corporate investors 
                make critical decisions with confidence.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our methodology ensures every conclusion is backed by rated evidence, tested against 
                contradictory information, and delivered with stated confidence levels. No business 
                advice should be given without this level of validation.
              </p>
              <p className="text-lg text-gray-700">
                Based in Virginia, with deep expertise across Central & Eastern European markets, 
                we provide the intelligence-grade analysis needed for high-stakes investment decisions.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center flex flex-col justify-start">
              <h3 className="founder-name" style={{marginBottom: '24px'}}>Michael Daniel</h3>
              <p className="founder-title">Founder</p>
              <div className="mt-6 space-y-4">
                <p className="founder-bio">
                  Over 20 years in intelligence analysis and risk assessment with deep CEE expertise. Master's in Strategic Intelligence from National Intelligence University, Washington D.C.
                </p>
                <p className="founder-bio">
                  Extensive experience analyzing complex political, economic, and security environments across the Balkans, Baltics, and CEE. Specialized in translating intelligence methods into business applications—helping executives make confident decisions when information is incomplete.
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Key Expertise</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span className="text-gray-700">U.S. Intelligence Community methods</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span className="text-gray-700">McKinsey & Company consulting frameworks</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span className="text-gray-700">Central & Eastern European markets</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span className="text-gray-700">Private equity due diligence</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span className="text-gray-700">Post-merger integration planning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          
          {/* Section Header */}
          <header className="section-header">
            <span className="section-eyebrow">Get In Touch</span>
            <h2 className="section-title">Request a Discussion</h2>
            <p className="section-subtitle">
              Tell us about your situation and we'll respond within 48 hours
            </p>
            <div className="section-divider"></div>
          </header>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Interest</Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="due-diligence">Due Diligence Reports</SelectItem>
                        <SelectItem value="market-entry">Market Entry Strategy</SelectItem>
                        <SelectItem value="integration">Integration Planning</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="comments">Message</Label>
                    <Textarea
                      id="comments"
                      rows={4}
                      value={formData.comments}
                      onChange={(e) => setFormData({...formData, comments: e.target.value})}
                      className="mt-1"
                      placeholder="Tell us about your M&A analysis needs..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Connect</h4>
                    <a 
                      href="https://www.linkedin.com/in/michael-daniel-363bb9279" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                      aria-label="Michael Daniel's LinkedIn Profile"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <a 
                      href="mailto:contact@danielriskintelligence.com" 
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                      aria-label="Send email to Daniel Risk Intelligence"
                    >
                      contact@danielriskintelligence.com
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                    <p className="text-gray-600">+1 757 287 7089 (WhatsApp)</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                    <p className="text-gray-600">Virginia<br />United States</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                    <p className="text-gray-600">We respond to all inquiries within 48 hours</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Consultation Process</h4>
                  <ol className="space-y-3">
                    <li className="flex">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>
                      <span className="text-gray-700">Initial discovery call to understand your needs</span>
                    </li>
                    <li className="flex">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>
                      <span className="text-gray-700">Custom proposal with scope and timeline</span>
                    </li>
                    <li className="flex">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
                      <span className="text-gray-700">Kick-off and project execution</span>
                    </li>
                    <li className="flex">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">4</span>
                      <span className="text-gray-700">Delivery of intelligence-grade analysis</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Updated */}
      <section id="faq" className="faq-section" style={{padding: '80px 20px', backgroundColor: '#f8fafc'}} ref={faqRef}>
        <div className="container" style={{maxWidth: '900px', margin: '0 auto'}}>
          
          {/* Section Header */}
          <div className="faq-header" style={{textAlign: 'center', marginBottom: '60px'}}>
            <h2 style={{fontSize: '36px', fontWeight: '600', color: '#0F172A', marginBottom: '16px'}}>Frequently Asked Questions</h2>
            <p style={{fontSize: '18px', color: '#64748B', maxWidth: '600px', margin: '0 auto'}}>
              Get clear answers about our intelligence-grade M&A analysis approach
            </p>
          </div>

          {/* FAQ Items */}
          <div className="faq-container">
            
            {/* Question 1 */}
            <div className="faq-item" style={{background: 'white', borderRadius: '8px', padding: '24px', marginBottom: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', cursor: 'pointer'}} onClick={() => toggleFAQ(0)}>
              <div className="faq-question" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h3 style={{fontSize: '20px', fontWeight: '600', color: '#0F172A', margin: '0'}}>What makes your due diligence different from traditional consulting firms?</h3>
                <span className="faq-icon" style={{fontSize: '24px', color: '#3B82F6', transition: 'transform 0.3s', transform: faqOpen[0] ? 'rotate(180deg)' : 'rotate(0deg)'}}>{faqOpen[0] ? '−' : '+'}</span>
              </div>
              <div className="faq-answer" style={{display: faqOpen[0] ? 'block' : 'none', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #E2E8F0', color: '#475569', lineHeight: '1.7'}}>
                <p>We apply U.S. Intelligence Community analytical standards to commercial due diligence. This means structured evidence collection, systematic bias testing, and confidence-weighted findings—not just consultant opinions. Our reports tell you not just what we found, but how confident you should be in each conclusion and what alternative scenarios exist.</p>
              </div>
            </div>

            {/* Question 2 */}
            <div className="faq-item" style={{background: 'white', borderRadius: '8px', padding: '24px', marginBottom: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', cursor: 'pointer'}} onClick={() => toggleFAQ(1)}>
              <div className="faq-question" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h3 style={{fontSize: '20px', fontWeight: '600', color: '#0F172A', margin: '0'}}>How long does a typical engagement take?</h3>
                <span className="faq-icon" style={{fontSize: '24px', color: '#3B82F6', transition: 'transform 0.3s', transform: faqOpen[1] ? 'rotate(180deg)' : 'rotate(0deg)'}}>{faqOpen[1] ? '−' : '+'}</span>
              </div>
              <div className="faq-answer" style={{display: faqOpen[1] ? 'block' : 'none', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #E2E8F0', color: '#475569', lineHeight: '1.7'}}>
                <p>Due diligence projects typically run 2-4 weeks from kickoff to final report delivery. Market entry studies range from 3-6 weeks depending on the number of markets analyzed. Integration support is structured in 30-day sprints. We prioritize speed without compromising analytical rigor—most clients need answers before deal windows close.</p>
              </div>
            </div>

            {/* Question 3 */}
            <div className="faq-item" style={{background: 'white', borderRadius: '8px', padding: '24px', marginBottom: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', cursor: 'pointer'}} onClick={() => toggleFAQ(2)}>
              <div className="faq-question" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h3 style={{fontSize: '20px', fontWeight: '600', color: '#0F172A', margin: '0'}}>Do you focus only on Central & Eastern Europe?</h3>
                <span className="faq-icon" style={{fontSize: '24px', color: '#3B82F6', transition: 'transform 0.3s', transform: faqOpen[2] ? 'rotate(180deg)' : 'rotate(0deg)'}}>{faqOpen[2] ? '−' : '+'}</span>
              </div>
              <div className="faq-answer" style={{display: faqOpen[2] ? 'block' : 'none', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #E2E8F0', color: '#475569', lineHeight: '1.7'}}>
                <p>CEE is our core expertise, but we support cross-border transactions globally. Most of our clients are Western companies entering CEE, or CEE companies expanding west. We combine deep regional knowledge with global M&A standards—giving you local insight without the "frontier market" risk premium others charge.</p>
              </div>
            </div>

            {/* Question 4 */}
            <div className="faq-item" style={{background: 'white', borderRadius: '8px', padding: '24px', marginBottom: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', cursor: 'pointer'}} onClick={() => toggleFAQ(3)}>
              <div className="faq-question" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h3 style={{fontSize: '20px', fontWeight: '600', color: '#0F172A', margin: '0'}}>What size transactions do you typically work on?</h3>
                <span className="faq-icon" style={{fontSize: '24px', color: '#3B82F6', transition: 'transform 0.3s', transform: faqOpen[3] ? 'rotate(180deg)' : 'rotate(0deg)'}}>{faqOpen[3] ? '−' : '+'}</span>
              </div>
              <div className="faq-answer" style={{display: faqOpen[3] ? 'block' : 'none', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #E2E8F0', color: '#475569', lineHeight: '1.7'}}>
                <p>We work on transactions ranging from €10M to €500M+ enterprise value. Our sweet spot is middle-market deals where PE funds and strategic acquirers need Big 4 quality analysis without Big 4 fees and timelines. If you're writing a €50M check, you deserve intelligence-grade due diligence.</p>
              </div>
            </div>

            {/* Question 5 */}
            <div className="faq-item" style={{background: 'white', borderRadius: '8px', padding: '24px', marginBottom: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', cursor: 'pointer'}} onClick={() => toggleFAQ(4)}>
              <div className="faq-question" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h3 style={{fontSize: '20px', fontWeight: '600', color: '#0F172A', margin: '0'}}>How do you ensure confidentiality during sensitive deals?</h3>
                <span className="faq-icon" style={{fontSize: '24px', color: '#3B82F6', transition: 'transform 0.3s', transform: faqOpen[4] ? 'rotate(180deg)' : 'rotate(0deg)'}}>{faqOpen[4] ? '−' : '+'}</span>
              </div>
              <div className="faq-answer" style={{display: faqOpen[4] ? 'block' : 'none', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #E2E8F0', color: '#475569', lineHeight: '1.7'}}>
                <p>We follow IC-standard operational security protocols: encrypted communications, need-to-know information compartmentalization, and formal NDAs with all parties. Our research methodology is designed for discrete OSINT collection that doesn't alert competitors or targets. We've supported transactions where market rumors would have killed the deal.</p>
              </div>
            </div>

            {/* Question 6 */}
            <div className="faq-item" style={{background: 'white', borderRadius: '8px', padding: '24px', marginBottom: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', cursor: 'pointer'}} onClick={() => toggleFAQ(5)}>
              <div className="faq-question" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h3 style={{fontSize: '20px', fontWeight: '600', color: '#0F172A', margin: '0'}}>Can you work alongside our existing advisors?</h3>
                <span className="faq-icon" style={{fontSize: '24px', color: '#3B82F6', transition: 'transform 0.3s', transform: faqOpen[5] ? 'rotate(180deg)' : 'rotate(0deg)'}}>{faqOpen[5] ? '−' : '+'}</span>
              </div>
              <div className="faq-answer" style={{display: faqOpen[5] ? 'block' : 'none', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #E2E8F0', color: '#475569', lineHeight: '1.7'}}>
                <p>Absolutely. We often complement Big 4 financial due diligence with deeper commercial and competitive intelligence, or provide second opinions on sell-side CDD reports. Think of us as your analytical Red Team—we pressure-test assumptions and surface risks others might miss. We integrate seamlessly with your existing advisor ecosystem.</p>
              </div>
            </div>

          </div>

          {/* CTA at bottom of FAQ */}
          <div style={{textAlign: 'center', marginTop: '60px', paddingTop: '40px', borderTop: '1px solid #E2E8F0'}}>
            <p style={{fontSize: '18px', color: '#475569', marginBottom: '24px'}}>Still have questions?</p>
            <a href="#contact" style={{display: 'inline-block', padding: '14px 32px', background: '#0F172A', color: 'white', textDecoration: 'none', borderRadius: '6px', fontWeight: '600', transition: 'background 0.3s'}}>Schedule a Consultation</a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Footer Logo - White version for dark background */}
          <div className="footer-logo mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 90" style={{height: '50px', width: 'auto', margin: '0 auto'}}>
              <g transform="translate(-15, 0)">
                <path d="M 18,20 L 18,70 L 42,70 C 58,70 68,60 68,45 C 68,30 58,20 42,20 Z" 
                      fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="square" opacity="0.95"/>
                <line x1="92" y1="28" x2="92" y2="62" stroke="#FFFFFF" strokeWidth="1" opacity="0.2"/>
                <text x="125" y="47" fontFamily="Inter, 'Helvetica Neue', Arial, sans-serif" 
                      fontSize="28" fontWeight="600" fill="#FFFFFF" letterSpacing="3.0" opacity="0.95">DANIEL</text>
                <text x="110" y="69" fontFamily="Inter, 'Helvetica Neue', Arial, sans-serif" 
                      fontSize="13" fontWeight="500" fill="#FFFFFF" letterSpacing="2.0" opacity="0.85">RISK INTELLIGENCE</text>
              </g>
            </svg>
          </div>
          <p className="text-gray-400 mb-4">
            © 2025 Daniel Risk Intelligence. All rights reserved.
          </p>
          <div className="flex justify-center items-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/michael-daniel-363bb9279" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
              aria-label="Michael Daniel's LinkedIn Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Premium Styles */}
      <style jsx>{`
        /* ═══════════════════════════════════════════════════════
           HERO SECTION - PREMIUM STYLING
           ═══════════════════════════════════════════════════════ */

        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 140px 20px 100px;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #0a1929 0%, #1e3a5f 50%, #2c3e50 100%);
          z-index: 0;
        }

        /* Subtle animated gradient overlay */
        .hero-background::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at top right, rgba(14, 165, 233, 0.15), transparent 50%),
                      radial-gradient(ellipse at bottom left, rgba(59, 130, 246, 0.1), transparent 50%);
          animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        .hero-container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          width: 100%;
        }

        /* ═══════════════════════════════════════════════════════
           LOGO
           ═══════════════════════════════════════════════════════ */

        .hero-logo-wrapper {
          margin-bottom: 48px;
          animation: fadeInDown 0.8s ease-out;
        }

        .hero-logo:hover {
          transform: scale(1.05);
        }

        /* ═══════════════════════════════════════════════════════
           NEW LOGO STYLES - DANIEL RISK INTELLIGENCE
           ═══════════════════════════════════════════════════════ */

        /* Navigation Logo Styles */
        .nav-logo svg {
          height: 40px;
          width: auto;
          display: block;
          transition: all 0.3s ease;
        }

        .nav-logo:hover svg {
          transform: scale(1.05);
        }

        /* Hero Logo Styles */
        .hero-logo svg {
          height: 100px;
          width: auto;
          margin: 0 auto;
          display: block;
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
          transition: transform 0.3s ease;
        }

        .hero-logo:hover svg {
          transform: scale(1.05);
        }

        /* Footer Logo Styles */
        .footer-logo svg {
          height: 50px;
          width: auto;
          display: block;
          transition: all 0.3s ease;
        }

        .footer-logo:hover svg {
          transform: scale(1.05);
          opacity: 1;
        }

        /* Responsive Logo Styles */
        @media (max-width: 768px) {
          .nav-logo svg {
            height: 32px;
          }
          
          .hero-logo svg {
            height: 70px;
          }
          
          .footer-logo svg {
            height: 40px;
          }
        }

        /* Scrolled Navigation Logo */
        .nav-scrolled .nav-logo svg {
          height: 35px;
          transition: height 0.3s ease;
        }

        /* ═══════════════════════════════════════════════════════
           FAQ SECTION STYLES
           ═══════════════════════════════════════════════════════ */

        .faq-section {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        }

        .faq-item {
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .faq-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-color: #e2e8f0;
        }

        .faq-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.1);
          transition: all 0.3s ease;
        }

        .faq-item:hover .faq-icon {
          background: rgba(59, 130, 246, 0.2);
        }

        .faq-answer {
          animation: fadeInDown 0.3s ease-out;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* FAQ Responsive Styles */
        @media (max-width: 768px) {
          .faq-section {
            padding: 60px 16px !important;
          }
          
          .faq-header h2 {
            font-size: 28px !important;
          }
          
          .faq-header p {
            font-size: 16px !important;
          }
          
          .faq-question h3 {
            font-size: 18px !important;
            padding-right: 12px;
            line-height: 1.4;
          }
          
          .faq-item {
            padding: 20px !important;
          }

          .faq-icon {
            width: 28px;
            height: 28px;
            font-size: 20px !important;
          }
        }

        /* ═══════════════════════════════════════════════════════
           HEADLINE
           ═══════════════════════════════════════════════════════ */

        .hero-headline {
          font-size: 64px;
          font-weight: 800;
          line-height: 1.1;
          color: #ffffff;
          margin: 0 auto 32px;
          max-width: 1000px;
          letter-spacing: -0.03em;
          animation: fadeInUp 0.8s ease-out 0.2s both;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }

        .hero-headline-emphasis {
          display: inline-block;
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ═══════════════════════════════════════════════════════
           SUBHEADLINE
           ═══════════════════════════════════════════════════════ */

        .hero-subheadline {
          font-size: 24px;
          font-weight: 500;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.95);
          margin: 0 auto 24px;
          max-width: 800px;
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }

        /* ═══════════════════════════════════════════════════════
           BODY TEXT
           ═══════════════════════════════════════════════════════ */

        .hero-body {
          font-size: 18px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.85);
          margin: 0 auto 64px;
          max-width: 720px;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        /* ═══════════════════════════════════════════════════════
           CTA BUTTONS
           ═══════════════════════════════════════════════════════ */

        .hero-cta-wrapper {
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: center;
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }

        .hero-cta-primary,
        .hero-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 18px 36px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .hero-cta-primary {
          background: #ffffff;
          color: #1e3a5f;
          box-shadow: 0 4px 16px rgba(255, 255, 255, 0.2);
        }

        .hero-cta-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .hero-cta-primary:hover {
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 255, 255, 0.3);
        }

        .hero-cta-primary:hover::before {
          opacity: 1;
        }

        .cta-arrow {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }

        .hero-cta-primary:hover .cta-arrow {
          transform: translateX(4px);
        }

        .hero-cta-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
        }

        .hero-cta-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }

        /* ═══════════════════════════════════════════════════════
           ANIMATIONS
           ═══════════════════════════════════════════════════════ */

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ═══════════════════════════════════════════════════════
           SERVICES SECTION - PREMIUM STYLING
           ═══════════════════════════════════════════════════════ */

        .services-section {
          padding: 140px 20px 120px;
          background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-eyebrow {
          display: inline-block;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #3b82f6;
          margin-bottom: 16px;
        }

        .section-title {
          font-size: 48px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;
        }

        .section-subtitle {
          font-size: 20px;
          color: #64748b;
          margin: 0 auto 32px;
          max-width: 700px;
          line-height: 1.6;
        }

        .section-divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #60a5fa);
          margin: 0 auto;
          border-radius: 2px;
        }

        /* Service Cards */
        .service-card {
          background: #ffffff;
          padding: 56px;
          margin-bottom: 48px;
          border-radius: 20px;
          box-shadow: 0 4px 24px rgba(15, 23, 42, 0.08),
                      0 2px 8px rgba(15, 23, 42, 0.04);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          border: 1px solid #e2e8f0;
        }

        .service-card::before {
          content: attr(data-service);
          position: absolute;
          top: 24px;
          right: 24px;
          font-size: 120px;
          font-weight: 900;
          color: #f1f5f9;
          line-height: 1;
          pointer-events: none;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 48px rgba(15, 23, 42, 0.12),
                      0 8px 24px rgba(15, 23, 42, 0.08);
          border-color: #cbd5e1;
        }

        /* Service Header */
        .service-header {
          margin-bottom: 32px;
        }

        .service-number {
          display: inline-block;
          font-size: 14px;
          font-weight: 700;
          color: #3b82f6;
          background: #eff6ff;
          padding: 6px 16px;
          border-radius: 20px;
          margin-bottom: 20px;
          letter-spacing: 0.05em;
        }

        .service-title {
          font-size: 32px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 12px 0;
          line-height: 1.2;
        }

        .service-tagline {
          font-size: 18px;
          font-style: italic;
          color: #64748b;
          margin: 0;
        }

        /* Service Description */
        .service-description {
          margin-bottom: 24px;
        }

        .service-description p {
          font-size: 17px;
          line-height: 1.8;
          color: #334155;
          margin: 0;
        }

        /* Service For */
        .service-for {
          display: flex;
          gap: 8px;
          align-items: baseline;
          padding: 20px;
          background: #f8fafc;
          border-left: 4px solid #3b82f6;
          border-radius: 8px;
          margin-bottom: 40px;
        }

        .for-label {
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
          flex-shrink: 0;
        }

        .for-text {
          font-size: 15px;
          color: #475569;
          line-height: 1.6;
        }

        /* Deliverables Section */
        .deliverables-section {
          background: linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%);
          padding: 40px;
          border-radius: 16px;
          margin-bottom: 40px;
          border: 1px solid #e0e7ff;
        }

        .deliverables-heading {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 28px 0;
        }

        .heading-icon {
          width: 24px;
          height: 24px;
          color: #3b82f6;
          flex-shrink: 0;
        }

        .deliverables-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .deliverable-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px;
          background: #ffffff;
          border-radius: 12px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .deliverable-item:hover {
          border-color: #bfdbfe;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
          transform: translateX(8px);
        }

        .check-icon {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          color: #10b981;
        }

        .check-icon svg {
          width: 100%;
          height: 100%;
        }

        .deliverable-content {
          font-size: 16px;
          line-height: 1.7;
          color: #334155;
        }

        .deliverable-content strong {
          font-weight: 700;
          color: #0f172a;
          display: block;
          margin-bottom: 4px;
        }

        /* Service CTA */
        .service-cta-wrapper {
          text-align: center;
        }

        .service-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 600;
          color: #3b82f6;
          background: #ffffff;
          border: 2px solid #3b82f6;
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .service-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .service-cta:hover {
          color: #ffffff;
          border-color: #3b82f6;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
        }

        .service-cta:hover::before {
          opacity: 1;
        }

        .service-cta .cta-arrow {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }

        .service-cta:hover .cta-arrow {
          transform: translateX(4px);
        }

        /* ═══════════════════════════════════════════════════════
           INDUSTRIES SECTION
           ═══════════════════════════════════════════════════════ */

        .industries-section {
          padding: 120px 20px;
          background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
          position: relative;
        }

        .industries-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ═══════════════════════════════════════════════════════
           INDUSTRIES GRID
           ═══════════════════════════════════════════════════════ */

        .industries-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 56px;
        }

        /* ═══════════════════════════════════════════════════════
           INDUSTRY CARD
           ═══════════════════════════════════════════════════════ */

        .industry-card {
          background: #ffffff;
          padding: 40px 32px;
          border-radius: 16px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid #e2e8f0;
          position: relative;
          overflow: hidden;
        }

        .industry-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #60a5fa);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .industry-card:hover {
          background: #ffffff;
          border-color: #3b82f6;
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(59, 130, 246, 0.15),
                      0 4px 12px rgba(59, 130, 246, 0.1);
        }

        .industry-card:hover::before {
          transform: scaleX(1);
        }

        /* ═══════════════════════════════════════════════════════
           INDUSTRY ICON
           ═══════════════════════════════════════════════════════ */

        .industry-icon-wrapper {
          width: 72px;
          height: 72px;
          margin: 0 auto 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .industry-icon-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .industry-card:hover .industry-icon-wrapper {
          transform: scale(1.15) rotate(5deg);
        }

        .industry-card:hover .industry-icon-wrapper::after {
          opacity: 1;
        }

        .industry-icon {
          width: 40px;
          height: 40px;
          color: #2563eb;
          transition: all 0.4s ease;
          position: relative;
          z-index: 1;
        }

        .industry-card:hover .industry-icon {
          color: #ffffff;
          transform: scale(1.1);
        }

        /* ═══════════════════════════════════════════════════════
           INDUSTRY TEXT CONTENT
           ═══════════════════════════════════════════════════════ */

        .industry-heading {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 16px 0;
          line-height: 1.3;
          transition: color 0.3s ease;
        }

        .industry-card:hover .industry-heading {
          color: #1e40af;
        }

        .industry-description {
          font-size: 15px;
          line-height: 1.7;
          color: #64748b;
          margin: 0;
        }

        /* ═══════════════════════════════════════════════════════
           INDUSTRIES BOTTOM NOTE
           ═══════════════════════════════════════════════════════ */

        .industries-note {
          text-align: center;
          font-size: 17px;
          color: #475569;
          margin: 0;
          line-height: 1.6;
        }

        .industries-link {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.2s ease;
          position: relative;
        }

        .industries-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: #3b82f6;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }

        .industries-link:hover {
          color: #2563eb;
        }

        .industries-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        /* ═══════════════════════════════════════════════════════
           METHODOLOGY SECTION
           ═══════════════════════════════════════════════════════ */

        .methodology-section {
          padding: 120px 20px;
          background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
        }

        .methodology-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ═══════════════════════════════════════════════════════
           CONTACT SECTION
           ═══════════════════════════════════════════════════════ */

        .contact-section {
          padding: 60px 20px;
          background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ═══════════════════════════════════════════════════════
           MOBILE RESPONSIVE
           ═══════════════════════════════════════════════════════ */

        @media (max-width: 1024px) {
          .hero-headline {
            font-size: 52px;
          }

          .industries-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: auto;
            padding: 100px 20px 80px;
          }
          
          .hero-headline {
            font-size: 40px;
          }
          
          .hero-subheadline {
            font-size: 20px;
          }
          
          .hero-body {
            font-size: 17px;
          }
          
          .hero-cta-wrapper {
            flex-direction: column;
            gap: 16px;
          }
          
          .hero-cta-primary,
          .hero-cta-secondary {
            width: 100%;
            justify-content: center;
          }

          .services-section {
            padding: 100px 20px 80px;
          }
          
          .section-title {
            font-size: 36px;
          }
          
          .section-subtitle {
            font-size: 18px;
          }
          
          .service-card {
            padding: 32px 24px;
            margin-bottom: 32px;
          }
          
          .service-card::before {
            font-size: 80px;
            top: 16px;
            right: 16px;
          }
          
          .service-title {
            font-size: 26px;
          }
          
          .deliverables-section {
            padding: 28px 20px;
          }
          
          .deliverable-item {
            padding: 16px;
          }
          
          .service-cta {
            width: 100%;
            justify-content: center;
          }

          .industries-section {
            padding: 100px 20px 80px;
          }
          
          .industries-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 48px;
          }
          
          .industry-card {
            padding: 36px 28px;
          }
          
          .industry-icon-wrapper {
            width: 64px;
            height: 64px;
          }
          
          .industry-icon {
            width: 36px;
            height: 36px;
          }
          
          .industries-note {
            font-size: 16px;
          }

          .methodology-section {
            padding: 100px 20px 80px;
          }

          .contact-section {
            padding: 50px 20px 80px;
          }
        }

        @media (max-width: 480px) {
          .hero-headline {
            font-size: 32px;
          }
          
          .hero-subheadline {
            font-size: 18px;
          }

          .industry-card {
            padding: 32px 24px;
          }
          
          .industry-heading {
            font-size: 18px;
          }
          
          .industry-description {
            font-size: 14px;
          }
        }
        
        /* ═══════════════════════════════════════════════════════════════
           METHODOLOGY SECTION CONTAINER
           ═══════════════════════════════════════════════════════════════ */

        .methodology-section {
          padding: 120px 20px;
          background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%);
        }

        .methodology-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ═══════════════════════════════════════════════════════════════
           THE PROBLEM SECTION
           ═══════════════════════════════════════════════════════════════ */

        .methodology-problem {
          margin-bottom: 80px;
          padding: 60px;
          background: #ffffff;
          border-radius: 20px;
          border-left: 6px solid #ef4444;
          box-shadow: 0 4px 24px rgba(239, 68, 68, 0.08);
        }

        .problem-heading {
          font-size: 32px;
          font-weight: 700;
          color: #dc2626;
          margin: 0 0 24px 0;
          line-height: 1.2;
        }

        .problem-intro {
          font-size: 19px;
          line-height: 1.8;
          color: #334155;
          margin: 0 0 40px 0;
          font-style: italic;
        }

        .problem-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .problem-card {
          background: #fef2f2;
          padding: 32px;
          border-radius: 12px;
          border: 2px solid #fee2e2;
          transition: all 0.3s ease;
        }

        .problem-card:hover {
          border-color: #fca5a5;
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.15);
        }

        .problem-icon {
          font-size: 36px;
          margin-bottom: 16px;
          display: block;
        }

        .problem-card h4 {
          font-size: 18px;
          font-weight: 700;
          color: #991b1b;
          margin: 0 0 12px 0;
          line-height: 1.3;
        }

        .problem-card p {
          font-size: 15px;
          line-height: 1.7;
          color: #7f1d1d;
          margin: 0;
        }

        /* ═══════════════════════════════════════════════════════════════
           THE DIAGNOSIS SECTION
           ═══════════════════════════════════════════════════════════════ */

        .methodology-diagnosis {
          margin-bottom: 80px;
          padding: 48px 60px;
          background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
          border-radius: 20px;
          border: 2px solid #cbd5e1;
        }

        .diagnosis-heading {
          font-size: 28px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 24px 0;
        }

        .diagnosis-text {
          font-size: 18px;
          line-height: 1.8;
          color: #334155;
          margin: 0 0 20px 0;
        }

        .diagnosis-text:last-child {
          margin-bottom: 0;
        }

        .diagnosis-text strong {
          color: #0f172a;
          font-weight: 700;
        }

        /* ═══════════════════════════════════════════════════════════════
           THE SOLUTION SECTION
           ═══════════════════════════════════════════════════════════════ */

        .methodology-solution {
          margin-bottom: 80px;
        }

        .solution-heading {
          font-size: 36px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 24px 0;
          text-align: center;
          line-height: 1.2;
        }

        .solution-intro {
          font-size: 19px;
          line-height: 1.8;
          color: #475569;
          margin: 0 auto 56px;
          max-width: 900px;
          text-align: center;
        }

        .solution-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        /* ═══════════════════════════════════════════════════════════════
           SOLUTION CARDS
           ═══════════════════════════════════════════════════════════════ */

        .solution-card {
          background: #ffffff;
          padding: 40px;
          border-radius: 16px;
          border: 2px solid #e0e7ff;
          position: relative;
          transition: all 0.3s ease;
        }

        .solution-card:hover {
          border-color: #3b82f6;
          box-shadow: 0 8px 32px rgba(59, 130, 246, 0.15);
          transform: translateY(-4px);
        }

        .solution-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: #ffffff;
          font-size: 18px;
          font-weight: 700;
          border-radius: 12px;
          margin-bottom: 20px;
        }

        .solution-card-heading {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 16px 0;
          line-height: 1.3;
        }

        .solution-description {
          font-size: 16px;
          line-height: 1.7;
          color: #475569;
          margin: 0 0 20px 0;
        }

        .solution-description strong {
          color: #1e40af;
          font-weight: 700;
        }

        .solution-result {
          padding: 16px 20px;
          background: #eff6ff;
          border-left: 4px solid #3b82f6;
          border-radius: 8px;
        }

        .solution-result strong {
          color: #1e40af;
          font-weight: 600;
          display: block;
          margin-bottom: 4px;
          font-size: 14px;
        }

        /* ═══════════════════════════════════════════════════════════════
           THE CONCLUSION SECTION
           ═══════════════════════════════════════════════════════════════ */

        .methodology-conclusion {
          padding: 56px 60px;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border-radius: 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .methodology-conclusion::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at top right, rgba(59, 130, 246, 0.2), transparent 50%);
          pointer-events: none;
        }

        .conclusion-heading {
          font-size: 32px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 28px 0;
          position: relative;
          line-height: 1.2;
        }

        .conclusion-text {
          font-size: 18px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 auto 20px;
          max-width: 900px;
          position: relative;
        }

        .conclusion-text:last-child {
          margin-bottom: 0;
        }

        .conclusion-text strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .methodology-section {
            padding: 100px 20px 80px;
          }
          
          .methodology-problem {
            padding: 40px 28px;
            margin-bottom: 60px;
          }
          
          .problem-heading {
            font-size: 26px;
          }
          
          .problem-intro {
            font-size: 17px;
          }
          
          .problem-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .problem-card {
            padding: 28px 24px;
          }
          
          .methodology-diagnosis {
            padding: 36px 28px;
            margin-bottom: 60px;
          }
          
          .diagnosis-heading {
            font-size: 24px;
          }
          
          .diagnosis-text {
            font-size: 17px;
          }
          
          .methodology-solution {
            margin-bottom: 60px;
          }
          
          .solution-heading {
            font-size: 28px;
          }
          
          .solution-intro {
            font-size: 17px;
          }
          
          .solution-card {
            padding: 32px 24px;
          }
          
          .methodology-conclusion {
            padding: 40px 28px;
          }
          
          .conclusion-heading {
            font-size: 26px;
          }
          
          .conclusion-text {
            font-size: 17px;
          }
        }

        @media (max-width: 1024px) {
          .solution-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
        
        /* ═══════════════════════════════════════════════════════════════
           FOUNDER STYLING
           ═══════════════════════════════════════════════════════════════ */
        
        .founder-name {
          font-size: 28px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px 0;
          text-align: center;
        }

        .founder-title {
          font-size: 16px;
          color: #64748b;
          margin: 0 0 24px 0;
          text-align: center;
        }

        .founder-bio {
          font-size: 15px;
          line-height: 1.7;
          color: #475569;
          margin: 0 0 16px 0;
          text-align: left;
        }
        
        @media (max-width: 768px) {
          .founder-name {
            font-size: 24px;
          }
          
          .founder-title {
            font-size: 15px;
          }
          
          .founder-bio {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}