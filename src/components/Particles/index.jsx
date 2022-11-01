import { useEffect } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

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
  useEffect(() => {
    const ball = document.querySelector('[data-particle="ball"]');
    const ballTop = ball.offsetTop;
    const ballLeft = ball.offsetLeft;

    const rotateBall = () => {
      const delta = Math.round(window.scrollY / window.screen.height * 100);

      ball.style.transform = `rotate(${delta * 1.5}deg)`;

      // if (ball.offsetTop < window.screen.height) {
      //   ball.style.top = ballTop + delta * 4 + 'px';
      //   ball.style.left = ballLeft + delta * 4 + 'px';
      // }


      // ball.style.left = `rotate(${y}deg)`;
    }

    // window.addEventListener('scroll', rotateBall);

    return () => {
      window.removeEventListener('scroll', rotateBall);
    }
  });

  return (
    <div className="particles">
      <ParallaxProvider>
        <img data-particle="ball" src={ParticleBall} alt="Particle ball" />
        <img data-particle="tube" src={ParticleTube} alt="Particle tube" />
        <img data-particle="wave" src={ParticleWave} alt="Particle wave" />
        <img data-particle="can" src={ParticleCan} alt="Particle can" />
        <img data-particle="bucket" src={ParticleBucket} alt="Particle bucket" />
        <img data-particle="spoon" src={ParticleSpoon} alt="Particle spoon" />
        <img data-particle="fork" src={ParticleFork} alt="Particle fork" />
        <img data-particle="splash" src={ParticleSplash} alt="Particle splash" />
        <img data-particle="unsplash" src={ParticleSplash} alt="Particle unsplash" />
        <img data-particle="wash" src={ParticleWash} alt="Wash wasg" />
        <img data-particle="paper" src={ParticlePaper} alt="Particle paper" />
      </ParallaxProvider>
    </div>
  );
}

export default Paritcles;