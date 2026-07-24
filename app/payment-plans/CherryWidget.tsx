"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    _hw?: {
      (...args: unknown[]): void;
      q?: unknown[][];
    };
  }
}

export default function CherryWidget() {
  useEffect(() => {
    const scriptId = "cherry-widget-script";

    window._hw =
      window._hw ||
      function (...args: unknown[]) {
        window._hw!.q = window._hw!.q || [];
        window._hw!.q.push(args);
      };

    const initializeCherry = () => {
      window._hw?.(
        "init",
        {
          debug: false,
          variables: {
            slug: "713botoxme",
            name: "Identity Aesthetics Kingwood",
            images: [24],
            customLogo: "",
            defaultPurchaseAmount: 750,
            customImage: "",
            imageCategory: "medspa",
            language: "en",
          },
          styles: {
            primaryColor: "#69855b",
            secondaryColor: "#69855b10",
            fontFamily: "Montserrat",
            headerFontFamily: "Montserrat",
          },
        },
        ["hero", "calculator", "howitworks", "faq"],
      );
    };

    const existingScript = document.getElementById(
      scriptId,
    ) as HTMLScriptElement | null;

    if (existingScript) {
      initializeCherry();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://files.withcherry.com/widgets/widget.js";
    script.async = true;
    script.onload = initializeCherry;

    document.body.appendChild(script);
  }, []);

  return (
    <div className="cherry-widget">
      <div id="all" />
      <div id="hero" />
      <div id="calculator" />
      <div id="howitworks" />
      <div id="testimony" />
      <div id="faq" />
    </div>
  );
}