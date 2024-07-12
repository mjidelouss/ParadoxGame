import React from 'react';

interface AnimatedPuppyProps {
  worryLevel: number; // 0 to 100
}

const AnimatedPuppy: React.FC<AnimatedPuppyProps> = ({ worryLevel }) => {
  const puppyEmoji = worryLevel > 75 ? '😰' : worryLevel > 50 ? '😟' : worryLevel > 25 ? '🙁' : '🐶';
  
  return (
    <div className={`text-8xl transition-all duration-300 ${worryLevel > 50 ? 'animate-bounce' : ''}`}>
      {puppyEmoji}
    </div>
  );
};

export default AnimatedPuppy;