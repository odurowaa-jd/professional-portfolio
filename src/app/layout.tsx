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
  title: 'Jessica Danquah | Economic Engineer & Full-Stack Developer',
  description: 'Architecting intelligent digital infrastructure to solve modern economic challenges. Explore my work in resource optimization and financial systems.',
  openGraph: {
    title: 'Jessica Danquah Portfolio',
    description: 'Bridging Economics and Technology through Full-Stack Engineering.',
    images: ['/portrait.jpg'], // This makes your portrait show up when you share the link
  },
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