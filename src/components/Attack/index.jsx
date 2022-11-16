import { useState, useEffect, useRef, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Upper from '../Upper';
import Button from '../Button';

import { ReactComponent as IconChevron } from '../../images/icons/chevron.svg';

import transfer from '../../utils/transfer';
import smoothScroll from '../../utils/scroller';
import AppContext from '../../context';

import './styles.scss';

const Attack = function({skipped, opened, current, setCurrent}) {
  const [styles, setStyles] = useState({});
  const [strikes, setStrikes] = useState(0);
  const [switcher, setSwitcher] = useState('');

  const context = useContext(AppContext);
  const enemies = context.enemies;

  const figure = useRef();

  const navigate = useNavigate();
  const { t } = useTranslation();

  const nextWorkout = () => {
    const next = current + 1;

    setTimeout(() => {
      setStrikes(0);
      setCurrent(next);
    }, 500);

    figure.current.querySelector('img').removeAttribute('data-loaded');
    document.body.classList.add('is-loading');
  }

  const updateStrike = () => {
    const totalStrikes = enemies[current - 1];
    const currentStrike = strikes + 1;

    if (currentStrike > totalStrikes) {
      return nextWorkout();
    }

    figure.current.setAttribute('data-animate', 'shake');

    setTimeout(() => {
      figure.current.removeAttribute('data-animate');
    }, 500);

    setStrikes(currentStrike);
  }

  const goFinish = () => {
    transfer(() => navigate('/kit/'));
  }

  useEffect(() => {
    let list = 0;

    if (opened) {
      list = enemies[current - 1];
    }

    setStrikes(list);
  }, [current, opened, enemies]);

  useEffect(() => {
    const totalStrikes = enemies[current - 1];

    const getLabel = () => {
      let label = t(`attack.attack`);

      if (strikes >= totalStrikes) {
        label = t(`attack.next`);

        if (current >= enemies.length) {
          label = t(`attack.get`);
        }
      }

      return label;
    }

    let to = document.body.scrollHeight;

    if (opened || strikes < 1) {
      to = document.body;
    }

    smoothScroll(to);

    const label = getLabel();
    setSwitcher(label);

    setStyles({
      mesh: {
        filter: `drop-shadow(0 0 ${20 / totalStrikes * strikes}px #f00)`,
      },

      filled: {
        left: `-${(strikes / (totalStrikes)) * 100}%`
      }
    });
  }, [strikes, opened, current, enemies, t]);

  return (
    <div className="attack">
      {current && current <= enemies.length &&
        <>
          <header className="attack-header">
            <Upper />
          </header>

          <div className="attack-mesh">
            <figure ref={figure}>
              <img
                src={require(`../../images/meshes/${current}.png`)}
                alt={t(`fight.${current - 1}.title`)}
                width="307"
                height="429"
                style={styles.mesh}
                onLoad={(e) => e.target.dataset.loaded = 'loaded'}
              />
              <figcaption>{t(`attack.health`)}</figcaption>

              <strong>
                <span style={styles.filled}></span>
              </strong>
            </figure>
          </div>

          <div className="attack-texts">
            <h5>
              <strong>{current}</strong>
              <span>/ {enemies.length}</span>
            </h5>

            <h2>{t(`fight.${current - 1}.title`)}</h2>
            <div dangerouslySetInnerHTML={{__html: t(`fight.${current - 1}.description`)}} />

            {strikes > 0 &&
              <ul>
                {[...Array(strikes)].map((strike, i) =>
                  <li key={i} dangerouslySetInnerHTML={{__html: t(`fight.${current - 1}.strikes.${i}`)}} />
                )}
              </ul>
            }

            <figure>
              {(!skipped || current < enemies.length) &&
                <Button onClick={updateStrike}>{switcher}</Button>
              }

              {skipped &&
                <Button onClick={goFinish}>{t(`attack.kit`)} <IconChevron/></Button>
              }
            </figure>
          </div>
        </>
      }
    </div>
  );
}

export default Attack;