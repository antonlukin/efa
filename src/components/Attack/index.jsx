import { useState, useEffect, useRef } from 'react';

import Upper from '../Upper';
import Button from '../Button';
import smoothScroll from '../../utils/scroller';

import AttackData from '../../data/attack';

import './styles.scss';

const Attack = function({current, setCurrent}) {
  const slidesAmount = 11;

  const [strikes, setStrikes] = useState([]);
  const [styles, setStyles] = useState({});
  const [switcher, setSwitcher] = useState('');
  const [workout, setWorkout] = useState(null);

  const figure = useRef();

  useEffect(() => {
    const needle = AttackData.find(o => o.id === current);
    setWorkout(needle);

    setStrikes([]);
    setStyles({});

    setSwitcher('Attack');
  }, [current]);

  useEffect(() => {
    let to = document.body;

    if (strikes.length > 0) {
      to = document.body.scrollHeight;
    }

    smoothScroll(to);
  }, [strikes]);

  const nextWorkout = () => {
    const next = current + 1;

    document.body.classList.add('is-loading');

    setTimeout(() => {
      document.body.classList.remove('is-loading');
      setCurrent(next);
    }, 500);

    window.localStorage.setItem('enemy', next);
  }

  const updateStrike = (e) => {
    e.preventDefault();

    const totalStrikes = workout.strikes.length;
    const currentStrike = strikes.length + 1;

    if (currentStrike > totalStrikes) {
      return nextWorkout();
    }

    figure.current.setAttribute('data-animate', 'shake');

    setTimeout(() => {
      figure.current.removeAttribute('data-animate');
    }, 500);

    if (currentStrike >= totalStrikes) {
      let label = 'Next player';

      if (current >= AttackData.length) {
        label = 'Get your uniform';
      }

      setSwitcher(label);
    }

    setStrikes(workout.strikes.slice(0, currentStrike));

    setStyles({
      mesh: {
        filter: `drop-shadow(0 0 ${20 / totalStrikes * currentStrike}px #f00)`,
      },

      filled: {
        right: `${100 - (currentStrike / (totalStrikes)) * 100}%`
      }
    });
  }

  return (
    <div className="attack">
      {workout &&
        <>
          <header className="attack-header">
            <Upper label={true} />
          </header>

          <div className="attack-mesh">
            <figure ref={figure}>
              <img
                src={require(`../../images/meshes/${workout.id}.png`)}
                alt={workout.title}
                width="307"
                height="429"
                style={styles.mesh}
              />
              <figcaption>Damage</figcaption>

              <strong>
                <span style={styles.filled}></span>
              </strong>
            </figure>
          </div>

          <div className="attack-texts">
            <h5>
              <strong>{current}</strong>
              <span>/ {slidesAmount}</span>
            </h5>

            <h2>{workout.title}</h2>

            <div dangerouslySetInnerHTML={ { __html: workout.description } } />

            {strikes &&
              <ul>
                {strikes.map((strike, i) =>
                  <li key={i}>{strike}</li>
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