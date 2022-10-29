import { Link } from 'react-router-dom';
import { ReactComponent as ImageLogo } from '../../images/logo.svg';

import './styles.scss';

const Upper = function({label}) {
  return (
    <div className="upper">
      <Link className="upper-logo" to="/">
          {label &&
            <span>EFA Championship by</span>
          }
          <ImageLogo />
      </Link>

      <div className="upper-lang">
        <button href="/">Eng</button>
        <span></span>
        <button href="/">Esp</button>
      </div>
    </div>
  );
}

export default Upper;