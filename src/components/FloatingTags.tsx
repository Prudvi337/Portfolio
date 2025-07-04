import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Tag {
  text: string;
  className?: string;
}

interface Position {
  x: number;
  y: number;
  rotate: number;
  scale: number;
}

interface FloatingTagsProps {
  tags: Tag[];
}

const FloatingTags: React.FC<FloatingTagsProps> = ({ tags }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<Position[]>(
    tags.map(() => ({ x: 0, y: 0, rotate: 0, scale: 1 }))
  );
  const [hoveredTag, setHoveredTag] = useState<number | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const padding = 100;

    const newPositions = tags.map(() => ({
      x: Math.random() * (rect.width - 2 * padding) - (rect.width / 2 - padding),
      y: Math.random() * (rect.height - 2 * padding) - (rect.height / 2 - padding),
      rotate: (Math.random() - 0.5) * 20,
      scale: 0.8 + Math.random() * 0.4,
    }));

    setTimeout(() => setPositions(newPositions), 500);
    controls.start("float");
  }, [tags, controls]);

  const floatVariants = {
    float: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        staggerChildren: 0.1,
      }
    }
  };

  const tagVariants = {
    initial: { 
      x: 0, 
      y: 0, 
      opacity: 0, 
      rotate: 0,
      scale: 0.6
    },
    float: (i: number) => ({
      x: positions[i]?.x || 0,
      y: positions[i]?.y || 0,
      opacity: 1,
      rotate: positions[i]?.rotate || 0,
      scale: positions[i]?.scale || 1,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 12,
        delay: i * 0.07,
        duration: 1.5,
      }
    }),
    hover: {
      scale: 1.4,
      rotate: 0,
      zIndex: 10,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
        duration: 0.3,
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    float: { 
      opacity: [0.3, 0.6, 0.3], 
      scale: [1, 1.2, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    hover: { 
      opacity: 1, 
      scale: 1.5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center pointer-events-none"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <motion.div
        className="relative w-full h-full"
        variants={floatVariants}
        animate={controls}
      >
        {tags.map((tag, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={tagVariants}
            initial="initial"
            animate="float"
            whileHover="hover"
            onHoverStart={() => setHoveredTag(index)}
            onHoverEnd={() => setHoveredTag(null)}
            className="absolute pointer-events-auto"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Glow effect */}
            <motion.div
              variants={glowVariants}
              className="absolute inset-0 rounded-full blur-xl"
              style={{
                background: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)`,
              }}
            />
            
            {/* Tag content */}
            <motion.div
              className={cn(
                'relative px-4 py-2 rounded-full shadow-lg',
                'transition-all ease-out cursor-pointer select-none backdrop-blur-md',
                'bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-600/30 hover:to-purple-600/30',
                'text-white border border-blue-400/30 hover:border-blue-300/50',
                'hover:shadow-blue-500/50 hover:shadow-xl',
                'font-medium text-sm md:text-base',
                tag.className
              )}
              whileHover={{
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)",
              }}
            >
              {/* Sparkle effect on hover */}
              {hoveredTag === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="absolute -top-1 -right-1 w-3 h-3"
                >
                  <div className="w-full h-full bg-yellow-400 rounded-full animate-ping" />
                </motion.div>
              )}
              
              {tag.text}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingTags;
