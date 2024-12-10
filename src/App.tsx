import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Pricing } from './pages/Pricing';
import { Customers } from './pages/Customers';
import { Blog } from './pages/Blog';
import { About } from './pages/About';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export { App };