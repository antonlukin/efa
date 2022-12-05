import { useTranslation } from 'react-i18next';

import Sharing from '../Sharing';

import './styles.scss';

const Footer = function() {
  const { t } = useTranslation();

  return (
    <footer className="footer" data-aos="fade">
      <div className="footer-description">
        <h4>{t('footer.made')} <a href="https://tigersoda.agency/" target="_blank" rel="noreferrer">Tiger Soda</a></h4>

        <p data-aos="fade">{t('footer.description.0')}</p>
        <p data-aos="fade">{t('footer.description.1')}</p>
      </div>

      <div className="footer-social">
        <p data-aos="fade">{t('footer.social')}</p>
        <Sharing />

        <p>
          <a href="/sources/" target="_blank">{t('footer.sources')}</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;