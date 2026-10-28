import { Skeleton } from "./Skeleton";

export function HowItWorks() {
  return (
    <section className="center">
      <div className="wrap">
        <h2>Work out. Review. Improve.</h2>
        <p className="lead">Three simple steps to get started.</p>
        <div className="row3">
          <div>
            <div className="ph" role="img" aria-label="Illustration of the exercise picker screen">
              <div className="scr" aria-hidden="true">
                <h4>repchek</h4>
                <span className="lbl">Pick your lift</span>
                <div>
                  <span className="pill on">Barbell row</span>
                  <span className="pill">Deadlift</span>
                  <span className="pill">Push-up</span>
                  <span className="pill">Bench press</span>
                  <span className="pill">Biceps curl</span>
                </div>
                <span className="lbl">Today</span>
                <div className="nums">
                  <div><b>4</b><span className="lbl">Sets</span></div>
                  <div><b>12</b><span className="lbl">Reps</span></div>
                  <div><b>40</b><span className="lbl">Kg</span></div>
                </div>
                <div className="start">Start camera</div>
              </div>
            </div>
            <p className="cap">1. Choose your exercise.</p>
          </div>
          <div>
            <div className="ph" role="img" aria-label="Illustration of live form feedback on a barbell row">
              <div className="live" aria-hidden="true">
                <Skeleton main="#22c55e" viewBox="40 40 300 330" />
                <div className="tag" style={{ left: 10, top: 12, background: "rgba(0,0,0,.65)" }}>
                  Set 2/4 | Reps 5 | PULLING
                </div>
                <div className="tag" style={{ left: 10, right: 10, bottom: 14, textAlign: "center", background: "rgba(229,72,77,.92)" }}>
                  Eyes forward, keep your back straight
                </div>
              </div>
            </div>
            <p className="cap">2. Get live form feedback as you work out.</p>
          </div>
          <div>
            <div className="ph" role="img" aria-label="Illustration of the session summary screen">
              <div className="scr" aria-hidden="true">
                <span className="lbl">Session complete</span>
                <h4>Barbell row</h4>
                <div style={{ display: "flex", gap: 6 }}>
                  <div className="stat"><b>48</b><span className="lbl">Reps</span></div>
                  <div className="stat"><b>81%</b><span className="lbl">Clean</span></div>
                </div>
                <span className="lbl">Sets</span>
                {[100, 92, 75, 58].map((w) => (
                  <div className="bar" key={w}><span style={{ width: `${w}%` }} /></div>
                ))}
                <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
                  Form broke more in the last set. Lower the weight a little.
                </p>
              </div>
            </div>
            <p className="cap">3. Review your workout and track your progress.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
