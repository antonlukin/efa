import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AppContext from '../../context';
import transfer from '../../utils/transfer';

import 'swiper/scss';
import './styles.scss';

const Enemy = function({id, current}) {
  const navigate = useNavigate();
  const context = useContext(AppContext);

  const status = (id < current) ? 'is-open' : 'is-locked';

  useEffect(() => {
    context.cursor = null;
  }, [context])

  const transferPage = () => {
    transfer(() => navigate(`/fight/${id + 1}/`));
  }

  const mouseOver = () => {
    context.cursor = status;
  }

  const mouseOut = () => {
    context.cursor = null;
  }

  const classes = ['enemy'];
  classes.push(status);

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