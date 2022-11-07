import { useTranslation } from 'react-i18next';
import Lead from '../../components/Lead';

import './styles.scss';

const Team = function() {
  const { t } = useTranslation();

  return (
    <section className="team">
      <Lead className="team-start">
        <h2>{t('team.title')}</h2>

        <p dangerouslySetInnerHTML={{ __html: t('team.start.0')}} />
        <p dangerouslySetInnerHTML={{ __html: t('team.start.1')}} />
      </Lead>

      <h3 className="team-amount">
        <strong>1246</strong> <span dangerouslySetInnerHTML={{ __html: t('team.amount')}} />
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
          <tr>
            <td>1.</td>
            <td>Ronaldo</td>
            <td>17</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Ivan</td>
            <td>24</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>George</td>
            <td>7</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>George</td>
            <td>7</td>
          </tr>
          <tr>
            <td>6.</td>
            <td>George</td>
            <td>7</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Team;