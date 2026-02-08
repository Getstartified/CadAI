import FeatureCarousel from './components/home/FeatureCarousel';
import Hero from './components/home/Hero';
import Layout from './components/layout/Layout';
import EmailModal from './components/ui/EmailModal';
import { ModalProvider } from './context/ModalContext';
import './index.css';

function App() {
  return (
    <ModalProvider>
      <Layout>
        <Hero />
        <FeatureCarousel />
      </Layout>
      <EmailModal />
    </ModalProvider>
  );
}

export default App;
