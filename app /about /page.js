import Link from "next/link";
export const metadata = { title: "About | GreenHaven Guide" };
export default function About() {
  return (
    <main className="text-page"> <Link href="/" className="back-link"> ← GreenHaven Guide </Link> <span className="eyebrow green">OUR STORY</span> <h1>Grow a little more green.</h1> <p> GreenHaven Guide helps curious beginners and everyday gardeners build confidence through practical, approachable gardening information. </p> <h2>Our approach</h2> <p> We believe gardening should feel welcoming, not overwhelming. Our guides focus on useful steps, thoughtful planning, and learning from the plants and conditions around you. </p> <h2>Keep learning</h2> <p> Plant care can vary by climate, species, and season. We encourage readers to check local growing advice and the specific needs of every plant. </p> </main>
  );
}
