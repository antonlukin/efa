import { ReactComponent as IconTelegram } from '../../images/icons/telegram.svg';
import { ReactComponent as IconTwitter } from '../../images/icons/twitter.svg';
import { ReactComponent as IconFacebook } from '../../images/icons/facebook.svg';

import './styles.scss';

function Sharing({share}) {
  let url = 'https://clash.notset.org/';

  if (share) {
    url = `${url}share/${share}`;
  }

  return (
    <nav className="sharing">
      <a href={'https://www.facebook.com/sharer/sharer.php?u=' + url}><IconFacebook /></a>
      <a href={'https://t.me/share/url?url=' + url}><IconTelegram /></a>
      <a href={'https://twitter.com/intent/tweet?text=' + url}><IconTwitter /></a>
    </nav>
  );
}

export default Sharing;