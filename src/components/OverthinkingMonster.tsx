import React from 'react';

interface OverthinkingMonsterProps {
  progress: number; // 0 to 100
}

const OverthinkingMonster: React.FC<OverthinkingMonsterProps> = ({ progress }) => {
  const monsterSize = 50 + progress / 2; // Size grows from 50px to 100px

  return (
    <div 
      className="absolute bottom-0 right-0 transition-all duration-300"
      style={{ 
        fontSize: `${monsterSize}px`,
        transform: `translateY(${100 - progress}%)` 
      }}
    >
      👾
    </div>
  );
};

export default OverthinkingMonster;