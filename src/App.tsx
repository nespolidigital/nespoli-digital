import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AppsGrid } from "./components/AppsGrid";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AppDetails } from "./components/AppDetails";

export default function App() {
  const [currentAppId, setCurrentAppId] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path.includes("obra-facil")) return "obra-facil";
      if (path.includes("dinlab")) return "dinlab";
      if (path.includes("investmap")) return "investmap";
      if (path.includes("portfy")) return "portfy";
      if (path.includes("fitmap")) return "fitmap";
      if (path.includes("bandflow")) return "bandflow";
      if (path.includes("mercado-facil")) return "mercadofacil";

      const hash = window.location.hash;
      const appMatch = hash.match(/^#\/app\/([\w-]+)$/);
      if (appMatch && appMatch[1]) return appMatch[1];
    }
    return null;
  });

  // Synchronize initial dark mode state from localStorage or prefers-color-scheme setting
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (saved === "dark" || (!saved && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Synchronize route view state with browser hashtag address
  useEffect(() => {
    const handleHashChange = () => {
      const path = window.location.pathname;
      if (path.includes("obra-facil")) {
        setCurrentAppId("obra-facil");
        window.scrollTo({ top: 0 });
        return;
      }
      if (path.includes("dinlab")) {
        setCurrentAppId("dinlab");
        window.scrollTo({ top: 0 });
        return;
      }
      if (path.includes("investmap")) {
        setCurrentAppId("investmap");
        window.scrollTo({ top: 0 });
        return;
      }
      if (path.includes("portfy")) {
        setCurrentAppId("portfy");
        window.scrollTo({ top: 0 });
        return;
      }
      if (path.includes("fitmap")) {
        setCurrentAppId("fitmap");
        window.scrollTo({ top: 0 });
        return;
      }
      if (path.includes("bandflow")) {
        setCurrentAppId("bandflow");
        window.scrollTo({ top: 0 });
        return;
      }
      if (path.includes("mercado-facil")) {
        setCurrentAppId("mercadofacil");
        window.scrollTo({ top: 0 });
        return;
      }

      const hash = window.location.hash;
      const appMatch = hash.match(/^#\/app\/([\w-]+)$/);
      
      if (appMatch && appMatch[1]) {
        setCurrentAppId(appMatch[1]);
        window.scrollTo({ top: 0 });
      } else {
        setCurrentAppId(null);
      }
    };

    // Initial check on load
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigateBack = () => {
    const path = window.location.pathname;
    if (path === "/" || path === "/index.html" || path === "") {
      window.location.hash = "#/";
      setCurrentAppId(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "index.html";
    }
  };

  // If viewing details of a specific app, render its fully custom page
  if (currentAppId) {
    return (
      <AppDetails appId={currentAppId} onBack={handleNavigateBack} />
    );
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-neutral-900 selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Layout */}
      <main>
        {/* Hero Banner Section */}
        <Hero />

        {/* Portfolio / Our Apps Section */}
        <AppsGrid />

        {/* Services & Process Section */}
        <Services />

        {/* Contact Block */}
        <Contact />
      </main>

      {/* Footer copyright */}
      <Footer />
    </div>
  );
}
