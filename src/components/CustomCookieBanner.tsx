'use client';

import { useConsent } from 'react-hook-consent';
import { useEffect } from 'react';

export default function CustomCookieBanner() {
  const { isBannerVisible, setConsent } = useConsent();

  // Function to load Clarity script (only once)
  const loadClarity = () => {
    if (document.querySelector('#clarity-script')) return;
    const script = document.createElement('script');
    script.id = 'clarity-script';
    script.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "vfliy34vxc");
    `;
    document.head.appendChild(script);
    console.log('[Clarity] Script loaded');
  };

  // Function to set Clarity consent (called after script loads)
  const setClarityConsent = (granted: boolean) => {
    const waitForClarity = (retries = 20) => {
      if (window.clarity) {
        window.clarity('consentv2', {
          ad_Storage: granted ? "granted" : "denied",
          analytics_Storage: granted ? "granted" : "denied"
        });
        console.log(`[Clarity] Consent set to ${granted ? 'granted' : 'denied'}`);
      } else if (retries > 0) {
        setTimeout(() => waitForClarity(retries - 1), 200);
      } else {
        console.warn('[Clarity] window.clarity not available after retries');
      }
    };
    waitForClarity();
  };

  // On mount, check if consent already given (after reload)
  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie-consent');
    if (savedConsent === 'accepted') {
      // Reload may have already set GA consent, but ensure Clarity is loaded and consented
      if (!document.querySelector('#clarity-script')) {
        loadClarity();
        setClarityConsent(true);
      }
      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted',
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted',
        });
      }
    }
  }, []);

  const acceptAll = () => {
    // 1. Load GTM via react-hook-consent
    setConsent(['google-analytics']);

    // 2. Update Google Consent Mode
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      });
    }

    // 3. Load Clarity directly and set consent
    loadClarity();
    setClarityConsent(true);

    // 4. Push custom event for any other GTM tags that need re‑firing
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'consent_update' });

    // 5. Save consent
    localStorage.setItem('cookie-consent', 'accepted');
    
    // 6. Reload page so GA4 tags (already loaded via GTM) pick up consent
    window.location.reload();
  };

  const declineAll = () => {
    setConsent([]);
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
    }
    if (window.clarity) {
      window.clarity('consentv2', {
        ad_Storage: "denied",
        analytics_Storage: "denied"
      });
    }
    localStorage.setItem('cookie-consent', 'rejected');
  };

  if (!isBannerVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-xs bg-white rounded-lg shadow-xl border border-gray-200 p-4 font-sans">
      <h3 className="text-sm font-semibold text-gray-800 mb-2">🍪 Cookie Preferences</h3>
      <p className="text-xs text-gray-600 mb-3">
        We use cookies to improve your experience. By accepting, you allow analytics and performance cookies.
        <a href="/privacy-notice" className="text-blue-600 hover:underline ml-1">Learn more</a>
      </p>
      <div className="flex gap-2">
        <button
          onClick={acceptAll}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-1.5 px-3 rounded transition"
        >
          Accept All
        </button>
        <button
          onClick={declineAll}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-medium py-1.5 px-3 rounded transition"
        >
          Decline
        </button>
      </div>
    </div>
  );
}