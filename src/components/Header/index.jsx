import { useTranslation } from 'react-i18next';
import { Parallax } from 'react-scroll-parallax';

import Upper from '../Upper';

import DecorAdult from '../../images/decors/adult.png';
import DecorChild from '../../images/decors/child.png';

import './styles.scss';

const Header = function() {
  const { t } = useTranslation();

  return (
    <div className="header">
      <div className="header-upper">
        <Upper back={false} />
      </div>

      <h1 className="header-title">
        <strong>EFA World Cup </strong>
        <span>Eco-friendly activities contest</span>
      </h1>

      <div className="header-mesh">
        <img
          src={DecorAdult}
          alt="Mesh adult"
          width="887"
          height="484"
          data-image="adult"
          data-loaded="hidden"
          onLoad={(e) => e.target.dataset.loaded = 'visible'}
        />

        <img
          src={DecorChild}
          alt="Mesh child"
          width="490"
          height="383"
          data-image="child"
          data-loaded="hidden"
          onLoad={(e) => e.target.dataset.loaded = 'visible'}
        />
      </div>

      <div className="header-separator">
        <Parallax translateX={[-2, 2]}>
          <span>{t('header.slogan')}</span>
          <span>{t('header.slogan')}</span>
          <span>{t('header.slogan')}</span>
          <span>{t('header.slogan')}</span>
          <span>{t('header.slogan')}</span>
        </Parallax>
      </div>
    </div>
  );
}

export default Header;