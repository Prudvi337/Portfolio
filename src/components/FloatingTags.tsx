import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Tag {
  text: string;
  className?: string;
}

interface Position {
  x: number;
  y: number;
  rotate: number;
}

interface FloatingTagsProps {
  tags: Tag[];
}

const FloatingTags: React.FC<FloatingTagsProps> = ({ tags }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<Position[]>(
    tags.map(() => ({ x: 0, y: 0, rotate: 0 }))
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();

    const newPositions = tags.map(() => ({
      x: Math.random() * rect.width - rect.width / 2,
      y: Math.random() * rect.height - rect.height / 2,
      rotate: (Math.random() - 0.5) * 40,
    }));

    setTimeout(() => setPositions(newPositions), 500);
  }, [tags]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center"
    >
      {tags.map((tag, index) => (
        <motion.div
          key={index}
          initial={{ x: 0, y: 0, opacity: 0, rotate: 0 }}
          animate={{
            x: positions[index].x,
            y: positions[index].y,
            opacity: 1,
            rotate: positions[index].rotate,
            scale: [0.6, 1.2, 1],
          }}
          transition={{
            type: 'spring',
            stiffness: 60,
            damping: 12,
            delay: index * 0.07,
          }}
          whileHover={{
            scale: 1.25,
            zIndex: 10,
            rotate: positions[index].rotate + 5,
          }}
          className={cn(
            'floating-tag absolute px-4 py-2 rounded-full shadow-lg',
            'transition-all ease-out cursor-pointer select-none backdrop-blur-sm',
            'bg-blue-500/20 hover:bg-blue-600/30 text-white border border-blue-400/30',
            'hover:shadow-blue-500/50 hover:shadow-xl',
            tag.className
          )}
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {tag.text}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingTags;
