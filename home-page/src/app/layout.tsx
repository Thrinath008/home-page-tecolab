import './globals.css';
import { geistSans, geistMono } from '@/lib/fonts';

export const metadata = {
  title: 'Tecolab',
  description: 'Your platform to build and get discovered',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}