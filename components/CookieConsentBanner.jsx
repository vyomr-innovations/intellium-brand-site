'use client';

import CookieConsent from 'react-cookie-consent';

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="nextjsCookieConsent"

      buttonStyle={{ background: "#1A56DB",color: "#fff", fontSize: "13px" }}
      expires={150}
      onAccept={() => {
        console.log("✅ Cookies accepted");
      }}
      onDecline={() => {
        console.log("❌ Cookies declined");
      }}
    >
      🍪 This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
}
import dynamic from 'next/dynamic';
const CookieConsentClient = dynamic(() => import('@/components/CookieConsentBanner'), { ssr: false });