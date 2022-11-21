import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import Lead from '../../components/Lead';
import Button from '../../components/Button';

import './styles.scss';

const Team = function() {
  const [standings, setStandings] = useState(null);
  const [offset, setOffset] = useState(0);

  const anchor = useRef();
  const { t } = useTranslation();

  const limit = 8;

  const loadMore = (e) => {
    const count = offset + limit;

    setOffset(count);

    anchor.current.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const getStandings = async () => {
      const answer = await fetch('/share/standings/', options);
      const result = await answer.json();

      if (!result.success || !result.data) {
        return undefined;
      }

      setStandings(result.data);

      if (document.location.hash === '#standings') {
        anchor.current.scrollIntoView({ behavior: 'smooth' });
      }
    }

    getStandings();
  }, []);

  return (
    <section className="team">
      <Lead className="team-start">
        <h2 data-aos="fade">{t('team.title')}</h2>

        <p data-aos="fade">{t('team.start.0')}</p>
        <p data-aos="fade">{t('team.start.1')}</p>
      </Lead>

      <hr className="team-anchor" ref={anchor} />

      {standings &&
        <>
          <h3 className="team-amount" data-aos="fade">
            <strong>{standings.length}</strong> <span>{t('team.amount')}</span>
          </h3>

          <table className="team-results">
            <thead>
              <tr>
                <td>{t('team.results.line')}</td>
                <td>{t('team.results.name')}</td>
                <td>{t('team.results.number')}</td>
              </tr>
            </thead>

            <tbody>
              {standings.slice(offset, offset + limit).map((row, i) =>
                <tr key={i}>
                  <td>{offset + i + 1}.</td>
                  <td>{row.name}</td>
                  <td>{row.number}</td>
                </tr>
              )}

              <tr>
                <td colSpan={3}></td>
              </tr>
            </tbody>
          </table>


          {offset + limit < standings.length &&
            <div className="team-button">
              <Button onClick={loadMore}>See more</Button>
            </div>
          }
        </>
      }
    </section>
  );
}

export default Team;