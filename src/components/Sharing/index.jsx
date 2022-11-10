import { ReactComponent as IconTelegram } from '../../images/icons/telegram.svg';
import { ReactComponent as IconTwitter } from '../../images/icons/twitter.svg';
import { ReactComponent as IconFacebook } from '../../images/icons/facebook.svg';

import './styles.scss';

function Sharing() {
  return (
    <nav className="sharing">
      <a href="/"><IconFacebook /></a>
      <a href="/"><IconTelegram /></a>
      <a href="/"><IconTwitter /></a>
    </nav>
  );
}

export default Sharing;