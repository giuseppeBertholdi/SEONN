import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Brain, Database, BarChart3, Bot, Star, Sparkles } from 'lucide-react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NetworkDiagram from '@/components/NetworkDiagram';
import FeatureCard from '@/components/FeatureCard';
import UseCaseCard from '@/components/UseCaseCard';
import ParticleBackground from '@/components/ParticleBackground';
import TypedText from '@/components/TypedText';

const Index = () => {
  const textRevealRefs = useRef<Array<HTMLElement | null>>([]);
  const [heroActive, setHeroActive] = useState(false);
  
  // Handle cursor animation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      let circle = document.querySelector('.circle-follow') as HTMLElement;
      if (!circle) {
        circle = document.createElement('div');
        circle.classList.add('circle-follow');
        document.body.appendChild(circle);
      }
      
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;
      
      const hoverable = e.target as Element;
      if (hoverable.closest('button') || hoverable.closest('a')) {
        circle.style.width = '60px';
        circle.style.height = '60px';
      } else {
        circle.style.width = '40px';
        circle.style.height = '40px';
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      const circle = document.querySelector('.circle-follow');
      if (circle) circle.remove();
    };
  }, []);
  
  // Handle scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Set hero section as active after a delay for initial animation
    setTimeout(() => setHeroActive(true), 300);
    
    // Observe text reveal elements
    textRevealRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    // Observe all reveal-on-scroll elements
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      textRevealRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <ParticleBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-44 md:pb-32 px-6 md:px-8 relative">
        <div className="container mx-auto relative z-10">
          <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${heroActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <Sparkles className="h-10 w-10 mx-auto mb-6 text-seonn-black float-animation" />
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6 text-shadow-pulse">
              <span className="relative">
                Intelligent Networks <br/> That <span className="relative">
                  <span className="gradient-text">F*ck</span> 
                  <div className="absolute bottom-0 left-0 w-full border-b-2 border-seonn-black"></div>
                </span> <br/> Conventional AI
              </span>
            </h1>
            <div className="mb-8 w-24 h-1 bg-seonn-black mx-auto neural-pulse"></div>
            <p 
              ref={el => textRevealRefs.current[0] = el}
              className="text-lg md:text-xl text-seonn-gray-600 mb-10 max-w-2xl mx-auto text-reveal"
            >
              <TypedText
                strings={[
                  "SEONN redefines AI with dynamic neural architecture.",
                  "Break free from rigid AI structures.",
                  "Intelligence that evolves without reprogramming.",
                  "Beyond algorithms. Beyond models. Beyond limits."
                ]}
                typingSpeed={50}
                delayBetween={2000}
              />
            </p>
            <div 
              ref={el => textRevealRefs.current[1] = el}
              className="flex flex-col sm:flex-row justify-center gap-4 text-reveal"
              style={{ transitionDelay: '0.3s' }}
            >
              <Button>
                <span>Experience SEONN</span>
              </Button>
              <Button variant="3d">
                <span>Join The Revolution</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Marquee Section */}
      <section className="py-10 bg-seonn-black text-seonn-white overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="text-2xl font-display uppercase tracking-widest px-8">Self-Evolution</span>
            <span className="text-2xl font-display uppercase tracking-widest px-8">•</span>
            <span className="text-2xl font-display uppercase tracking-widest px-8">Neural Identity</span>
            <span className="text-2xl font-display uppercase tracking-widest px-8">•</span>
            <span className="text-2xl font-display uppercase tracking-widest px-8">Beyond Traditional AI</span>
            <span className="text-2xl font-display uppercase tracking-widest px-8">•</span>
            <span className="text-2xl font-display uppercase tracking-widest px-8">Self-Evolution</span>
            <span className="text-2xl font-display uppercase tracking-widest px-8">•</span>
            <span className="text-2xl font-display uppercase tracking-widest px-8">Neural Identity</span>
            <span className="text-2xl font-display uppercase tracking-widest px-8">•</span>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="section-padding gradient-bg-1 px-6 md:px-8 relative">
        <div className="container mx-auto">
          <div 
            ref={el => textRevealRefs.current[2] = el}
            className="max-w-3xl mx-auto text-reveal"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">What is SEONN?</h2>
            <p className="text-lg text-seonn-gray-700 leading-relaxed mb-10">
              <span className="font-bold text-xl tracking-tight">SEONN</span> (Self-Evolving Organic Neural Network) 
              breaks free from conventional rigid structures. Unlike traditional neural networks, 
              SEONN modifies its topology and strengthens connections autonomously, 
              inspired by the adaptive behavior of the human brain. 
              Each neuron possesses a unique functional identity and individual learning capability, 
              creating a truly cognitive system that evolves through experience.
            </p>
          </div>
        </div>
        <div className="moving-pattern absolute inset-0 opacity-30"></div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding px-6 md:px-8 radial-bg">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div 
              ref={el => textRevealRefs.current[3] = el}
              className="text-reveal"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">How SEONN Works</h2>
              <p className="text-lg text-seonn-gray-600 mb-16 text-center max-w-3xl mx-auto">
                A dynamic system where neurons connect, modify, and create new links autonomously 
                based on input stimuli and context.
              </p>
            </div>
            
            <div className="float-animation">
              <NetworkDiagram />
            </div>
            
            <div 
              ref={el => textRevealRefs.current[4] = el}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-reveal"
            >
              <div className="reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
                <h3 className="font-display font-medium text-xl mb-3">Dynamic Topology</h3>
                <p className="text-seonn-gray-600">
                  The network structure continuously evolves, forming new connections based on usage patterns and contextual relevance.
                </p>
              </div>
              
              <div className="reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
                <h3 className="font-display font-medium text-xl mb-3">Adaptive Learning</h3>
                <p className="text-seonn-gray-600">
                  Each neuron adapts individually, developing specialized functions based on the tasks it most frequently performs.
                </p>
              </div>
              
              <div className="reveal-on-scroll" style={{ transitionDelay: '0.5s' }}>
                <h3 className="font-display font-medium text-xl mb-3">Self-Organization</h3>
                <p className="text-seonn-gray-600">
                  A core management system guides efficient reconfiguration, activating specialized neurons based on task complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Differentiators Section */}
      <section id="differentiators" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-seonn-black via-seonn-gray-900 to-seonn-black opacity-95"></div>
        <div className="container mx-auto relative z-10">
          <div 
            ref={el => textRevealRefs.current[5] = el}
            className="text-reveal"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center text-seonn-white">SEONN's Differentiators</h2>
            <p className="text-lg text-seonn-gray-300 mb-16 text-center max-w-3xl mx-auto">
              What sets SEONN apart from traditional neural networks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <FeatureCard
                title="Self-Evolution"
                description="SEONN continuously learns and evolves, improving its structure without requiring external reprogramming. It adapts over time, becoming more intelligent, efficient, and personalized to its use cases."
                className="bg-seonn-black/50 backdrop-blur-sm border-seonn-gray-800 hover:border-seonn-white/20"
              />
            </div>
            
            <div className="reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
              <FeatureCard
                title="Neurons with Identity"
                description="Each neuron functions as an autonomous entity with its own identity. They analyze patterns, memorize contexts, and adjust their behavior independently, creating functional diversity within the network."
                className="bg-seonn-black/50 backdrop-blur-sm border-seonn-gray-800 hover:border-seonn-white/20"
              />
            </div>
            
            <div className="reveal-on-scroll" style={{ transitionDelay: '0.5s' }}>
              <FeatureCard
                title="Neural DNA"
                description="Every neuron contains a unique DNA data structure storing its identity, learning history, and specialization. This functions as an evolving fingerprint, allowing neurons to be cloned or mutated."
                className="bg-seonn-black/50 backdrop-blur-sm border-seonn-gray-800 hover:border-seonn-white/20"
              />
            </div>
            
            <div className="reveal-on-scroll" style={{ transitionDelay: '0.7s' }}>
              <FeatureCard
                title="Dynamic Plasticity"
                description="Connections between neurons form and dissolve based on contextual relevance, frequency of activation, and success rates. This continuous reorganization optimizes the network for challenges it faces."
                className="bg-seonn-black/50 backdrop-blur-sm border-seonn-gray-800 hover:border-seonn-white/20"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-seonn-white/5 via-transparent to-transparent opacity-50"></div>
      </section>
      
      {/* Slogan Section */}
      <section className="py-20 bg-seonn-black text-seonn-white px-6 md:px-8">
        <div className="container mx-auto">
          <div 
            ref={el => textRevealRefs.current[6] = el}
            className="text-center text-reveal"
          >
            <h2 className="glitch text-3xl md:text-5xl font-display font-bold uppercase tracking-wider" data-text="NOT JUST AI. BETTER AI.">
              NOT JUST AI. BETTER AI.
            </h2>
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section id="use-cases" className="section-padding bg-seonn-white relative">
        <div className="container mx-auto">
          <div 
            ref={el => textRevealRefs.current[7] = el}
            className="text-reveal"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center text-seonn-black">Use Cases & Real Impact</h2>
            <p className="text-lg text-seonn-gray-600 mb-16 text-center max-w-3xl mx-auto">
              How SEONN technology transforms various domains
            </p>
          </div>
          
          <div 
            ref={el => textRevealRefs.current[8] = el}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-reveal"
          >
            <div className="reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <UseCaseCard
                title="Autonomous Systems"
                description="Robots and vehicles that continuously learn from their environment, adapting to new situations without reprogramming."
                icon={<Brain size={24} className="text-seonn-black" />}
                className="bg-seonn-white hover:bg-seonn-black/5"
              />
            </div>
            
            <div className="reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
              <UseCaseCard
                title="Intelligent Assistants"
                description="Personal assistants that evolve their personality and capabilities based on user interactions and preferences."
                icon={<Bot size={24} className="text-seonn-black" />}
                className="bg-seonn-white hover:bg-seonn-black/5"
              />
            </div>
            
            <div className="reveal-on-scroll" style={{ transitionDelay: '0.5s' }}>
              <UseCaseCard
                title="Medical Diagnostics"
                description="Diagnostic systems that evolve with new medical data, improving accuracy and adapting to emerging conditions."
                icon={<Database size={24} className="text-seonn-black" />}
                className="bg-seonn-white hover:bg-seonn-black/5"
              />
            </div>
            
            <div className="reveal-on-scroll" style={{ transitionDelay: '0.7s' }}>
              <UseCaseCard
                title="Financial Analysis"
                description="Adaptive models that evolve to detect new patterns in markets and financial data, adjusting to changing economic conditions."
                icon={<BarChart3 size={24} className="text-seonn-black" />}
                className="bg-seonn-white hover:bg-seonn-black/5"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-seonn-black/5 via-transparent to-transparent opacity-30"></div>
      </section>
      
      {/* CTA Section */}
      <section id="contact" className="section-padding bg-seonn-black text-seonn-white px-6 md:px-8">
        <div className="container mx-auto">
          <div 
            ref={el => textRevealRefs.current[9] = el}
            className="max-w-3xl mx-auto text-center text-reveal"
          >
            <Star className="w-10 h-10 mx-auto mb-6 float-animation" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Join the Neural Revolution</h2>
            <p className="text-lg text-seonn-gray-300 mb-10 max-w-2xl mx-auto">
              Be part of the next evolution in artificial intelligence. Connect with us to explore how SEONN can transform your technological landscape.
            </p>
            <a 
              href="mailto:contact@seonn.ai" 
              className="inline-flex items-center px-8 py-4 bg-seonn-white text-seonn-black rounded-sm font-medium transition-all duration-300 hover:bg-seonn-gray-200 group overflow-hidden relative button-3d"
            >
              <span className="relative z-10">
                Contact Us
                <ArrowRight size={16} className="ml-2 inline transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
