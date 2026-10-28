import { LIFTER } from "@/lib/config";

// Hidden until LIFTER.video is set in lib/config.ts.
export function Lifter() {
  if (!LIFTER.video) return null;
  return (
    <section id="lifter">
      <div className="wrap center">
        <h2>See repchek in action.</h2>
        <p className="lead">Real workouts. Real feedback.</p>
        <div className="ph big" style={{ marginTop: 36 }}>
          <video
            src={LIFTER.video}
            poster={LIFTER.poster || undefined}
            controls
            playsInline
            preload="metadata"
            aria-label={`Video of ${LIFTER.name || "a lifter"} using repchek`}
          >
            {LIFTER.captions && (
              <track kind="captions" src={LIFTER.captions} srcLang="en" label="English" default />
            )}
          </video>
        </div>
        {LIFTER.name && (
          <figure style={{ margin: "24px auto 0", maxWidth: 540 }}>
            {LIFTER.quote && (
              <blockquote className="q" style={{ margin: 0, fontSize: 19 }}>
                “{LIFTER.quote}”
              </blockquote>
            )}
            <figcaption className="who">{LIFTER.name}</figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
