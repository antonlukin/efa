import { useState, useEffect, useRef, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import Upper from '../Upper';
import Button from '../Button';

import smoothScroll from '../../utils/scroller';
import AppContext from '../../context';

import './styles.scss';

const Attack = function({opened, current, setCurrent}) {
  const [styles, setStyles] = useState({});
  const [strikes, setStrikes] = useState(0);
  const [switcher, setSwitcher] = useState('');

  const context = useContext(AppContext);
  const enemies = context.enemies;

  const figure = useRef();
  const { t } = useTranslation();

  const nextWorkout = () => {
    document.body.classList.add('is-loading');

    const next = current + 1;

    setTimeout(() => { setCurrent(next) }, 500);
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
      let label = 'Attack';

      if (strikes >= totalStrikes) {
        label = 'Next player';

        if (current >= enemies.length) {
          label = 'Get your uniform';
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
  }, [strikes, opened, current, enemies]);

  return (
    <div className="attack">
      {current &&
        <>
          <header className="attack-header">
            <Upper label={true} />
          </header>

          <div className="attack-mesh">
            <figure ref={figure}>
              <img
                src={require(`../../images/meshes/${current}.png`)}
                alt={t(`attack.${current - 1}.title`)}
                width="307"
                height="429"
                style={styles.mesh}
              />
              <figcaption>Health</figcaption>

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

            <h2>{t(`attack.${current - 1}.title`)}</h2>
            <div dangerouslySetInnerHTML={ { __html: t(`attack.${current - 1}.description`) } } />

            {strikes > 0 &&
              <ul>
                {[...Array(strikes)].map((strike, i) =>
                  <li key={i}>{t(`attack.${current - 1}.strikes.${i}`)}</li>
                )}
              </ul>
            }

            <Button onClick={updateStrike}>{switcher}</Button>
          </div>
        </>
      }
    </div>
  );
}

export default Attack;