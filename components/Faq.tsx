const ITEMS = [
  ["Does it work on my phone?", "Yes. Open repchek in your phone’s browser."],
  ["Do I need anything else?", "Just your phone and a way to position it so the camera can see you."],
  ["Does my video get uploaded?", "No. The camera is analyzed on your phone, in your browser."],
  ["Which exercises can repchek check?", "Push-ups and mountain climbers work well. Other supported exercises include barbell rows, deadlifts, biceps curls and triceps exercises. Results depend on the exercise and camera angle."],
];

export function Faq() {
  return (
    <section id="faq" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2>Questions?</h2>
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
