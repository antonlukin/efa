import { Fade } from 'react-awesome-reveal';

import './styles.scss';

const Summary = function() {
  return (
    <section className="summary">
      <Fade cascade fraction={0} triggerOnce={true}>
        <p>
          Our planet is a <a href="/">football field</a> on which <a href="/">we lose</a>.
          The rival destroys nature, pollutes the oceans, deprives us of the future.
        </p>

        <p>We created this enemy ourselves and we can defeat him.</p>
      </Fade>
    </section>
  );
}

export default Summary;