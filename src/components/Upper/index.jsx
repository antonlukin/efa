import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from '../Button';
import { ReactComponent as ImageLogo } from '../../images/logo.svg';
import { ReactComponent as IconChevron } from '../../images/icons/chevron.svg';

import transfer from '../../utils/transfer';

import './styles.scss';

const Upper = function({back = true}) {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const transferPage = () => {
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
      {!back &&
        <a className="upper-logo" href="/" onClick={transferPage}>
            <ImageLogo />
        </a>
      }

      {back &&
        <div className="upper-back">
          <Button onClick={transferPage}><IconChevron />main page</Button>
        </div>
      }

      <div className="upper-lang">
        <button data-current={language === 'en' ? 'true': null} onClick={() => changeLanguage('en')}>En</button>
        <span></span>
        <button data-current={language === 'es' ? 'true': null} onClick={() => changeLanguage('es')}>Es</button>
      </div>
    </div>
  );
}

export default Upper;