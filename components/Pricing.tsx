import { APP_URL, PREMIUM_URL } from "@/lib/config";

export function Pricing() {
  return (
    <section id="pricing" style={{ paddingTop: 0 }}>
      <div className="wrap center">
        <h2>Start free. <em>Track</em> your progress.</h2>
        <div className="bento">
          <div className="tile s3">
            <h3>Free</h3>
            <div className="price">$0</div>
            <ul className="t">
              <li>Live form feedback</li>
              <li>Automatic rep counting</li>
              <li>Workout summary to share</li>
            </ul>
            <a className="btn ghost" href={APP_URL}>Try repchek free</a>
          </div>
          <div className="tile dark s3">
            <h3>Premium</h3>
            <div className="price">$3.99 <small>per month</small></div>
            <ul className="t">
              <li>Everything in Free</li>
              <li>Progress tracking across workouts</li>
              <li>See how form and strength change over time</li>
            </ul>
            <a className="btn white" href={PREMIUM_URL || APP_URL}>
              {PREMIUM_URL ? "Get Premium" : "Start free"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
