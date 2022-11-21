import { useTranslation } from 'react-i18next';

import Upper from '../Upper';
import './styles.scss';

const Annotations = function({share}) {
  const { t } = useTranslation();

  return (
    <>
      <div className="annotations">
        <header className="annotations-header">
          <Upper />
        </header>

        <section className="annotations-content">
          <h2>{t('annotations.title')}</h2>

          <ol>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.euronews.com/green/2021/04/14/eu-is-the-world-s-second-biggest-importer-of-tropical-deforestation-says-wwf">EU is the world's second biggest importer of tropical deforestation, says WWF</a>
              {' '}— (Euronews)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://www.elperiodico.com/es/verde-y-azul/20220629/30-000-espanoles-mueren-ano-13964895">30.000 españoles mueren al año por contaminación del aire, la mayoría por partículas PM2.5</a>
              {' '}— (elPeriodico)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://edition.cnn.com/2019/06/11/health/microplastics-ingestion-wwf-study-scn-intl/index.html">You could be swallowing a credit card’s weight in plastic every week</a>
              {' '}— (CNN Health)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://www.euronews.com/2022/05/27/spain-s-donana-national-park-under-threat-as-groundwater-pumping-continues">Spain's Doñana National Park under threat as groundwater pumping continues</a>
              {' '}— (Euronews)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://www.theolivepress.es/spain-news/2021/08/07/why-the-mar-menor-in-spain-has-become-europes-saddest-example-of-environmental-vandalism/">Why the mar menor in spain has become europes saddest example of environmental vandalism</a>
              {' '}— (The Olive Press)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://www.compoundchem.com/2014/02/19/the-chemical-elements-of-a-smartphone/">The Chemical Elements of a Smartphone</a>
              {' '}— (Compoundchem)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://cellularnews.com/mobile-phone/coltan/">Coltan and Mobile Phones: The Wonders &amp; the Sad Truth About It</a>
              {' '}— (CellularNews)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://stay-grounded.org/">Stay grounded</a>
              {' '}— (Stay grounded)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://ig.ft.com/climate-game/">Can you reach net zeroby 2050?</a>
              {' '}— (Financial Times)
            </li>
          </ol>
        </section>
      </div>
    </>
  );
}

export default Annotations;