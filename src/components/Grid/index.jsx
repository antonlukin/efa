import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Sharing from '../Sharing';

import DecorEarth from '../../images/decors/earth.png';
import DecorList from '../../images/decors/list.png';
import DecorMegaphone from '../../images/decors/megaphone.png';
import DecorCup from '../../images/decors/cup.png';
import DecorCan from '../../images/decors/can.png';
import DecorIphone from '../../images/decors/iphone.png';

import { ReactComponent as IconDownload } from '../../images/icons/download.svg';
import { ReactComponent as IconChevron } from '../../images/icons/chevron.svg';
import { ReactComponent as IconView } from '../../images/icons/view.svg';

import transfer from '../../utils/transfer';

import './styles.scss';

const Grid = function({share}) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const transferStandings = () => {
    transfer(() => navigate('/#standings'));
  }

  return (
    <div className="grid">
      <a className="grid-uniform" href={share.work} download="t-shirt.png">
        <figure>
          <img src={share.work} alt={t('grid.uniform')} />
          <figcaption>{t('grid.uniform')}</figcaption>
        </figure>

        <button>
          <IconDownload />
        </button>
      </a>

      <a className="grid-stories" href={share.story} download="story.jpg">
        <figure>
          <p>
            <img src={share.story} alt={t('grid.stories')} />
            <img src={DecorIphone} alt={t('grid.stories')} />
          </p>
          <figcaption>{t('grid.stories')}</figcaption>
        </figure>

        <button>
          <IconDownload />
        </button>
      </a>

      <a className="grid-learn" href="https://tigersoda.agency/" target="_blank" rel="noreferrer">
        <figure>
          <img src={DecorCan} alt={t('grid.learn')} />
          <figcaption>{t('grid.learn')}</figcaption>
        </figure>

        <button>
          <IconChevron />
        </button>
      </a>

      <a className="grid-sources" href="/sources/" target="_blank">
        <figure>
          <img src={DecorEarth} alt={t('grid.sources')} />
          <figcaption>{t('grid.sources')}</figcaption>
        </figure>

        <button>
          <IconChevron />
        </button>
      </a>

      <a className="grid-guide" href={`/guide-${i18n.language}.pdf`} target="_blank" rel="noreferrer">
        <figure>
          <img src={DecorList} alt={t('grid.guide')} />
          <figcaption>{t('grid.guide')}</figcaption>
        </figure>

        <button>
          <IconDownload />
        </button>
      </a>

      <div className="grid-standings" role="button" onClick={transferStandings}>
        <figure>
          <img src={DecorCup} alt={t('grid.standings')} />
          <figcaption>{t('grid.standings')}</figcaption>
        </figure>

        <button>
          <IconView />
        </button>
      </div>

      <div className="grid-share">
        <figure>
          <img src={DecorMegaphone} alt={t('grid.share')} />
          <figcaption>{t('grid.share')}</figcaption>

          <Sharing share={share.key} />
        </figure>
      </div>
    </div>
  );
}

export default Grid;