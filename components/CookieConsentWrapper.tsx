'use client';

import dynamic from 'next/dynamic';

const CookieConsent = dynamic(() => import('./CookieConsentBanner'), { ssr: false });

export default function CookieConsentWrapper() {
  return <CookieConsent />;
}
