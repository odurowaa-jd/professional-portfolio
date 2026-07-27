import { Inter, Lora } from 'next/font/google';
import './globals.css';

// 1. Initialize our two signature fonts
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

const lora = Lora({ 
  subsets: ['latin'], 
  variable: '--font-lora',
  display: 'swap',
});

// 2. Set the metadata for Admissions Committees
export const metadata = {
  title: 'Your Name | Economic Engineer & Full-Stack Developer',
  description: 'Bridging the gap between economic theory and digital execution.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${lora.variable} bg-navy-deep text-slate-200 antialiased`}
      >
        {/* Everything inside children is what we build in page.tsx */}
        {children}
      </body>
    </html>
  );
}