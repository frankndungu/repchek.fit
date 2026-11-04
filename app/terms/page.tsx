import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of service | repchek",
  description: "The rules for using repchek.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <LegalPage title="Terms of service" updated="4 November 2026">
      <div className="summary">
        <p>
          <strong>The short version.</strong> repchek is a coach in your phone,
          not a doctor. Train within your limits. Use the app fairly. We do our
          best to keep it working, but we cannot promise it will be perfect.
          Premium is $3.99 a month and you can cancel any time.
        </p>
      </div>

      <h2>Agreeing to these terms</h2>
      <p>
        By using repchek at repchek.fit or app.repchek.fit, you agree to these
        terms and to our <a href="/privacy">privacy policy</a>. If you do not
        agree, please do not use repchek.
      </p>

      <h2>What repchek is</h2>
      <p>
        repchek uses your camera to count reps and give feedback on your form
        while you work out. It runs in your browser. We may add, change or
        remove features over time.
      </p>

      <h2>Your account</h2>
      <ul>
        <li>You must be at least 16 years old.</li>
        <li>Give us a real email address that you control.</li>
        <li>
          Keep your sign in codes to yourself. You are responsible for activity
          on your account.
        </li>
        <li>Tell us if you think someone else has used your account.</li>
      </ul>

      <h2>Health and safety</h2>
      <p>
        repchek is not medical advice and does not replace a doctor, physio or
        qualified coach. Its rep counts and form feedback come from a camera and
        software, and they can be wrong. Results depend on lighting, camera
        angle, clothing and the exercise.
      </p>
      <p>
        Exercise carries a risk of injury. Check with a doctor before you start
        if you have a health condition. Stop if you feel pain or dizziness. Set
        up your space safely and never rely on repchek to keep you safe. You
        train at your own risk.
      </p>

      <h2>Using repchek fairly</h2>
      <p>Please do not:</p>
      <ul>
        <li>break the law or use repchek to harm anyone;</li>
        <li>try to get into accounts or systems that are not yours;</li>
        <li>attack, overload, scrape or reverse engineer the service;</li>
        <li>use repchek to film people without their consent;</li>
        <li>copy or resell repchek without our written permission.</li>
      </ul>

      <h2>Your data</h2>
      <p>
        Your workouts and your account details belong to you. You give us
        permission to store and process them only so we can run repchek for you,
        as described in the privacy policy. Your camera video is analysed on
        your device and is not uploaded.
      </p>

      <h2>Free and Premium</h2>
      <p>
        repchek is free to use. Free includes your complete workout history,
        reports for past sessions, personal bests, streaks, XP, milestones and
        live form feedback with rep counting.
      </p>
      <p>
        Premium is a paid plan. It adds deeper analytics: progress charts,
        trends, comparisons between sessions, and suggestions for what to try
        next. We may add or change Premium features over time. If we remove
        something that matters to you, we will tell you.
      </p>

      <h2>Subscriptions and payment</h2>
      <ul>
        <li>
          Premium costs $3.99 US dollars a month, billed monthly in advance.
          The checkout shows the total, including any tax that applies to you,
          before you pay.
        </li>
        <li>
          It renews every month until you cancel. You agree to be charged each
          month until then.
        </li>
        <li>
          Payments are handled by Polar, which is the seller of record. Polar’s
          terms apply to the payment. We never see your card number.
        </li>
        <li>
          If a payment fails, Polar tries again. Premium stays on while it
          retries. If the payment still fails, your plan goes back to Free and
          your saved sessions stay.
        </li>
        <li>
          We will tell you at least 30 days before a price change takes effect.
          You can cancel before it does.
        </li>
      </ul>

      <h2>Cancelling</h2>
      <p>
        You can cancel at any time from Manage subscription on your Profile,
        which opens Polar’s customer portal. You keep Premium until the end of
        the month you have paid for. We do not charge you again after that.
      </p>
      <p>
        Deleting your account does not cancel your subscription. Cancel first,
        then delete your account.
      </p>

      <h2>Refunds</h2>
      <p>
        If Premium is not right for you, email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> within 7 days
        of your first payment and we will refund it. After that, we do not
        refund the part of a month you have already paid for, but you can
        cancel at any time. This does not limit any rights you have under the
        law where you live.
      </p>

      <h2>Our property</h2>
      <p>
        The repchek name, logo, design and software belong to us or our
        licensors. These terms give you a personal right to use repchek. They do
        not give you ownership of any of it.
      </p>

      <h2>No guarantees</h2>
      <p>
        We work to keep repchek available and accurate, but it is provided as
        it is and as available. We do not promise that it will be uninterrupted,
        error free, or right for your needs.
      </p>

      <h2>Limits on our responsibility</h2>
      <p>
        To the extent the law allows, we are not responsible for injury, loss
        or damage that comes from using repchek or from relying on its counts
        and feedback, or for indirect or consequential loss. Nothing in these
        terms limits responsibility that cannot be limited by law.
      </p>

      <h2>Ending your use</h2>
      <p>
        You can stop using repchek at any time. You can delete your account from
        your Profile, or ask us to by emailing <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We
        may suspend or close an account that breaks these terms or puts the
        service or other people at risk.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms. If a change matters, we will update the date
        above and tell signed in users in the app or by email. If you keep using
        repchek after a change, you accept the new terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
