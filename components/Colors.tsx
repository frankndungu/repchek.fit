import { Skeleton } from "./Skeleton";

export function Colors() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap center">
        <h2>What the colors <em>mean.</em></h2>
        <p className="lead">Your skeleton tells you what’s happening, rep by rep.</p>
        <div className="bento">
          <div className="tile sand s2">
            <Skeleton className="th" main="#22c55e" />
            <h3><i className="dot" style={{ background: "var(--green)" }} />Good form</h3>
            <p>Your form is in range. Keep going. Every green rep is counted as clean.</p>
          </div>
          <div className="tile s2">
            <Skeleton className="th" main="#fff" />
            <h3><i className="dot" style={{ background: "#fff" }} />Get in position</h3>
            <p>The camera can see you. Get into your start position and hold still for a second. A whistle means counting has started, so setting up never costs you reps.</p>
          </div>
          <div className="tile dark s2">
            <Skeleton className="th" main="#ef4444" />
            <h3><i className="dot" style={{ background: "var(--red)" }} />Fix this now</h3>
            <p>Something broke your form, like hips sagging. You hear what to fix, and that rep is marked in your summary so you can rewatch it.</p>
          </div>
          <div className="tile s3">
            <Skeleton className="th" main="#8a8f8c" spine={0} />
            <h3><i className="dot" style={{ background: "var(--grey)" }} />Can’t see you</h3>
            <p>Part of your body is hidden or out of frame. Nothing is counted or judged until the camera sees you clearly. Move your phone back or turn side-on.</p>
          </div>
          <div className="tile sand s3">
            <Skeleton className="th" main="#3d3d3d" spine={1} />
            <h3><i className="dot" style={{ background: "var(--blue)" }} />Your back line</h3>
            <p>Head to shoulder to hip to knee, on side views. Keep it straight. Monitor your back position during deadlifts, rows and push-ups. Repchek provides visual feedback to help you maintain your target form.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
