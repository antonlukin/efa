import { useTranslation } from 'react-i18next';
import Fade from '@successtar/react-reveal/Fade';

import './styles.scss';

const Summary = function() {
  const { t } = useTranslation();

  return (
    <section className="summary">
      <Fade>
        <p dangerouslySetInnerHTML={{ __html: t('summary.start.0')}} />
        <p dangerouslySetInnerHTML={{ __html: t('summary.start.1')}} />
      </Fade>
    </section>
  );
}

export default Summary;