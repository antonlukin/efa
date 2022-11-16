import Upper from '../Upper';
import Grid from '../Grid';

import './styles.scss';

const Final = function({share}) {
  return (
    <>
      {share &&
        <div className="final">
          <header className="final-header">
            <Upper />
          </header>

          <section className="final-title">
            <h2>Congratulations!</h2>
            <p>You beat the opponent and now you are a member of the eco-friendly team.</p>
          </section>

          <section className="final-grid">
            <Grid share={share} />
          </section>
        </div>
      }
    </>
  );
}

export default Final;