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
              <a target="_blank" rel="noreferrer" href="https://www.fao.org/state-of-forests/en/">The state of world's forest, report </a>— (FAO)
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="https://www.who.int/health-topics/air-pollution">Air pollution</a> — (WHO)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://www.eea.europa.eu/themes/air/country-fact-sheets/2021-country-fact-sheets/spain">Air pollution country fact sheet</a> — (EEA)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://www.who.int/news/item/31-05-2022-who-raises-alarm-on-tobacco-industry-environmental-impact">WHO raises alarm on tobacco industry environmental impact</a> — (WHO)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://www.un.org/waterforlifedecade/quality.shtml">Water quality, report</a> — (UNDESA)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://www.sanidad.gob.es/profesionales/saludPublica/saludAmbLaboral/calidadAguas/consumoHumano.htm">Agua de consumo humano</a> — (Spanish Ministry of Health, Consumer Affairs and Social Welfare)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://www.livescience.com/29673-how-much-water-on-earth.html">How Much Water Is on Earth?</a> — (Live Science)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://unfccc.int/news/un-helps-fashion-industry-shift-to-low-carbon">UN Helps Fashion Industry Shift to Low Carbon</a> — (UN)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://es.greenpeace.org/es/que-puedes-hacer-tu/consumo/">Consumo responsable</a> — (Greenpeace)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://consumoresponsable.org/desperdicioalimentario/documentos/guia-desperdicio-alimentario.pdf">Guía de buenas prácticas frente al desperdicio alimentario</a> — (Ecodes)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://www.ucm.es/data/cont/docs/3-2020-02-03-informe-agroecologia-2019.pdf">Agroecología para enfriar el planeta</a> — (Ecologists in Action)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://www.euronews.com/green/2021/04/14/eu-is-the-world-s-second-biggest-importer-of-tropical-deforestation-says-wwf">EU is the world's second biggest importer of tropical deforestation, says WWF</a> — (WWF)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://www.elperiodico.com/es/verde-y-azul/20220629/30-000-espanoles-mueren-ano-13964895">30.000 españoles mueren al año por contaminación del aire, la mayoría por partículas PM2.5</a> — (ElPeriodico)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://edition.cnn.com/2019/06/11/health/microplastics-ingestion-wwf-study-scn-intl/index.html">You could be swallowing a credit card’s weight in plastic every week</a> — (CNN Health)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://www.euronews.com/2022/05/27/spain-s-donana-national-park-under-threat-as-groundwater-pumping-continues">Spain's Doñana National Park under threat as groundwater pumping continues</a> — (Euronews)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://www.theolivepress.es/spain-news/2021/08/07/why-the-mar-menor-in-spain-has-become-europes-saddest-example-of-environmental-vandalism/">Why the Mar Menor in spain has become europe's saddest example of environmental vandalism</a> — (The Olive Press)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://www.compoundchem.com/2014/02/19/the-chemical-elements-of-a-smartphone/">The Chemical Elements of a Smartphone</a> — (Compoundchem)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://cellularnews.com/mobile-phone/coltan/">Coltan and Mobile Phones: The Wonders &amp; the Sad Truth About It</a> — (CellularNews)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://stay-grounded.org/">Stay grounded</a> — (Stay grounded)
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://ig.ft.com/climate-game/">Can you reach net zeroby 2050?</a> — (Financial Times)
            </li>
          </ol>
        </section>
      </div>
    </>
  );
}

export default Annotations;