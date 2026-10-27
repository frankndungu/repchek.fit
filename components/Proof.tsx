import { APP_URL } from "@/lib/config";

export function Proof() {
  return (
    <section id="proof" style={{ paddingTop: 0 }}>
      <div className="wrap center">
        <h2>What lifters say.</h2>
        <div className="bento">
          <figure className="tile dark s4" style={{ margin: 0 }}>
            <blockquote className="q" style={{ margin: 0 }}>
              “I usually swing a lot when working my back and have no idea with
              whether to look up or down but Repcheck helped me improve my form
              by counting the good reps and the voice narration”
            </blockquote>
            <figcaption className="who">@KariukiKawira</figcaption>
          </figure>
          <figure className="tile sand s2" style={{ margin: 0 }}>
            <blockquote className="q" style={{ margin: 0 }}>
              “It really helped me adjust my form in doing bent over barbell
              rows. I cannot wait for more workouts and tracking.”
            </blockquote>
            <figcaption className="who">@EvansMwangi</figcaption>
          </figure>
          <figure className="tile s3" style={{ margin: 0 }}>
            <blockquote className="q" style={{ margin: 0, fontSize: 18 }}>
              “I love that I can work out anywhere, independently, while still
              getting guidance on how to perform each exercise correctly and
              feedback on my form and posture. It makes training so much easier
              and gives me the confidence to work out on my own. You’re
              definitely onto something special, and I’m excited to see how far
              you take this!”
            </blockquote>
            <figcaption className="who">@_nittah_</figcaption>
          </figure>
          <figure className="tile sand s3" style={{ margin: 0 }}>
            <blockquote className="q" style={{ margin: 0, fontSize: 18 }}>
              “I’ve genuinely enjoyed using the app. The exercise demonstrations
              and real time feedback on your form make it feel like having a
              personal trainer in your pocket. It’s a brilliant concept with so
              much potential, and I’m excited to see how it grows!”
            </blockquote>
            <figcaption className="who">@duke_mike</figcaption>
          </figure>
          <div
            className="tile ink"
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <h3 style={{ fontSize: 28 }}>Your turn.</h3>
            <a className="btn white" href={APP_URL}>
              Try Repchek Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
