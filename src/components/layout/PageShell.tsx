import Footer from './Footer';
import Header from './Header';
import type { ReactNode } from 'react';

const PageShell = ({
  children,
  mainClassName,
}: {
  children: ReactNode;
  mainClassName?: string;
}) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className={mainClassName}>{children}</main>
      <Footer />
    </div>
  );
};

export default PageShell;
