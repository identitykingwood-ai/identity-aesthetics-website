"use client";

import { useEffect } from "react";

type BoulevardWidget = {
  openBookingWidget?: () => void;
};

export default function BoulevardBookingFix() {
  useEffect(() => {
    const openBoulevard = (event: MouseEvent) => {
      const clickedElement = event.target as HTMLElement;

      const bookingLink = clickedElement.closest(
        'a[href="#book-now"], a[href="/#book-now"], a[href="/laser-hair-removal/#book-now"]'
      );

      if (!bookingLink) return;

      // Prevent the link from scrolling anywhere.
      event.preventDefault();

      const boulevard = (
        window as typeof window & {
          blvd?: BoulevardWidget;
        }
      ).blvd;

      boulevard?.openBookingWidget?.();
    };

    // Capture the click before the browser follows the anchor.
    document.addEventListener("click", openBoulevard, true);

    return () => {
      document.removeEventListener("click", openBoulevard, true);
    };
  }, []);

  return null;
}