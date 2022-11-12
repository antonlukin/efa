import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import Header from '../components/Header';
import Summary from '../components/Summary';
import Motivation from '../components/Motivation';
import Opposing from '../components/Opposing';
import Team from '../components/Team';
import Divider from '../components/Divider';
import Footer from '../components/Footer';
import Particles from '../components/Particles';
import Gradients from '../components/Gradients';
import Cursor from '../components/Cursor';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = function() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.addEventListener('popstate', () => {
      navigate('/');
    });
  }, [navigate]);

  return (
    <ParallaxProvider>
      <Header />
      <Summary />
      <Motivation />
      <Opposing />
      <Team />
      <Divider />
      <Footer />
      <Particles />
      <Cursor />
      <Gradients isPage={false} />
    </ParallaxProvider>
  );
}

export default Home;