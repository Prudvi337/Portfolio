import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Tag {
  text: string;
  className?: string;
}

interface FloatingTagsProps {
  tags: Tag[];
}

const FloatingTags: React.FC<FloatingTagsProps> = ({ tags }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const tags = container.getElementsByClassName('floating-tag');
      const rect = container.getBoundingClientRect();
      
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      Array.from(tags).forEach((tag) => {
        const htmlTag = tag as HTMLElement;
        const tagRect = htmlTag.getBoundingClientRect();
        const tagCenterX = tagRect.left + tagRect.width / 2 - rect.left;
        const tagCenterY = tagRect.top + tagRect.height / 2 - rect.top;
        
        const deltaX = mouseX - tagCenterX;
        const deltaY = mouseY - tagCenterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = 300; 
        
        if (distance < maxDistance) {
          const power = (1 - distance / maxDistance) * 50;
          const moveX = (deltaX / distance) * power;
          const moveY = (deltaY / distance) * power;
          
          htmlTag.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          htmlTag.style.transform = 'translate(0, 0)';
        }
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full overflow-hidden"
    >
      {tags.map((tag, index) => {
        const randomX = Math.random() * 90; 
        const randomY = Math.random() * 90;

        return (
          <div
            key={index}
            className={cn(
              "floating-tag absolute px-4 py-2 rounded-full shadow-lg",
              "transition-all duration-500 ease-out hover:scale-125",
              "cursor-pointer select-none backdrop-blur-sm",
              "bg-blue-500/20 hover:bg-blue-600/30 text-white border border-blue-400/30",
              "hover:shadow-blue-500/50 hover:shadow-xl",
              tag.className
            )}
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
            }}
          >
            {tag.text}
          </div>
        );
      })}
    </div>
  );
};

export default FloatingTags;
