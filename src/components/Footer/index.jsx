import { ReactComponent as IconTelegram } from '../../images/icons/telegram.svg';
import { ReactComponent as IconTwitter } from '../../images/icons/twitter.svg';
import { ReactComponent as IconVK } from '../../images/icons/vk.svg';

import './styles.scss';

const Footer = function() {
  return (
    <footer className="footer">
      <div className="footer-description">
        <h4>&copy; Made by <a href="/">Tiger Soda</a></h4>

        <p>We create meaningful digital experiences through impactful storytelling and inventive design. Let's change the world together.</p>
        <p>Special thanks to Íñigo Vitón García Profesión: Biólogo, miembro de Ecologistas en Acción</p>
      </div>

      <div className="footer-social">
        <figure>
          <a href="/"><IconTelegram /></a>
          <a href="/"><IconTwitter /></a>
          <a href="/"><IconVK /></a>
        </figure>

        <p>Share the project, each new member of the eco-team is significant to make a change</p>

        <p>
          <a href="/">see project sources</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;