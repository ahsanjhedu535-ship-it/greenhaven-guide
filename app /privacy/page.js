import Link from "next/link";
export const metadata = { title: "Privacy Policy | GreenHaven Guide" };
export default function Privacy() {
  return (
    <main className="text-page"> <Link href="/" className="back-link"> ← GreenHaven Guide </Link> <span className="eyebrow green">SITE INFORMATION</span> <h1>Privacy Policy</h1> <p> This starter policy explains the intended approach for GreenHaven Guide. Update it to reflect the services actually enabled on your live website. </p> <h2>Information you provide</h2> <p> If you contact us, information you submit may include your name, email address, and message. The current demo contact form does not transmit or store submissions. </p> <h2>Cookies and analytics</h2> <p> If analytics, advertising, or embedded services are added, those providers may use cookies or similar technologies. Disclose the tools you actually use and provide any notices required in your visitors’ locations. </p> <h2>Contact</h2> <p> Publish a monitored contact email before launch so visitors can submit privacy questions. </p> </main>
  );
}
