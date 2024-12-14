import React, { useEffect } from 'react';
import { ChefHat } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-400 to-red-600 flex justify-center items-center">
      <div className="flex flex-col items-center text-center scale-up">
        <ChefHat className="w-24 h-24 text-white animate-float mb-8" />
        <h1 className="text-5xl font-bold text-white mb-4 tracking-wider slide-up">
          CulinaryAI
        </h1>
        <p className="text-white text-xl fade-in">Your AI-Powered Kitchen Assistant</p>
      </div>
    </div>
  );
}