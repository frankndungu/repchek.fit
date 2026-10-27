const ITEMS = [
  ["Does it work on my phone?", "Yes. Open it in Safari or Chrome. No app download."],
  ["Do I need anything else?", "No. Just a place to lean your phone so the camera sees your whole body."],
  ["Does my video get uploaded?", "No. The camera is analyzed on your phone, in your browser."],
  ["Which exercises work?", "Deadlift, barbell row, lat pulldown, bench press, biceps curl, triceps, push-ups, mountain climbers and more. More are coming."],
  ["Does it replace a coach?", "No. Repchek gives automated feedback from a single phone camera, so it can miss things. It isn’t medical advice or a substitute for a qualified trainer."],
];

export function Faq() {
  return (
    <section id="faq" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2>Questions.</h2>
        <div style={{ marginTop: 24 }}>
          {ITEMS.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
