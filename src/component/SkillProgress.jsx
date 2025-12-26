import { useState, useEffect, useRef } from 'react';

const SkillProgress = ({ skill, percentage }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animate progress bar
          setTimeout(() => {
            setProgress(percentage);
          }, 200);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [percentage, isVisible]);

  return (
    <div ref={ref} className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-sm lg:text-base font-medium text-white">
          {skill}
        </span>
        <span className="text-sm text-gray-400 font-medium">
          {progress}%
        </span>
      </div>
      
      {/* Custom Progress Bar */}
      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-linear-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillProgress;