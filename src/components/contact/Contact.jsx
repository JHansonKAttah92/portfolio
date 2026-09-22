import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_mdzq0k7", //Service ID
        "template_nepalt9", //Template ID
        form.current,
        "BwzEt7AZiC9WFiJNI", //Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          setStatus(`Failed to send: ${error.text}`);
        },
      );
  };

  return (
    <div id="contact">
      <span>Contact</span>
      <div className="contact-content">
        <h2>Let's work together</h2>
        <p>Have progect in mind or just want to say hi? My inbox is open.</p>
        <form name="form" ref={form} onSubmit={sendEmail} className="action">
          <input
            type="text"
            name="name"
            className="name"
            aria-label="name"
            placeholder="Your name"
            required
          />
          <input
            type="email"
            name="email"
            className="email"
            aria-label="email"
            placeholder="name@company.com"
            required
          />
          <textarea
            name="message"
            className="textarea"
            aria-label="message"
            placeholder="Tell me about your project"
            required
          ></textarea>
          <button type="submit" className="btn">Send message</button>
          {status && <p>{status}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
