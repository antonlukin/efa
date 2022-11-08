import { useNavigate } from 'react-router-dom';

import Upper from '../Upper';
import Grid from '../Grid';
import Button from '../Button';

import transfer from '../../utils/transfer';

import './styles.scss';

const Final = function() {
  const navigate = useNavigate();

  const transferPage = (e) => {
    e.preventDefault();

    transfer(() => navigate('/'));
  }

  return (
    <div className="final">
      <header className="final-header">
        <Upper label={true} />
      </header>

      <section className="final-grid">
        <Grid />
      </section>

      <section className="final-button">
        <Button onClick={transferPage}>Return to main page</Button>
      </section>
    </div>
  );
}

export default Final;