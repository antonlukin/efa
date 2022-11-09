import Sharing from '../Sharing';

import './styles.scss';

const Footer = function() {
  return (
    <footer className="footer" data-aos="fade">
      <div className="footer-description">
        <h4>&copy; Made by <a href="/">Tiger Soda</a></h4>

        <p>We create meaningful digital experiences through impactful storytelling and inventive design. Let's change the world together.</p>
        <p>Special thanks to Íñigo Vitón García Profesión: Biólogo, miembro de Ecologistas en Acción</p>
      </div>

      <div className="footer-social">
        <Sharing />

        <p>Share the project, each new member of the eco-team is significant to make a change</p>

        <p>
          <a href="/">see project sources</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;