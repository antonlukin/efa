import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ReactComponent as ImageLogo } from '../../images/logo.svg';
import transfer from '../../utils/transfer';

import './styles.scss';

const Upper = function({label}) {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const transferPage = (e) => {
    e.preventDefault();

    transfer(() => navigate('/'));
  }

  const changeLanguage = (lng) => {
    transfer(() => i18n.changeLanguage(lng));
  };

  let language = 'en';

  if (i18n.language === 'es') {
    language = 'es';
  }

  return (
    <div className="upper">
      <a className="upper-logo" href="/" onClick={transferPage}>
          {label &&
            <span>EFA Championship by</span>
          }
          <ImageLogo />
      </a>

      <div className="upper-lang">
        <button data-current={language === 'en' ? 'true': null} onClick={() => changeLanguage('en')}>En</button>
        <span></span>
        <button data-current={language === 'es' ? 'true': null} onClick={() => changeLanguage('es')}>Es</button>
      </div>
    </div>
  );
}

export default Upper;