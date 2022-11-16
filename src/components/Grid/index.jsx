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

import './styles.scss';

const Grid = function({share}) {
  return (
    <div className="grid">
      <a className="grid-uniform" href={share.work} download="t-shirt.png">
        <figure>
          <img src={share.work} alt="Your form" />
          <figcaption>You can download Your form on device</figcaption>
        </figure>

        <button>
          <IconDownload />
        </button>
      </a>

      <a className="grid-stories" href={share.story} download="story.png">
        <figure>
          <p>
            <img src={DecorIphone} alt="Story" />
            <img src={share.story} alt="Story" />
          </p>
          <figcaption>Post story with form to Your Instagram</figcaption>
        </figure>

        <button>
          <IconDownload />
        </button>
      </a>

      <a className="grid-learn" href="/" target="_blank" rel="noreferrer">
        <figure>
          <img src={DecorCan} alt="Can decor" />
          <figcaption>Learn more about Tiger Soda</figcaption>
        </figure>

        <button>
          <IconChevron />
        </button>
      </a>

      <a className="grid-sources" href="/" target="_blank" rel="noreferrer">
        <figure>
          <img src={DecorEarth} alt="Earth decor" />
          <figcaption>See the project’s sources</figcaption>
        </figure>

        <button>
          <IconChevron />
        </button>
      </a>

      <a className="grid-guide" href="/" target="_blank" rel="noreferrer">
        <figure>
          <img src={DecorList} alt="List decor" />
          <figcaption>Download all advices from battle as a guide</figcaption>
        </figure>

        <button>
          <IconDownload />
        </button>
      </a>

      <div className="grid-standings">
        <figure>
          <img src={DecorCup} alt="Cup decor" />
          <figcaption>See yourself in the standings</figcaption>
        </figure>

        <button>
          <IconView />
        </button>
      </div>

      <div className="grid-share">
        <figure>
          <img src={DecorMegaphone} alt="Megaphone decor" />
          <figcaption>Share the project</figcaption>

          <Sharing name={share.name} />
        </figure>
      </div>
    </div>
  );
}

export default Grid;