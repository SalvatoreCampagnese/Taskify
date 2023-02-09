import Head from "next/head";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head>
        <title>Taskify</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
