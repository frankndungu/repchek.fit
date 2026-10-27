import { APP_URL, DEMO } from "@/lib/config";

export function Hero() {
  return (
    <header className="hero center">
      <div className="wrap">
        <h1>Know if you’re <em>improving</em> at the gym.</h1>
        <p className="lead">
          Get live form feedback, count your reps automatically, and track your
          progress over time.
        </p>
        <div className="row">
          <a className="btn" href={APP_URL}>Try Repchek Free</a>
          <a className="btn ghost" href="#demo">Watch the demo</a>
        </div>
        <div className="stage" id="demo">
          <div className="ph big">
            {DEMO.video ? (
              <video
                src={DEMO.video}
                poster={DEMO.poster || undefined}
                controls
                playsInline
                preload="metadata"
                aria-label="Repchek demo video"
              >
                {DEMO.captions && (
                  <track kind="captions" src={DEMO.captions} srcLang="en" label="English" default />
                )}
              </video>
            ) : (
              <div className="demo">
                <div className="play" aria-hidden="true" />
                Demo video coming soon
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
