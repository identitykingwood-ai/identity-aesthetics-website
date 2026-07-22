"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    blvd?: {
      openBookingWidget: () => void;
    };
  }
}

export default function BoulevardBookingFix() {
  useEffect(() => {
    const openBoulevard = (event: MouseEvent) => {
      const clickedElement = event.target as HTMLElement;

      const bookingLink = clickedElement.closest(
        'a[href="#book-now"], a[href="/#book-now"], a[href="/laser-hair-removal/#book-now"]'
      );

      if (!bookingLink) return;

      if (window.blvd?.openBookingWidget) {
        event.preventDefault();
        window.blvd.openBookingWidget();
      }
    };

    document.addEventListener("click", openBoulevard);

    return () => {
      document.removeEventListener("click", openBoulevard);
    };
  }, []);

  return null;
}