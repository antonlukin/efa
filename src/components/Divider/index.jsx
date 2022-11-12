import { useTranslation } from 'react-i18next';
import { Parallax } from 'react-scroll-parallax';

import './styles.scss';

const Divider = function() {
  const { t } = useTranslation();

  return (
    <div className="divider">
      <div className="divider-separator">
        <Parallax translateX={[-2, 2]}>
          <span>{t('divider.separator')}</span>
          <span>{t('divider.separator')}</span>
          <span>{t('divider.separator')}</span>
          <span>{t('divider.separator')}</span>
          <span>{t('divider.separator')}</span>
        </Parallax>
      </div>
    </div>
  );
}

export default Divider;