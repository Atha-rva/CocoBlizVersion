import { RouterProvider, useRouter } from '@/components/Router';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { CursorGlow } from '@/components/CursorGlow';
import { PageTransition } from '@/components/PageTransition';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Products } from '@/pages/Products';
import { Contact } from '@/pages/Contact';

function CurrentPage() {
  const { path } = useRouter();

  const renderPage = () => {
    switch (path) {
      case '/':
        return <Home />;
      case '/about':
        return <About />;
      case '/products':
        return <Products />;
      case '/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <CursorGlow />
      <Header />
      <main className="flex-1">
        <PageTransition key={path}>{renderPage()}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <RouterProvider>
      <ScrollToTop />
      <CurrentPage />
    </RouterProvider>
  );
}

export default App;
