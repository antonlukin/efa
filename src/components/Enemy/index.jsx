import { useNavigate } from 'react-router-dom';

import transfer from '../../utils/transfer';

import 'swiper/scss';
import './styles.scss';

const Enemy = function({id, current, slidesAmount}) {
  const classes = ['enemy'];

  if (id >= current) {
    classes.push('is-locked');
  }

  const navigate = useNavigate();

  const transferPage = (enemy) => {
    transfer(() => navigate(`/fight/${enemy}`));
  }

  return (
    <div className={classes.join(' ')}>
      <div className="enemy-front">
        {id < current
          ? <img src={require(`../../images/cards/${id + 1}.png`)} alt="Front side of opened card" />
          : <img src={require(`../../images/locked/${id + 1}.png`)} alt="Front side of locked the card" />
        }
      </div>

      <div className="enemy-back">
        <img src={require(`../../images/backs/${id + 1}.png`)} alt="Back of the card" />

        <figure>
          <h5>
            <strong>{id + 1}</strong>
            <span>/ {slidesAmount}</span>
          </h5>

          <p>This player plays both on the earth's surface, and in water, and in the air. Playing against him is not easy, but necessary, because in the future plastic waste will affect the health of not only the planet, but also people.</p>
        </figure>

        <button onClick={() => transferPage(id + 1)}>open</button>
      </div>
    </div>
  );
}

export default Enemy;