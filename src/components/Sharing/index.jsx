import { ReactComponent as IconTelegram } from '../../images/icons/telegram.svg';
import { ReactComponent as IconTwitter } from '../../images/icons/twitter.svg';
import { ReactComponent as IconVK } from '../../images/icons/vk.svg';

import './styles.scss';

function Sharing() {
  return (
    <nav className="sharing">
      <a href="/"><IconTelegram /></a>
      <a href="/"><IconTwitter /></a>
      <a href="/"><IconVK /></a>
    </nav>
  );
}

export default Sharing;