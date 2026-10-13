import Link from "next/link";
export const metadata = { title: "Disclaimer | GreenHaven Guide" };
export default function Disclaimer() {
  return (
    <main className="text-page"> <Link href="/" className="back-link"> ← GreenHaven Guide </Link> <span className="eyebrow green">PLEASE NOTE</span> <h1>Gardening Disclaimer</h1> <p> GreenHaven Guide provides general educational information. It is not a substitute for local horticultural advice or professional assessment of plant, soil, pest, or property issues. </p> <h2>Growing conditions differ</h2> <p> Results depend on plant variety, climate, season, soil, light, and care. Verify product labels and local recommendations before applying fertilizers, pest treatments, or other garden products. </p> <h2>Accuracy</h2> <p> We aim to keep guides useful and clear, but cannot guarantee that every detail is complete or suitable for every situation. Use your own judgment and consult qualified local sources when needed. </p> </main>
  );
}
