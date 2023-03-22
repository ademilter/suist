const siteName = "Suİst";
const title = `${siteName}`;
const description = "İstanbul barajlarının su seviyeleri";
const url = "https://suist.vercel.app";
const locale = "tr-TR";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName,
    locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: "@ademilter",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#f3f4f6",
  icons: {
    icon: "/icons-192.png",
    apple: "/icons-192.png",
  },
  manifest: `${url}/manifest.json`,
};
