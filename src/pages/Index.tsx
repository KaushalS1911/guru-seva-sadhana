
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import OfferingsSection from '../components/OfferingsSection';
import AshramProgressSection from '../components/AshramProgressSection';
import DonationSection from '../components/DonationSection';
import BlogSection from '../components/BlogSection';
import AwardsSection from '../components/AwardsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <OfferingsSection />
      <AshramProgressSection />
      <DonationSection />
      <BlogSection />
      <AwardsSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
