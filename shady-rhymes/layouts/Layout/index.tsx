import { ReactNode } from 'react';

// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
