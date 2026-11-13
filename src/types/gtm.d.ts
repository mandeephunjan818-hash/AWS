// app/types/gtm.d.ts
export {};

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    __consentInitialized: boolean;
  }
}