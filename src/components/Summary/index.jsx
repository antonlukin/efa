import { useTranslation } from 'react-i18next';

import './styles.scss';

const Summary = function() {
  const { t } = useTranslation();

  return (
    <section className="summary">
      <p data-aos="fade">{t('summary.start.0')}</p>
      <p data-aos="fade">{t('summary.start.1')}</p>
      <p data-aos="fade">{t('summary.start.2')}</p>
    </section>
  );
}

export default Summary;