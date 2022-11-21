import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from '../Button';
import { ReactComponent as ImageLogo } from '../../images/logo.svg';
import { ReactComponent as IconChevron } from '../../images/icons/chevron.svg';

import transfer from '../../utils/transfer';

import './styles.scss';

const Upper = function({back = 'text'}) {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const transferHome = (e) => {
    e.preventDefault();

    transfer(() => navigate('/'));
  }

  const changeLanguage = (language) => {
    document.body.dataset.language = language;
    transfer(() => i18n.changeLanguage(language));
  };

  return (
    <div className="upper">
      {(back === 'logo') &&
        <a className="upper-logo" href="/" onClick={transferHome}>
            <ImageLogo />
        </a>
      }

      {(back === 'text') &&
        <div className="upper-text">
          <Button onClick={transferHome}><IconChevron />{t(`upper.home`)}</Button>
        </div>
      }

      {(back === 'chevron') &&
        <div className="upper-chevron">
          <Button onClick={transferHome}><IconChevron /></Button>
        </div>
      }

      <div className="upper-lang">
        <button data-current={i18n.language === 'en' ? 'true': null} onClick={() => changeLanguage('en')}>En</button>
        <span></span>
        <button data-current={i18n.language === 'es' ? 'true': null} onClick={() => changeLanguage('es')}>Es</button>
      </div>
    </div>
  );
}

export default Upper;