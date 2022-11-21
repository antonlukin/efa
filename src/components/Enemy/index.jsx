import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import transfer from '../../utils/transfer';

import './styles.scss';
import './cursor.scss';

const Enemy = function({id, current}) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const transferEnemy = () => {
    transfer(() => navigate(`/fight/${id + 1}/`));
  }

  const opened = (id < current);

  const classes = ['enemy'];
  classes.push(opened ? 'is-opened' : 'is-locked');

  return (
    <div className={classes.join(' ')} onClick={opened ? transferEnemy : null}>
      <h4>{t(`fight.${id}.title`)}</h4>

      {id < current
        ? <img className="test" src={require(`../../images/cards/${id + 1}.png`)} alt="Front side of opened card" />
        : <img src={require(`../../images/locked/${id + 1}.png`)} alt="Front side of locked the card" />
      }
    </div>
  );
}

export default Enemy;