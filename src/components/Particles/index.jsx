import { Parallax } from 'react-scroll-parallax';

import ParticleCan from '../../images/particles/can.png';
import ParticleTube from '../../images/particles/tube.png';
import ParticleWave from '../../images/particles/wave.png';
import ParticleBall from '../../images/particles/ball.png';
import ParticleEarth from '../../images/particles/earth.png';
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
      <Parallax data-particle="ball">
        <img
          src={ParticleBall}
          alt="Particle ball"
          data-loaded="hidden"
          onLoad={(e) => e.target.dataset.loaded = 'visible'}
          />
      </Parallax>

      <Parallax data-particle="tube" translateY={[20, -80]}>
        <img
          src={ParticleTube}
          alt="Particle tube"
          data-loaded="hidden"
          onLoad={(e) => e.target.dataset.loaded = 'visible'}
          />
      </Parallax>

      <Parallax data-particle="wave" translateY={[0, 50]}>
        <img
          src={ParticleWave}
          alt="Particle wave"
          data-loaded="hidden"
          onLoad={(e) => e.target.dataset.loaded = 'visible'}
          />
      </Parallax>

      <Parallax data-particle="can">
        <img
          src={ParticleCan}
          alt="Particle can"
          data-loaded="hidden"
          onLoad={(e) => e.target.dataset.loaded = 'visible'}
          />
      </Parallax>

      <Parallax data-particle="bucket" translateY={[0, 50]}>
        <img
          src={ParticleBucket}
          alt="Particle bucket"
          data-loaded="hidden"
          onLoad={(e) => e.target.dataset.loaded = 'visible'}
          />
      </Parallax>

      <Parallax data-particle="spoon" translateY={[-40, 80]}>
        <img
          src={ParticleSpoon}
          alt="Particle spoon"
          data-loaded="hidden"
          onLoad={(e) => e.target.dataset.loaded = 'visible'}
          />
      </Parallax>

      <Parallax data-particle="fork" translateY={[80, -10]}>
        <img
          src={ParticleFork}
          alt="Particle fork"
          data-loaded="hidden"
          onLoad={(e) => e.target.dataset.loaded = 'visible'}
          />
      </Parallax>

      <Parallax data-particle="earth" translateY={[-20, 80]}>
        <img
          src={ParticleEarth}
          alt="Particle earth"
          data-loaded="hidden"
          onLoad={(e) => e.target.dataset.loaded = 'visible'}
          />
      </Parallax>

      <Parallax data-particle="splash">
        <img
          src={ParticleSplash}
          alt="Particle splash"
          data-loaded="hidden"
          onLoad={(e) => e.target.dataset.loaded = 'visible'}
          />
      </Parallax>

      <Parallax data-particle="unsplash">
        <img
          src={ParticleSplash}
          alt="Particle unsplash"
          data-loaded="hidden"
          onLoad={(e) => e.target.dataset.loaded = 'visible'}
          />
      </Parallax>

      <Parallax data-particle="wash" translateY={[-20, 80]}>
        <img
          src={ParticleWash}
          alt="Particle Wash"
          data-loaded="hidden"
          onLoad={(e) => e.target.dataset.loaded = 'visible'}
          />
      </Parallax>

      <Parallax data-particle="paper" translateY={[-80, 20]}>
        <img
          src={ParticlePaper}
          alt="Particle paper"
          data-loaded="hidden"
          onLoad={(e) => e.target.dataset.loaded = 'visible'}
          />
      </Parallax>

      <Parallax data-particle="sphere">
        <img
          src={ParticleBall}
          alt="Particle sphere"
          data-loaded="hidden"
          onLoad={(e) => e.target.dataset.loaded = 'visible'}
          />
      </Parallax>
    </div>
  );
}

export default Paritcles;