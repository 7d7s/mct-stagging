// app/layout.tsx
import { LayoutProvider } from '../context/LayoutContext'; // Adjust path if necessary
import { Inter } from 'next/font/google';
import Head  from 'next/head';
const inter = Inter({ subsets: ['latin'] });
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}
