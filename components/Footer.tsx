import { CONTACT_EMAIL, INSTAGRAM_URL, TIKTOK_URL } from "@/lib/config";
import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer>
      <div className="wrap fr">
        <Brand />
        <div className="l">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Repchek on Instagram">
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
            Instagram
          </a>
          <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Repchek on TikTok">
            <svg className="ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16.6 3c.3 2.3 1.7 3.9 4 4.1v3.2c-1.5 0-2.9-.5-4-1.2v6.2c0 3.2-2.5 5.7-5.7 5.7S5.2 18.5 5.2 15.3s2.5-5.7 5.7-5.7c.3 0 .6 0 .9.1v3.3c-.3-.1-.6-.2-.9-.2-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5V3h3.2z" />
            </svg>
            TikTok
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </div>
    </footer>
  );
}
