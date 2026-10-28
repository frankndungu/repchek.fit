import { USE_MEDIA } from "@/lib/config";

const TILES = [
  { cls: "sand s2", chip: "At home", title: "Home workouts", text: "Check your form at home, in the space you have." },
  { cls: "s2", chip: "Supported today", title: "Bodyweight training", text: "Get feedback on supported exercises." },
  { cls: "dark s2", chip: "More coming", title: "More ways to move", text: "Mountain climbers work today. More exercises are coming." },
];

export function UseCases() {
  return (
    <section className="center" aria-labelledby="use-h">
      <div className="wrap">
        <h2 id="use-h">Your workout. Your space.</h2>
        <p className="lead">Work out anywhere.</p>
        <div className="bento">
          {TILES.map((t, i) => {
            const m = USE_MEDIA[i];
            return (
              <div className={`tile ${t.cls}`} key={t.title}>
                {m?.src && (
                  <div className={m.whole ? "slot whole" : "slot"}>
                    {/\.(mp4|webm|mov)$/i.test(m.src) ? (
                      <video src={m.src} muted loop playsInline autoPlay aria-label={m.alt} />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={m.src} alt={m.alt} />
                    )}
                  </div>
                )}
                <span className="chipt">{t.chip}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
