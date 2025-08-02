import { useRef, useEffect } from "react";

export const useDragToScroll = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    // Clone cards for infinite scroll effect
    const setupInfiniteScroll = () => {
      const cards = element.querySelectorAll(".service-card:not([data-clone])");
      if (cards.length === 0) return { totalWidth: 0, cardCount: 0 };

      const cardWidth = cards[0]?.getBoundingClientRect().width || 280;
      const gap = 32; // 2rem gap
      const totalWidth = (cardWidth + gap) * cards.length;

      // Clear any existing clones
      const existingClones = element.querySelectorAll('[data-clone="true"]');
      existingClones.forEach((clone) => clone.remove());

      // Clone all cards and append them multiple times for smoother infinite scroll
      const cloneCount = 3; // Create multiple sets for better infinite effect
      for (let i = 0; i < cloneCount; i++) {
        cards.forEach((card) => {
          const clone = card.cloneNode(true) as HTMLElement;
          clone.setAttribute("data-clone", "true");
          element.appendChild(clone);
        });
      }

      // Calculate a starting position that shows partial cards on both sides
      // This creates a better visual indication that the carousel is scrollable
      const startOffset = cardWidth * 0.3; // Show 30% of a card on the left

      // Use setTimeout to ensure DOM is updated before setting scroll position
      setTimeout(() => {
        element.scrollLeft = startOffset;
      }, 0);

      return { totalWidth, cardCount: cards.length };
    };

    const { totalWidth } = setupInfiniteScroll();

    const handleInfiniteScroll = () => {
      if (totalWidth === 0) return;

      const scrollPosition = element.scrollLeft;

      // Only reset when we've scrolled significantly past one full cycle
      // This prevents the "stuck" behavior during dragging
      if (scrollPosition >= totalWidth * 2) {
        element.scrollLeft = scrollPosition - totalWidth;
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      element.style.cursor = "grabbing";
      startX = e.pageX - element.offsetLeft;
      scrollLeft = element.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      element.style.cursor = "grab";
    };

    const handleMouseUp = () => {
      isDown = false;
      element.style.cursor = "grab";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - element.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      element.scrollLeft = scrollLeft - walk;
      // Don't call handleInfiniteScroll here to prevent jumping during drag
    };

    // Touch events for mobile
    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].pageX - element.offsetLeft;
      scrollLeft = element.scrollLeft;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const x = e.touches[0].pageX - element.offsetLeft;
      const walk = (x - startX) * 2;
      element.scrollLeft = scrollLeft - walk;
      // Don't call handleInfiniteScroll here to prevent jumping during drag
    };

    const handleTouchEnd = () => {
      handleInfiniteScroll();
    };

    // Regular scroll event for infinite effect
    const handleScroll = () => {
      handleInfiniteScroll();
    };

    // Mouse events
    element.addEventListener("mousedown", handleMouseDown);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("mouseup", handleMouseUp);
    element.addEventListener("mousemove", handleMouseMove);

    // Touch events
    element.addEventListener("touchstart", handleTouchStart, { passive: true });
    element.addEventListener("touchmove", handleTouchMove, { passive: true });
    element.addEventListener("touchend", handleTouchEnd, { passive: true });

    // Scroll event for infinite loop
    element.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      element.removeEventListener("mousedown", handleMouseDown);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("mouseup", handleMouseUp);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchmove", handleTouchMove);
      element.removeEventListener("touchend", handleTouchEnd);
      element.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return ref;
};
