import { useTranslation } from 'react-i18next';

import './styles.scss';

const Summary = function() {
  const { t } = useTranslation();

  return (
    <section className="summary">
      <p data-aos="fade" dangerouslySetInnerHTML={{ __html: t('summary.start.0')}} />
      <p data-aos="fade" dangerouslySetInnerHTML={{ __html: t('summary.start.1')}} />
      <p data-aos="fade" dangerouslySetInnerHTML={{ __html: t('summary.start.2')}} />
    </section>
  );
}

export default Summary;