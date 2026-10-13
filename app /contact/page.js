"use client";
import Link from "next/link";
import { useState } from "react";
export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <main className="text-page"> <Link href="/" className="back-link"> ← GreenHaven Guide </Link> <span className="eyebrow green">GET IN TOUCH</span> <h1>Contact GreenHaven Guide</h1> <p> Have a gardening question, correction, or idea for a future guide? Send us a note below. </p> {sent ? ( <div className="article-note"> <b>Your message is ready.</b> <p> This demo form does not send email yet. Connect a form service or email API before publishing to receive messages. </p> <button onClick={() => setSent(false)} className="btn primary"> Write another message </button> </div> ) : ( <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }} > <label> Your name <input required placeholder="Name" /> </label> <label> Email address <input required type="email" placeholder="you@example.com" /> </label> <label> Message <textarea required rows="6" placeholder="How can we help?" /> </label> <button className="btn primary">Prepare message →</button> <small> Note: this starter form is front-end only and does not send or store messages. </small> </form> )} </main>
  );
}
