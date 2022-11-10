import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AppContext from '../../context';
import transfer from '../../utils/transfer';

import 'swiper/scss';
import './styles.scss';

const Enemy = function({id, current}) {
  const classes = ['enemy'];

  if (id >= current) {
    classes.push('is-locked');
  }

  const context = useContext(AppContext);

  const navigate = useNavigate();

  const transferPage = () => {
    context.cursor = null;

    transfer(() => navigate(`/fight/${id + 1}`));
  }

  const mouseOver = () => {
    context.cursor = (id < current) ? 'is-open' : 'is-locked';
  }

  const mouseOut = () => {
    context.cursor = null;
  }

  return (
    <div className={classes.join(' ')} onMouseEnter={mouseOver} onMouseLeave={mouseOut} onClick={transferPage}>
      {id < current
        ? <img src={require(`../../images/cards/${id + 1}.png`)} alt="Front side of opened card" />
        : <img src={require(`../../images/locked/${id + 1}.png`)} alt="Front side of locked the card" />
      }
    </div>
  );
}

export default Enemy;