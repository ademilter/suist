import { Head, Html, Main, NextScript } from "next/document";

export default function Document({ locale }: { locale: string }) {
  return (
    <Html lang={locale}>
      <Head />
      <body className="scroll-smooth bg-gray-100 text-gray-900 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
