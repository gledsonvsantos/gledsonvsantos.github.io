import { LanguageProvider } from '@/contexts/LanguageContext';
import '../styles/globals.css';

export const metadata = {
  title: 'Gledson | Backend & Cloud Engineer',
  description: 'Desenvolvedor backend focado em AWS, sistemas distribuídos e performance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
