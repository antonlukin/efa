import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import ParticleCan from '../../images/particles/can.png';
import ParticleTube from '../../images/particles/tube.png';
import ParticleWave from '../../images/particles/wave.png';
import ParticleBall from '../../images/particles/ball.png';
import ParticleFork from '../../images/particles/fork.png';
import ParticleSpoon from '../../images/particles/spoon.png';
import ParticleBucket from '../../images/particles/bucket.png';
import ParticleSplash from '../../images/particles/splash.png';
import ParticleWash from '../../images/particles/wash.png';
import ParticlePaper from '../../images/particles/paper.png';

import './styles.scss';

const Paritcles = function() {
  return (
    <div className="particles">
      <ParallaxProvider>
        <Parallax data-particle="ball" rotate={[0, 360]}>
          <img src={ParticleBall} alt="Particle ball" />
        </Parallax>

        <Parallax data-particle="tube" translateY={[20, -80]}>
          <img src={ParticleTube} alt="Particle tube" />
        </Parallax>

        <Parallax data-particle="wave" translateY={[0, 50]}>
          <img src={ParticleWave} alt="Particle wave" />
        </Parallax>

        <Parallax data-particle="can">
          <img src={ParticleCan} alt="Particle can" />
        </Parallax>

        <Parallax data-particle="bucket" translateY={[0, 50]}>
          <img src={ParticleBucket} alt="Particle bucket" />
        </Parallax>

        <Parallax data-particle="spoon" translateY={[-80, 80]}>
          <img src={ParticleSpoon} alt="Particle spoon" />
        </Parallax>

        <Parallax data-particle="fork" translateY={[80, -10]}>
          <img src={ParticleFork} alt="Particle fork" />
        </Parallax>

        <Parallax data-particle="splash">
          <img src={ParticleSplash} alt="Particle splash" />
        </Parallax>

        <Parallax data-particle="unsplash">
          <img src={ParticleSplash} alt="Particle unsplash" />
        </Parallax>

        <Parallax data-particle="wash" translateY={[-20, 80]}>
          <img src={ParticleWash} alt="Particle Wash" />
        </Parallax>

        <Parallax data-particle="paper" translateY={[-80, 20]}>
          <img src={ParticlePaper} alt="Particle paper" />
        </Parallax>

        <Parallax data-particle="sphere">
          <img src={ParticleBall} alt="Particle sphere" />
        </Parallax>
      </ParallaxProvider>
    </div>
  );
}

export default Paritcles;