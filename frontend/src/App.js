import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CalendarJournalSection from './components/CalendarJournalSection';
import FastTrackSection from './components/FastTrackSection';
import AdvantagesSection from './components/AdvantagesSection';
import MentorSection from './components/MentorSection';
import PackagesSection from './components/PackagesSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import AffiliateSection from './components/AffiliateSection';
import SpotsCTASection from './components/SpotsCTASection';
import IncludedSection from './components/IncludedSection';
import FAQSection from './components/FAQSection';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';
import Dashboard from './components/Dashboard';
import { Toaster, toast } from 'sonner';
import './App.css';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const handleJoinWaitlist = () => {
    setIsWaitlistOpen(true);
  };

  const handleDemoView = () => {
    setIsDashboardOpen(true);
    toast.success('Opening Dashboard Demo');
  };

  const handleMeetMentor = () => {
    document.getElementById('mentor')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App bg-[rgb(17,17,19)] min-h-screen">
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            background: 'rgb(26,28,30)',
            border: '1px solid rgb(63,63,63)',
            color: 'white',
          },
        }}
      />
      
      {/* Dashboard Overlay */}
      {isDashboardOpen && (
        <Dashboard onClose={() => setIsDashboardOpen(false)} />
      )}
      
      <Header onJoinWaitlist={handleJoinWaitlist} />
      
      <main>
        <HeroSection 
          onJoinWaitlist={handleJoinWaitlist} 
          onDemoView={handleDemoView}
          onMeetMentor={handleMeetMentor}
        />
        <CalendarJournalSection />
        <FastTrackSection />
        <AdvantagesSection />
        <MentorSection />
        <SuccessStoriesSection />
        <AffiliateSection onJoinWaitlist={handleJoinWaitlist} />
        <SpotsCTASection onJoinWaitlist={handleJoinWaitlist} />
        <IncludedSection />
        <FAQSection />
      </main>
      
      <Footer />
      
      <Chatbot />
      
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </div>
  );
}

export default App;
