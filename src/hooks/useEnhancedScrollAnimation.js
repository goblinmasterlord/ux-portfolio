// src/hooks/useEnhancedScrollAnimation.js
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * Enhanced hook for scroll-triggered animations with various animation types
 * @param {string} animationType - Type of animation to apply ('fadeUp', 'fadeIn', 'stagger', 'slideIn', etc.)
 * @param {object} options - Additional configuration options
 * @returns {array} [ref, controls] - Reference to attach to element and animation controls
 */
export const useEnhancedScrollAnimation = (
  animationType = 'fadeUp', 
  options = { threshold: 0.15, triggerOnce: true }
) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: options.triggerOnce,
    threshold: options.threshold,
    rootMargin: options.rootMargin || '0px'
  });

  // Animation variants based on the animation type
  const getVariants = () => {
    switch (animationType) {
      case 'fadeUp':
        return {
          hidden: { opacity: 0, y: 60 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1] 
            }
          }
        };
      case 'fadeIn':
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { 
              duration: 0.6, 
              ease: "easeOut" 
            }
          }
        };
      case 'stagger':
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: options.staggerDelay || 0.2
            }
          }
        };
      case 'slideIn':
        const direction = options.direction || 'left';
        const xValue = direction === 'left' ? -100 : direction === 'right' ? 100 : 0;
        const yValue = direction === 'up' ? 100 : direction === 'down' ? -100 : 0;
        
        return {
          hidden: { opacity: 0, x: xValue, y: yValue },
          visible: { 
            opacity: 1, 
            x: 0, 
            y: 0,
            transition: { 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1]
            }
          }
        };
      case 'scale':
        return {
          hidden: { 
            opacity: 0, 
            scale: options.initialScale || 0.8 
          },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1]
            }
          }
        };
      case 'reveal':
        return {
          hidden: { 
            clipPath: 'inset(0 100% 0 0)',
            opacity: 0
          },
          visible: { 
            clipPath: 'inset(0 0 0 0)', 
            opacity: 1,
            transition: { 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1]
            }
          }
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!options.triggerOnce) {
      controls.start('hidden');
    }
  }, [controls, inView, options.triggerOnce]);

  return [ref, controls, getVariants()];
};

export default useEnhancedScrollAnimation;