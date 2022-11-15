import Upper from '../Upper';
import Grid from '../Grid';
import Button from '../Button';

import './styles.scss';

const Final = function() {
  return (
    <div className="final">
      <header className="final-header">
        <Upper />
      </header>

      <section className="final-title">
        <h2>Congratulations!</h2>
        <p>You beat the opponent and now you are a member of the eco-friendly team.</p>
      </section>

      <section className="final-grid">
        <Grid />
      </section>

      <section className="final-button">
        <Button>Return to main page</Button>
      </section>
    </div>
  );
}

export default Final;