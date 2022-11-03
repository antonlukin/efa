import Header from '../components/Header';
import Summary from '../components/Summary';
import Motivation from '../components/Motivation';
import Opposing from '../components/Opposing';
import Team from '../components/Team';
import Divider from '../components/Divider';
import Footer from '../components/Footer';
import Particles from '../components/Particles';
import Gradients from '../components/Gradients';

const Home = function() {
  return (
    <>
      <Header />
      <Summary />
      <Motivation />
      <Opposing />
      <Team />
      <Divider />
      <Footer />
      <Particles />
      <Gradients isPage={false} />
    </>
  );
}

export default Home;