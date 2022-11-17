import { useTranslation } from 'react-i18next';

import Upper from '../Upper';
import Grid from '../Grid';

import './styles.scss';

const Final = function({share}) {
  const { t } = useTranslation();

  return (
    <>
      {share &&
        <div className="final">
          <header className="final-header">
            <Upper />
          </header>

          <section className="final-title">
            <h2>{t('final.title')}</h2>
            <p>{t('final.description')}</p>
          </section>

          <section className="final-grid">
            <Grid share={share} />
          </section>
        </div>
      }
    </>
  );
}

export default Final;