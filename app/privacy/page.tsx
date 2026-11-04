import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy policy | repchek",
  description:
    "What repchek collects, why, who handles it, and how to delete it.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy policy" updated="4 November 2026">
      <div className="summary">
        <p>
          <strong>The short version.</strong> repchek reads your camera on your
          device to count reps and check your form. Your video is not uploaded.
          We keep your email and your workout results so your account works. We
          do not sell your data and we do not show ads.
          If you subscribe to Premium, Polar takes the payment and we never
          see your card number.
        </p>
      </div>

      <h2>Who we are</h2>
      <p>
        repchek is run by Francis Ndungu. This policy covers the website at
        repchek.fit and the app at app.repchek.fit. For any question about it,
        write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Account details.</strong> Your email address. If you sign in
          with Google, we also receive your name and profile picture from
          Google.
        </li>
        <li>
          <strong>Workout results.</strong> The exercise, sets, reps, which reps
          had form faults, and the date. These are linked to your account when
          you are signed in.
        </li>
        <li>
          <strong>Challenges.</strong> If you make or join a challenge, we keep
          the challenge name, note and dates, and who joined. Everyone in a
          challenge can see its Hall of Gains, which shows each member’s first
          name or display name, their number of workouts and their clean reps
          within the challenge dates. Anyone with a challenge link can see the
          challenge name, note, who made it and how many people joined, once
          they sign in. They cannot see your other workouts.
        </li>
        <li>
          <strong>Usage and device data.</strong> Pages visited, simple events
          such as starting or finishing a session, browser type, and your
          approximate country. We use this to see what works and what breaks.
        </li>
        <li>
          <strong>Subscription details.</strong> If you subscribe to Premium,
          we receive from Polar whether your subscription is active, when it
          renews or ends, and a reference that links it to your account. Polar
          collects your payment details, billing name and address, and tax
          information itself. We do not receive your card number.
        </li>
        <li>
          <strong>Messages.</strong> If you email us, we keep the email and our
          reply.
        </li>
      </ul>

      <h2>Your camera</h2>
      <p>
        The camera feed is analysed on your phone or computer, in your browser.
        The video is not sent to our servers. If you turn on Record sets, the
        clips stay on your device and you choose whether to share them. If you
        use Share, the image goes where you send it through your device’s share
        menu.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To sign you in and keep your account secure.</li>
        <li>To save your workouts and show them back to you.</li>
        <li>
          To work out your progress, streaks and, for Premium, your charts and
          suggestions from your saved workouts.
        </li>
        <li>To run challenges and show the Hall of Gains to its members.</li>
        <li>To switch Premium on and off to match your subscription.</li>
        <li>To send you the sign in code you ask for.</li>
        <li>To fix bugs and improve repchek.</li>
        <li>To answer your questions.</li>
      </ul>
      <p>
        We only use your data for these reasons. We do not sell it, rent it, or
        use it for advertising.
      </p>

      <h2>Who handles your data for us</h2>
      <p>These companies process data on our behalf to run repchek:</p>
      <ul>
        <li>Supabase, for sign in and for storing your account and workouts.</li>
        <li>Resend, for sending sign in code emails.</li>
        <li>Google, if you choose to sign in with Google.</li>
        <li>
          Polar, for Premium payments. Polar is the seller of record, so it
          handles your payment, tax and receipts. Its own privacy policy
          applies to the details you give it.
        </li>
        <li>Vercel, for hosting the site and the app, and for basic usage statistics.</li>
        <li>Google Analytics, for usage statistics on repchek.fit.</li>
      </ul>
      <p>
        These providers may store data in countries other than yours. We share
        only what each one needs to do its job.
      </p>

      <h2>Cookies and local storage</h2>
      <p>
        The app stores your sign in session and your settings, such as camera
        choice and coach voice, in your browser. This is needed for the app to
        work. Google Analytics on repchek.fit may set cookies to count visits.
        You can block or clear cookies in your browser settings. The app will
        still work, but you may need to sign in again.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep your account and workouts until you ask us to delete them. After
        you ask, we delete them within 30 days. Backups may hold a copy for a
        short time longer. We may keep basic records we are required by law to
        keep.
        Polar keeps payment and tax records for as long as the law requires,
        even after your account is deleted here.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to show you the data we hold about you, correct it, or
        delete it. You can also ask us to stop using it in a particular way.
        Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> from the
        address on your account and we will reply within 30 days. You can leave
        any challenge in the app at any time, and your name and totals then
        disappear from its Hall of Gains. Deleting your account removes you
        from every challenge and deletes the challenges you made. You can sign
        out of the app at any time from More options.
      </p>

      <h2>Children</h2>
      <p>
        repchek is not for anyone under 16. We do not knowingly collect data
        from children. If you think a child has given us their data, email us
        and we will delete it.
      </p>

      <h2>Security</h2>
      <p>
        We use sign in codes, encrypted connections, and trusted providers to
        protect your data. No service is perfectly secure, so we cannot promise
        absolute security. If a breach affects you, we will tell you as the law
        requires.
      </p>

      <h2>Payments</h2>
      <p>
        Premium is paid through Polar, which acts as the seller of record.
        When you subscribe, you enter your card or payment details on
        Polar’s checkout page, not on repchek. We never see or store your
        card number. Polar tells us whether your subscription is active so we
        can switch Premium on or off.
      </p>
      <p>
        You can cancel and see your receipts in the customer portal that opens
        from Manage subscription on your Profile.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If we change this policy in a way that matters, we will update the date
        above and tell signed in users in the app or by email.
      </p>

      <h2>Contact</h2>
      <p>
        Questions or requests: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
