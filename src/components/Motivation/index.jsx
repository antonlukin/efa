import { useTranslation } from 'react-i18next';

import Lead from '../../components/Lead';

import DecorShirt from '../../images/decors/shirt.png';
import DecorRotation from '../../images/decors/rotation.png';

import './styles.scss';

const Motivation = function() {
  const { t } = useTranslation();

  return (
    <section className="motivation">
      <Lead className="motivation-start">
        <h2 data-aos="fade">{t('motivation.title')}</h2>
        <p data-aos="fade" dangerouslySetInnerHTML={{ __html: t('motivation.description')}} />
      </Lead>

      <ul data-aos="fade" className="motivation-list">
        <li>{t('motivation.list.0')}</li>
        <li>{t('motivation.list.1')}</li>
        <li>{t('motivation.list.2')}</li>
      </ul>

      <figure className="motivation-shirt">
        <img data-image="shirt" src={DecorShirt} alt="Motivation t-shirt" />
        <img data-image="rotation" src={DecorRotation} alt="Get it" />
      </figure>
    </section>
  );
}

export default Motivation;