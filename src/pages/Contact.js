export default function Contact() {
  return (
    <main className="contact">
      <h1>Let’s Improve Your Workday</h1>

      <p>
        Tell us a little about your organization and where work feels harder
        than it should. We’ll take it from there.
      </p>

      <form className="contact-form">
        <label>
          Your Name
          <input type="text" name="name" required />
        </label>

        <label>
          Organization
          <input type="text" name="organization" />
        </label>

        <label>
          Email
          <input type="email" name="email" required />
        </label>

        <label>
          What’s making the workday harder right now?
          <textarea name="message" rows="5" required />
        </label>

        <button type="submit">Start the Conversation</button>
      </form>
    </main>
  );
}
