import { ReactNode } from 'react';

// Components
import Header from '../Header';
import Footer from '../Footer';

interface LayoutProp {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProp) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
