'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(false);
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

    // Hide banner after 10 seconds
    const timer = setTimeout(() => {
      setIsAutoHidden(true);
    }, 10000);

    return () => {
      clearTimeout(timer);
      document.body.removeAttribute('data-banner-visible');
      document.documentElement.style.removeProperty('--banner-height');
    };
  }, [isVisible, isAutoHidden, isLoading]);

  const handleClick = () => {
    router.push('/products/resources');
  };

  if (isLoading || !isVisible || isAutoHidden) return null;

  return (
    <div
      data-banner
      className="fixed top-0 left-0 w-full bg-[#CB3F24] text-white py-1 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity z-[60]"
      onClick={handleClick}
    >
      <div className="relative w-full h-full flex items-center">
        {/* Scrolling text container */}
        <div className="flex items-center whitespace-nowrap w-full">
          {/* Duplicate text for seamless loop */}
          <div className="flex animate-scroll-right-to-left">
            <span className="font-['Courier_Prime',monospace] text-xs sm:text-sm md:text-base font-medium px-8">
              {content}
            </span>
            <span className="font-['Courier_Prime',monospace] text-xs sm:text-sm md:text-base font-medium px-8">
              {content}
            </span>
            <span className="font-['Courier_Prime',monospace] text-xs sm:text-sm md:text-base font-medium px-8">
              {content}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

