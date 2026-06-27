import { useEffect } from 'react';
import { Outlet, useLocation, useNavigation } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';
import LoadingPage from './pages/LoadingPage';

const Root = () => {
  const { state } = useNavigation();
  const { pathname } = useLocation();

  // 🔹 State to control initial loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 🔹 Show loading for initial 3s, or during route loading
  if (state === 'loading') {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
