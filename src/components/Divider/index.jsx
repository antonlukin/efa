import { useTranslation } from 'react-i18next';

import './styles.scss';

const Divider = function() {
  const { t } = useTranslation();

  return (
    <div className="divider">
      <div className="divider-separator">
        <span dangerouslySetInnerHTML={{ __html: t('divider.separator')}} />
        <span dangerouslySetInnerHTML={{ __html: t('divider.separator')}} />
        <span dangerouslySetInnerHTML={{ __html: t('divider.separator')}} />
        <span dangerouslySetInnerHTML={{ __html: t('divider.separator')}} />
        <span dangerouslySetInnerHTML={{ __html: t('divider.separator')}} />
      </div>
    </div>
  );
}

export default Divider;