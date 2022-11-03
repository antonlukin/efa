import { useNavigate } from 'react-router-dom';
import { ReactComponent as ImageLogo } from '../../images/logo.svg';
import transfer from '../../utils/transfer';

import './styles.scss';

const Upper = function({label}) {
  const navigate = useNavigate();

  const transferPage = (e) => {
    e.preventDefault();
    transfer(navigate, '/');
  }

  return (
    <div className="upper">
      <a className="upper-logo" href="/" onClick={transferPage}>
          {label &&
            <span>EFA Championship by</span>
          }
          <ImageLogo />
      </a>

      <div className="upper-lang">
        <button href="/">Eng</button>
        <span></span>
        <button href="/">Esp</button>
      </div>
    </div>
  );
}

export default Upper;