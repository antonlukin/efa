import { useEffect, useContext } from 'react';

import Sharing from '../Sharing';

import DecorEarth from '../../images/decors/earth.png';
import DecorList from '../../images/decors/list.png';
import DecorMegaphone from '../../images/decors/megaphone.png';
import DecorCup from '../../images/decors/cup.png';
import DecorCan from '../../images/decors/can.png';

import { ReactComponent as IconDownload } from '../../images/icons/download.svg';
import { ReactComponent as IconChevron } from '../../images/icons/chevron.svg';
import { ReactComponent as IconView } from '../../images/icons/view.svg';
import { ReactComponent as IconInstagram } from '../../images/icons/instagram.svg';

import AppContext from '../../context';

import './styles.scss';

const Grid = function() {
  const context = useContext(AppContext);

  useEffect(() => {
    console.log(context.uniform);
  }, [context]);

  return (
    <div className="grid">
      <div className="grid-uniform" role="button" onClick={() => console.log('123')}>
        <figure>
          <img src={context.uniform} alt="Your form" />
          <figcaption>You can download Your form on device</figcaption>
        </figure>

        <button>
          <IconDownload />
        </button>
      </div>

      <div className="grid-stories">
        <figure>
          <figcaption>Post story with form to Your Instagram</figcaption>
        </figure>

        <button>
          <IconInstagram />
        </button>
      </div>

      <div className="grid-learn">
        <figure>
          <img src={DecorCan} alt="Can decor" />
          <figcaption>Learn more about Tiger Soda</figcaption>
        </figure>

        <button>
          <IconChevron />
        </button>
      </div>

      <div className="grid-sources">
        <figure>
          <img src={DecorEarth} alt="Earth decor" />
          <figcaption>See the project’s sources</figcaption>
        </figure>

        <button>
          <IconChevron />
        </button>
      </div>

      <div className="grid-guide">
        <figure>
          <img src={DecorList} alt="List decor" />
          <figcaption>Download all advices from battle as a guide</figcaption>
        </figure>

        <button>
          <IconDownload />
        </button>
      </div>

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

          <Sharing />
        </figure>
      </div>
    </div>
  );
}

export default Grid;