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

  return (
    <div className="upper">
      <a className="upper-logo" href="/" onClick={transferPage}>
          {label &&
            <span>EFA Championship by</span>
          }
          <ImageLogo />
      </a>

      <div className="upper-lang" data-lang={i18n.language}>
        <button onClick={() => changeLanguage('en')}>Eng</button>
        <span></span>
        <button onClick={() => changeLanguage('es')}>Esp</button>
      </div>
    </div>
  );
}

export default Upper;