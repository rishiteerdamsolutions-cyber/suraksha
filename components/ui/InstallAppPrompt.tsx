"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

export default function InstallAppPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(window.navigator.userAgent);
    if (isMobile) {
      setIsVisible(true);
    }

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // Ignore registration errors in unsupported/locked environments.
      });
    }

    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
      setIsVisible(true);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    return () => window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
  }, []);

  const onInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setIsVisible(false);
    setDeferredPrompt(null);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-3 bottom-20 z-[80] rounded-xl border border-brand-primary/20 bg-white p-4 shadow-2xl md:hidden">
      <p className="text-sm font-semibold text-brand-primary">Install Suraksha App</p>
      <p className="mt-1 text-xs text-slate-600">
        For faster booking and one-tap call or WhatsApp access.
      </p>
      <div className="mt-3 flex gap-2">
        <button onClick={() => setIsVisible(false)} className="btn-secondary flex-1 py-2 text-xs">
          Later
        </button>
        {deferredPrompt ? (
          <button onClick={onInstall} className="btn-primary flex-1 py-2 text-xs">
            Install
          </button>
        ) : (
          <a href="#home" className="btn-primary flex-1 py-2 text-center text-xs">
            Add to Home Screen
          </a>
        )}
      </div>
    </div>
  );
}
