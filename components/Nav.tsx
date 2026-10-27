import { APP_URL } from "@/lib/config";
import { Brand } from "./Brand";

export function Nav() {
  return (
    <nav aria-label="Main">
      <div className="wrap">
        <Brand />
        <a className="btn" href={APP_URL}>Try Repchek Free</a>
      </div>
    </nav>
  );
}
