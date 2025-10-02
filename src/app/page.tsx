'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Check, X, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from '@/components/logo';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error status when user starts typing
    if (formStatus === 'error') {
      setFormStatus('idle');
      setErrorMessage('');
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name');
      return false;
    }
    if (!formData.company.trim()) {
      setErrorMessage('Please enter your company');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please enter a message');
      return false;
    }
    if (formData.message.trim().length < 10) {
      setErrorMessage('Please provide more details about your needs');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const json = await res.json();

      if (!res.ok) {
        console.error('Contact API error:', json);
        setErrorMessage(json?.error || 'Failed to send message');
        setFormStatus('error');
        return;
      }

      setFormStatus('success');

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: '', company: '', email: '', message: '' });
        setFormStatus('idle');
      }, 3000);

    } catch (error: any) {
      console.error('Form submission error:', error);
      setErrorMessage(error?.message || 'Something went wrong. Please try again.');
      setFormStatus('error');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Header height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    // Close mobile menu if open
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-menu-backdrop');
    if (menu && backdrop) {
      menu.classList.add('hidden');
      backdrop.classList.add('hidden');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gray-900 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-gray-600"
      >
        Skip to main content
      </a>
  
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Logo size="md" iconSize="md" />
            <nav className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-600 hover:text-gray-900 transition-all duration-200 text-sm font-medium hover:scale-105 transform"
              >
                Services & Expertise
              </button>
              <button 
                onClick={() => scrollToSection('difference')}
                className="text-gray-600 hover:text-gray-900 transition-all duration-200 text-sm font-medium hover:scale-105 transform"
              >
                Our Difference
              </button>
              <button 
                onClick={() => scrollToSection('methodology')}
                className="text-gray-600 hover:text-gray-900 transition-all duration-200 text-sm font-medium hover:scale-105 transform"
              >
                Our Methodology
              </button>
              <button 
                onClick={() => scrollToSection('coverage')}
                className="text-gray-600 hover:text-gray-900 transition-all duration-200 text-sm font-medium hover:scale-105 transform"
              >
                What We Cover
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-600 hover:text-gray-900 transition-all duration-200 text-sm font-medium hover:scale-105 transform"
              >
                How Our Reports Work
              </button>
              <button 
                onClick={() => scrollToSection('insights')}
                className="text-gray-600 hover:text-gray-900 transition-all duration-200 text-sm font-medium hover:scale-105 transform"
              >
                Latest Intelligence & Analysis
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-gray-900 transition-all duration-200 text-sm font-medium hover:scale-105 transform"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-gray-900 transition-all duration-200 text-sm font-medium hover:scale-105 transform"
              >
                Request a Consultation
              </button>
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  const menu = document.getElementById('mobile-menu');
                  const backdrop = document.getElementById('mobile-menu-backdrop');
                  if (menu && backdrop) {
                    menu.classList.toggle('hidden');
                    backdrop.classList.toggle('hidden');
                  }
                }}
                className="text-gray-600 p-2"
                aria-label="Toggle mobile menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
          
          {/* Mobile menu backdrop */}
          <div 
            id="mobile-menu-backdrop" 
            className="hidden fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              const backdrop = document.getElementById('mobile-menu-backdrop');
              if (menu && backdrop) {
                menu.classList.add('hidden');
                backdrop.classList.add('hidden');
              }
            }}
          />
          
          {/* Mobile menu */}
          <nav id="mobile-menu" className="hidden fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-xl z-50 md:hidden overflow-y-auto">
            <div className="p-4">
              <div className="flex items-center justify-between mb-6">
                <Logo size="md" />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    const menu = document.getElementById('mobile-menu');
                    const backdrop = document.getElementById('mobile-menu-backdrop');
                    if (menu && backdrop) {
                      menu.classList.add('hidden');
                      backdrop.classList.add('hidden');
                    }
                  }}
                  className="text-gray-600 p-2"
                  aria-label="Close mobile menu"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Button>
              </div>
              <div className="flex flex-col space-y-1">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-left text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors py-3 px-4 rounded-lg text-base font-medium"
                >
                  Services & Expertise
                </button>
                <button 
                  onClick={() => scrollToSection('difference')}
                  className="text-left text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors py-3 px-4 rounded-lg text-base font-medium"
                >
                  Our Difference
                </button>
                <button 
                  onClick={() => scrollToSection('methodology')}
                  className="text-left text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors py-3 px-4 rounded-lg text-base font-medium"
                >
                  Our Methodology
                </button>
                <button 
                  onClick={() => scrollToSection('coverage')}
                  className="text-left text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors py-3 px-4 rounded-lg text-base font-medium"
                >
                  What We Cover
                </button>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-left text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors py-3 px-4 rounded-lg text-base font-medium"
                >
                  How Our Reports Work
                </button>
                <button 
                  onClick={() => scrollToSection('insights')}
                  className="text-left text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors py-3 px-4 rounded-lg text-base font-medium"
                >
                  Latest Intelligence & Analysis
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-left text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors py-3 px-4 rounded-lg text-base font-medium"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors py-3 px-4 rounded-lg text-base font-medium"
                >
                  Request a Consultation
                </button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="space-y-3">
                  <a 
                    href="mailto:michael@danielriskintelligence.com"
                    className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors py-2"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="text-sm">michael@danielriskintelligence.com</span>
                  </a>
                  <a 
                    href="https://wa.me/17572877089" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-600 hover:text-green-600 transition-colors py-2"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span className="text-sm">+1 (757) 287-7089</span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main id="main-content">
      <section className="relative pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Subtle CEE map background element */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 border-4 border-blue-600 rounded-full transform rotate-12"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 border-4 border-blue-500 rounded-full transform -rotate-6"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-gray-400 rounded-lg"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Clarity in Uncertainty.<br />
              <span className="text-blue-600">Intelligence built for decisions.</span>
            </h1>
            <div className="w-12 sm:w-16 md:w-24 h-0.5 sm:h-1 bg-gray-400 mx-auto mb-6 sm:mb-8"></div>
          </div>
          
          <div className="space-y-3 sm:space-y-4 md:space-y-6 mb-6 sm:mb-8 md:mb-12">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
              Geopolitical intelligence for business executives in Central &amp; Eastern Europe
            </p>
          </div>

          {/* Stats: responsive grid so items don't overflow on small screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8 sm:mb-12 px-2">
            {/* Each stat stacks number above label on mobile and switches to row layout on sm+ */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left justify-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-2 sm:mb-0 sm:mr-3 flex-shrink-0">
                <span className="text-blue-600 font-bold text-base sm:text-lg lg:text-xl">20+</span>
              </div>
              <span className="text-gray-600 text-xs sm:text-sm sm:h-14 flex items-center justify-center sm:justify-start leading-tight">Years Experience</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left justify-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-2 sm:mb-0 sm:mr-3 flex-shrink-0">
                <span className="text-blue-600 font-bold text-base sm:text-lg lg:text-xl">500+</span>
              </div>
              <span className="text-gray-600 text-xs sm:text-sm sm:h-14 flex items-center justify-center sm:justify-start leading-tight">Reports Delivered</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left justify-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-2 sm:mb-0 sm:mr-3 flex-shrink-0">
                <span className="text-blue-600 font-bold text-base sm:text-lg lg:text-xl">50+</span>
              </div>
              <span className="text-gray-600 text-xs sm:text-sm sm:h-14 flex items-center justify-center sm:justify-start leading-tight">Countries Analyzed</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left justify-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-2 sm:mb-0 sm:mr-3 flex-shrink-0">
                <span className="text-blue-600 font-bold text-base sm:text-lg lg:text-xl">100%</span>
              </div>
              <span className="text-gray-600 text-xs sm:text-sm sm:h-14 flex items-center justify-center sm:justify-start leading-tight">Executive-Ready</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-4">
            <Button 
              size="lg" 
              className="group bg-gray-900 hover:bg-gray-800 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg w-full sm:w-auto min-h-[44px] transition-all duration-200 hover:scale-105 transform shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection('contact')}
            >
              Request a Consultation
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg w-full sm:w-auto min-h-[44px] transition-all duration-200 hover:scale-105 transform shadow-md hover:shadow-lg"
              onClick={() => scrollToSection('how-it-works')}
            >
              See How Our Reports Work
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Services & Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Professional intelligence services designed to support critical business decisions in Central and Eastern Europe
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-3">Custom Intelligence Reports</h3>
              <p className="text-gray-600">
                Tailored, concise, and directly tied to your most urgent decision needs.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-3">Risk Assessment</h3>
              <p className="text-gray-600">
                Identify vulnerabilities in operations, supply chains, and markets before they disrupt performance.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-3">Consulting</h3>
              <p className="text-gray-600">
                Strategic guidance for executives navigating complex or high-stakes decisions.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-3">Market Entry Analysis</h3>
              <p className="text-gray-600">
                De-risk expansion into new CEE markets with clear assessments of opportunities and risks.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Difference */}
      <section id="difference" className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            Our Difference
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4 text-base sm:text-lg">
            We focus on what matters to executives: clear insights that drive decisions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* DRI Column */}
            <div className="flex flex-col h-full">
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-8 text-gray-900 shadow-xl h-full flex flex-col border border-gray-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Daniel Risk Intelligence</h3>
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Built for executives. Every insight drives action.
                </p>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Concise & Focused</h4>
                      <p className="text-gray-600 text-sm">8 pages + 2-page summary</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Executive-Ready</h4>
                      <p className="text-gray-600 text-sm">Readable in minutes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Key Judgments</h4>
                      <p className="text-gray-600 text-sm">Clear confidence levels</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Business Impact</h4>
                      <p className="text-gray-600 text-sm">Direct decision relevance</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* The Impact Box */}
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mt-6 shadow-sm">
                <h4 className="font-bold text-green-900 mb-2 flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  The Impact:
                </h4>
                <p className="text-green-800 text-sm leading-relaxed">
                  Every insight directly maps to your business decisions. Clear, actionable intelligence that executives can use immediately.
                </p>
              </div>
            </div>
            
            {/* Traditional Firms Column */}
            <div className="flex flex-col h-full">
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Traditional Firms</h3>
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-red-100">
                    <X className="w-6 h-6 text-red-500" />
                  </div>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Academic research designed for analysts, not executives.
                </p>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-100">
                      <span className="text-red-500 font-bold text-sm">✗</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Lengthy Reports</h4>
                      <p className="text-gray-600 text-sm">60-80+ pages of background</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-100">
                      <span className="text-red-500 font-bold text-sm">✗</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Analyst-Focused</h4>
                      <p className="text-gray-600 text-sm">Hours to digest</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-100">
                      <span className="text-red-500 font-bold text-sm">✗</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Information-Dense</h4>
                      <p className="text-gray-600 text-sm">Raw data, no clear guidance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-100">
                      <span className="text-red-500 font-bold text-sm">✗</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Research-Driven</h4>
                      <p className="text-gray-600 text-sm">Methodology over impact</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* The Difference Box */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mt-6 shadow-sm">
                <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  The Difference:
                </h4>
                <p className="text-blue-800 text-sm leading-relaxed">
                  Every page of our reports is essential. No filler, no fluff—just intelligence that drives decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Methodology */}
      <section id="methodology" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Methodology
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our reports are built on structured analytic methods that give leaders confidence in the judgments we deliver. We don't rely on opinion — every conclusion is tested, transparent, and linked to business outcomes.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl">📑</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Structured Analysis</h3>
                </div>
                <p className="text-gray-600">
                  We separate evidence from judgment to avoid bias and ensure clarity in every assessment.
                </p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl">🔄</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Scenario Testing</h3>
                </div>
                <p className="text-gray-600">
                  We stress-test forecasts against realistic alternatives, showing not only what is likely but also what could go wrong.
                </p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Transparent Assumptions</h3>
                </div>
                <p className="text-gray-600">
                  We make assumptions explicit so executives understand the basis of each conclusion and can challenge them if needed.
                </p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl">🧭</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Business Impact Mapping</h3>
                </div>
                <p className="text-gray-600">
                  Every judgment is tied to people, reputation, control, and continuity — turning analysis into foresight that matters.
                </p>
              </Card>
            </div>
            
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-center font-medium italic">
                Our tradecraft ensures reports are concise for executives and rigorous enough to guide boardroom decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section id="coverage" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Cover
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We focus on the issues that shape business outcomes in Central and Eastern Europe. Each topic below includes examples of the kinds of questions we help answer.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-center">Political & Regulatory Change</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700 italic">
                    "How will proposed EU carbon rules affect our manufacturing operations in Poland?"
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700 italic">
                    "Could an election in Slovakia shift tax or labor policy in ways that raise our costs?"
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-center">Supply Chain & Operations</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700 italic">
                    "Which transport bottlenecks could delay exports from Romania to Western Europe?"
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700 italic">
                    "How vulnerable are suppliers in Hungary to sudden inspections or regulatory changes?"
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-center">Labor & Demographics</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700 italic">
                    "What is the risk of strikes in Czech automotive manufacturing?"
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700 italic">
                    "How will outmigration from Ukraine affect skilled labor availability in neighboring markets?"
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-center">Energy & Infrastructure</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700 italic">
                    "What risks do our facilities in the Baltics face from potential gas supply disruptions?"
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700 italic">
                    "How resilient is local digital infrastructure to cyberattacks or political interference?"
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-center">Security & Geopolitics</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700 italic">
                    "How would escalation from the Russian invasion of Ukraine affect our logistics hub in Eastern Poland?"
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700 italic">
                    "What sanctions risks could impact our investments in the Balkans?"
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-center">Other Issues</h3>
              <div className="space-y-3">
                <p className="text-gray-600 text-sm mb-3">
                  Not every risk fits neatly into a category. We provide tailored intelligence on unique challenges — from ESG reporting requirements to sector-specific disruptions.
                </p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700 italic">
                    "What emerging technologies, regulations, or sanctions could reshape your industry in CEE?"
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-3xl mx-auto">
              <p className="text-blue-800 font-medium">
                Our focus is always the same: linking regional risks directly to assets, operations, and investments so leaders can act with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Reports Work */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How Our Reports Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              What you receive: Clear intelligence for confident decision-making
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">📄</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Executive Summary</h3>
              <p className="text-gray-600">
                ≤2 pages of key findings and decision recommendations for immediate executive review
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Full Intelligence Report</h3>
              <p className="text-gray-600">
                ~8 pages of detailed analysis with transparent reasoning and business impact assessment
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🔄</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Decision Tools</h3>
              <p className="text-gray-600">
                Early warning signals and monitoring guidance to keep intelligence relevant as circumstances evolve
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Intelligence & Analysis */}
      <section id="insights" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Latest Intelligence & Analysis
            </h2>
            <p className="text-gray-600 text-lg">
              Follow my professional insights and analysis on LinkedIn
            </p>
          </div>
          
          <div className="text-center">
            <a 
              href="https://www.linkedin.com/in/michael-daniel-363bb9279"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 transform shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>Follow on LinkedIn</span>
            </a>
            <p className="text-gray-500 mt-4 text-sm">
              Regular updates on geopolitical developments, security threats, and business intelligence
            </p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              About Us
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Michael Daniel, CEO</h3>
              <p className="text-gray-600 mb-6">
                Veteran intelligence professional with over 20 years of experience in strategic analysis, risk assessment, and intelligence support to senior decision-makers. Holds a Master's degree in Strategic Intelligence from the National Intelligence University in Washington, D.C.
              </p>
              <p className="text-gray-600 mb-6">
                Extensive background in analyzing complex political, economic, and security environments with deep expertise in Central and Eastern Europe, the Balkans, and Baltic regions. Specialized in delivering actionable intelligence that enables executives to navigate regional complexities and make informed business decisions.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                Deliver clear, rigorous, decision-focused intelligence that enables confident executive action.
              </p>
              <p className="text-gray-600">
                We bridge the gap between intelligence analysis and business needs, providing insights that are both analytically sound and immediately applicable to your strategic decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request a Consultation */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Request a Consultation
            </h2>
            <p className="text-gray-600 text-lg">
              Let's discuss how our intelligence services can support your business objectives
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Your company name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                      rows={5}
                      placeholder="Please describe your intelligence needs or specific questions..."
                      required
                    />
                  </div>
                  
                  {formStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-md p-4">
                      <p className="text-red-800 text-sm">{errorMessage}</p>
                    </div>
                  )}
                  
                  {formStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-md p-4">
                      <p className="text-green-800 text-sm">
                        Thank you for your inquiry. We'll contact you within 24 hours.
                      </p>
                    </div>
                  )}
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </div>
            
            <div>
              <Card className="p-6 bg-blue-50 border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">What to Expect</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Quick call to clarify scope and timeline.</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">A proposal with deliverables and pricing.</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Fast, decision-ready reporting — focused on your exposure.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 relative overflow-hidden">
        {/* Simple background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex justify-center md:justify-start">
                <Logo size="md" variant="light" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">Custom Intelligence Reports</li>
                <li className="hover:text-white transition-colors cursor-pointer">Strategic Intelligence Consulting</li>
                <li className="hover:text-white transition-colors cursor-pointer">Risk Assessment</li>
                <li className="hover:text-white transition-colors cursor-pointer">Market Entry Analysis</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center hover:text-white transition-colors">
                  <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                  <a 
                    href="mailto:michael@danielriskintelligence.com"
                    className="hover:text-white transition-colors"
                  >
                    michael@danielriskintelligence.com
                  </a>
                </li>
                <li className="flex items-center hover:text-white transition-colors">
                  <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                  <a 
                    href="https://wa.me/17572877089"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    +1 (757) 287-7089 (WhatsApp)
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Follow</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/michael-daniel-363bb9279"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200 transform hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Daniel Risk Intelligence. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}