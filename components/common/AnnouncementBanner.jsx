'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [content, setContent] = useState('We have recently raised a capital. Click on this to learn more.');
  const [isAutoHidden, setIsAutoHidden] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Fetch banner settings from API
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch('/api/banner', { cache: 'no-store' });
        if (response.ok) {
          const data = await response.json();
          if (data.settings) {
            setContent(data.settings.content || 'We have recently raised a capital. Click on this to learn more.');
            setIsVisible(data.settings.isVisible ?? true);
          }
        }
      } catch (error) {
        console.error('Failed to fetch banner settings:', error);
        // Use defaults on error
        setIsVisible(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSettings();
  }, []);

  useEffect(() => {
    // Only proceed if banner should be visible and not auto-hidden
    if (!isVisible || isAutoHidden || isLoading) {
      document.body.removeAttribute('data-banner-visible');
      document.documentElement.style.removeProperty('--banner-height');
      return;
    }

    // Set data attribute on body when banner is visible and update CSS variable for navbar positioning
    document.body.setAttribute('data-banner-visible', 'true');
    // Measure banner height after render and set CSS variable for precise navbar positioning
    const measureBanner = () => {
      const banner = document.querySelector('[data-banner]');
      if (banner) {
        const height = banner.offsetHeight;
        document.documentElement.style.setProperty('--banner-height', `${height}px`);
      }
    };
    // Measure immediately and after a small delay to ensure DOM is ready
    measureBanner();
    setTimeout(measureBanner, 0);

    // Hide banner after 3 minutes (180000ms)
    const timer = setTimeout(() => {
      setIsAutoHidden(true);
    }, 180000);

    return () => {
      clearTimeout(timer);
      document.body.removeAttribute('data-banner-visible');
      document.documentElement.style.removeProperty('--banner-height');
    };
  }, [isVisible, isAutoHidden, isLoading]);

  const handleClick = () => {
    
  };

  const handleClose = (e) => {
    e.stopPropagation(); // Prevent triggering the banner click
    setIsAutoHidden(true);
  };

  if (isLoading || !isVisible || isAutoHidden) return null;

  return (
    <div
      data-banner
      className="fixed top-0 left-0 w-full bg-[#CB3F24] text-white py-1 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity z-[60]"
      onClick={handleClick}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Close button on the left */}
        <button
          onClick={handleClose}
          className="absolute left-2 sm:left-4 z-10 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Close banner"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        
        {/* Static text container - centered */}
        <div className="flex items-center justify-center w-full pl-10 sm:pl-12 pr-10 sm:pr-12">
          <span className="font-['Courier_Prime',monospace] text-xs sm:text-sm md:text-base font-medium text-center">
            {content}
          </span>
        </div>
      </div>
    </div>
  );
}

