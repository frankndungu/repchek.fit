import { Skeleton } from "./Skeleton";

export function Colors() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap center">
        <h2>Know how your reps look.</h2>
        <p className="lead">Get feedback on your form as you move.</p>
        <div className="bento">
          <div className="tile sand s2">
            <Skeleton className="th" main="#22c55e" />
            <h3><i className="dot" style={{ background: "var(--green)" }} />Good form</h3>
            <p>Your form is within the target range.</p>
          </div>
          <div className="tile s2">
            <Skeleton className="th" main="#fff" />
            <h3><i className="dot" style={{ background: "#fff" }} />Get in position</h3>
            <p>Get into the starting position.</p>
          </div>
          <div className="tile dark s2">
            <Skeleton className="th" main="#ef4444" />
            <h3><i className="dot" style={{ background: "var(--red)" }} />Fix your form</h3>
            <p>Follow the feedback to adjust your movement.</p>
          </div>
          <div className="tile s3">
            <Skeleton className="th" main="#8a8f8c" spine={0} />
            <h3><i className="dot" style={{ background: "var(--grey)" }} />Can’t see you</h3>
            <p>Move your phone so your body is in view.</p>
          </div>
          <div className="tile sand s3">
            <Skeleton className="th" main="#3d3d3d" spine={1} />
            <h3><i className="dot" style={{ background: "var(--blue)" }} />Your back line</h3>
            <p>Check your back position during supported exercises.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
