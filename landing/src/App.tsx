import { useEffect } from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import Comparison from './components/Comparison';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

/**
 * MAIN APP COMPONENT
 *
 * Landing page structure following marketing best practices:
 * 1. Hero - Capture attention (3 seconds to hook)
 * 2. Problem - Agitate pain points
 * 3. Features - Present solution with benefits
 * 4. Demo - Interactive proof of quality
 * 5. Testimonials - Social proof
 * 6. Comparison - Competitive positioning
 * 7. Use Cases - Help user project themselves
 * 8. Pricing - Clear value proposition
 * 9. FAQ - Handle objections
 * 10. CTA - Final conversion push
 * 11. Footer - Navigation & legal
 */

function App() {
  useEffect(() => {
    // Analytics tracking (implement with your preferred tool)
    const trackPageView = () => {
      // Google Analytics 4
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'page_view', {
          page_title: 'VoiClub AI - Landing Page',
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      }

      // Plausible Analytics (privacy-friendly alternative)
      if (typeof window !== 'undefined' && (window as any).plausible) {
        (window as any).plausible('pageview');
      }
    };

    trackPageView();

    // Track scroll depth
    let maxScrollDepth = 0;
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      if (scrollPercentage > maxScrollDepth && scrollPercentage % 25 === 0) {
        maxScrollDepth = scrollPercentage;

        // Track milestone
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'scroll_depth', {
            percentage: scrollPercentage,
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Above the fold - Most critical section */}
      <Hero />

      {/* Problem identification */}
      <Problem />

      {/* Solution presentation */}
      <Features />

      {/* Interactive proof */}
      <Demo />

      {/* Social proof */}
      <Testimonials />

      {/* Competitive positioning */}
      <Comparison />

      {/* Use case exploration */}
      <UseCases />

      {/* Pricing options */}
      <Pricing />

      {/* Objection handling */}
      <FAQ />

      {/* Final conversion push */}
      <CTA />

      {/* Navigation & legal */}
      <Footer />
    </div>
  );
}

export default App;
