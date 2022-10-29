import { Fade } from 'react-awesome-reveal';

import Lead from '../../components/Lead';

import DecorShirt from '../../images/decors/shirt.png';
import DecorRotation from '../../images/decors/rotation.png';

import './styles.scss';

const Motivation = function() {
  return (
    <section className="motivation">
      <Lead className="motivation-start">
        <h2>What to Do?</h2>
        <p>Only by acting together as a team we can defeat the rival!</p>
      </Lead>

      <Fade fraction={0.5} triggerOnce={true}>
        <ul className="motivation-list">
          <li><span>Get to know the enemy</span></li>
          <li>Learn how to beat it</li>
          <li>Get a uniform of the eco-team</li>
        </ul>
      </Fade>

      <figure className="motivation-shirt">
        <img data-image="shirt" src={DecorShirt} alt="Motivation t-shirt" />
        <img data-image="rotation" src={DecorRotation} alt="Get it" />
      </figure>
    </section>
  );
}

export default Motivation;