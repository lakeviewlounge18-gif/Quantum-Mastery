import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DashboardPreview from './components/DashboardPreview';
import FastTrackSection from './components/FastTrackSection';
import AdvantagesSection from './components/AdvantagesSection';
import MentorSection from './components/MentorSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import SpotsCTASection from './components/SpotsCTASection';
import IncludedSection from './components/IncludedSection';
import FAQSection from './components/FAQSection';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';
import { Toaster, toast } from 'sonner';
import './App.css';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleJoinWaitlist = () => {
    setIsWaitlistOpen(true);
  };

  const handleDemoView = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
    toast.success('Scrolling to Dashboard Preview');
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
      
      <Header onJoinWaitlist={handleJoinWaitlist} />
      
      <main>
        <HeroSection 
          onJoinWaitlist={handleJoinWaitlist} 
          onDemoView={handleDemoView}
          onMeetMentor={handleMeetMentor}
        />
        <DashboardPreview />
        <FastTrackSection />
        <AdvantagesSection />
        <MentorSection />
        <SuccessStoriesSection />
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
