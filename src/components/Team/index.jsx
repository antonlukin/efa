import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import Lead from '../../components/Lead';

import './styles.scss';

const Team = function() {
  const [standings, setStandings] = useState(null);
  const anchor = useRef();
  const { t } = useTranslation();

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
        return;
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

        <p data-aos="fade" dangerouslySetInnerHTML={{ __html: t('team.start.0')}} />
        <p data-aos="fade" dangerouslySetInnerHTML={{ __html: t('team.start.1')}} />
      </Lead>

      <hr className="team-anchor" ref={anchor} />

      {standings &&
        <>
          <h3 className="team-amount" data-aos="fade">
            <strong>{standings.length}</strong> <span dangerouslySetInnerHTML={{ __html: t('team.amount')}} />
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
              {standings.map((row, i) =>
                <tr key={i}>
                  <td>{i + 1}.</td>
                  <td>{row.name}</td>
                  <td>{row.number}</td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      }
    </section>
  );
}

export default Team;