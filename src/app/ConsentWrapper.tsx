'use client';

import { ConsentProvider } from 'react-hook-consent';
import 'react-hook-consent/dist/styles/style.css';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import CustomCookieBanner from '@/components/CustomCookieBanner';

export default function ConsentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ConsentProvider
      options={{
        services: [
          {
            id: 'google-analytics',
            name: 'Analytics & Performance Cookies',
            scripts: [
              {
                id: 'gtm-script',
                src: 'https://www.googletagmanager.com/gtm.js?id=GTM-PDDWCD62',
              },
            ],
            cookies: [
              { pattern: '_ga' },
              { pattern: '_gid' },
              { pattern: '_gat' },
              { pattern: '_clck' },     
              { pattern: '_clsk' },
              { pattern: 'CLID' },
              { pattern: 'MUID' },
              { pattern: 'MR' },
              { pattern: 'SM' },
              { pattern: 'SRM_B' },
              { pattern: 'ANONCHK' },
            ],
            mandatory: false,
          },
        ],
      }}
    >
      {children}
      <CustomCookieBanner />
      <SpeedInsights />
      <Analytics />
    </ConsentProvider>
  );
}