"use client";

import Script from "next/script";

declare global {
  interface Window {
    blvd?: {
      init: (options: { businessId: string }) => void;
    };
  }
}

export default function Boulevard() {
  return (
    <Script
      id="boulevard-booking-overlay"
      src="https://static.joinboulevard.com/injector.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        window.blvd?.init({
          businessId: "45748e8e-cb4a-4666-8bcb-30c01998c4e8",
        });
      }}
    />
  );
}