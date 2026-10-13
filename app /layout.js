import "./globals.css";
export const metadata = {
  title: "GreenHaven Guide | Grow a Little More Green",
  description:
    "Friendly, practical gardening guides for healthier plants, beautiful spaces, and greener living.",
  keywords: [
    "gardening tips",
    "plant care",
    "vegetable gardening",
    "indoor plants",
    "garden design",
  ],
  openGraph: {
    title: "GreenHaven Guide",
    description: "Grow a little more green.",
    type: "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en"> <body>{children}</body> </html>
  );
}
