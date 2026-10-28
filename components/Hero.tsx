import { APP_URL, DEMO } from "@/lib/config";

export function Hero() {
  return (
    <header className="hero center">
      <div className="wrap">
        <h1>Every workout moves you <em>forward.</em></h1>
        <p className="lead">
          Count your reps, get live form feedback, and track your progress at
          home or in the gym.
        </p>
        <div className="row">
          <a className="btn" href={APP_URL}>Try repchek free</a>
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
                aria-label="repchek demo video"
              >
                {DEMO.captions && (
                  <track kind="captions" src={DEMO.captions} srcLang="en" label="English" default />
                )}
              </video>
            ) : (
              <div className="demo">
                <div className="play" aria-hidden="true" />
                Demo video goes here
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
