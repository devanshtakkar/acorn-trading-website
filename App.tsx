import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-veridian-700 text-white selection:bg-lime-glow selection:text-veridian-900 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Background Gradients/Glows to make it 'sexy' */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-lime-glow/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-veridian-900/40 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col justify-center">
          <Hero />
        </main>
      </div>
    </div>
  );
};

export default App;