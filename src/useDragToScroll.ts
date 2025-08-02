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
      const cards = element.querySelectorAll(".service-card");
      const cardWidth = cards[0]?.getBoundingClientRect().width || 280;
      const gap = 32; // 2rem gap
      const totalWidth = (cardWidth + gap) * cards.length;

      // Clone all cards and append them
      cards.forEach((card) => {
        const clone = card.cloneNode(true) as HTMLElement;
        clone.setAttribute("data-clone", "true");
        element.appendChild(clone);
      });

      // Set initial scroll position to show original cards
      element.scrollLeft = 0;

      return { totalWidth, cardCount: cards.length };
    };

    const { totalWidth } = setupInfiniteScroll();

    const handleInfiniteScroll = () => {
      const scrollPosition = element.scrollLeft;

      // If scrolled past the original cards, reset to beginning
      if (scrollPosition >= totalWidth) {
        element.scrollLeft = scrollPosition - totalWidth;
      }
      // If scrolled before the beginning, jump to end of original cards
      else if (scrollPosition <= 0) {
        element.scrollLeft = totalWidth + scrollPosition;
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
      handleInfiniteScroll();
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
      handleInfiniteScroll();
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
