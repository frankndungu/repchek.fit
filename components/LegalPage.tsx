import { APP_URL } from "@/lib/config";
import { Brand } from "./Brand";
import { Footer } from "./Footer";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <nav aria-label="Main">
        <div className="wrap">
          <Brand href="/" />
          <a className="btn" href={APP_URL}>Try repchek free</a>
        </div>
      </nav>
      <main className="legal">
        <div className="wrap">
          <h1>{title}</h1>
          <p className="updated">Last updated {updated}</p>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
