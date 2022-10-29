import { useState } from 'react';

import { Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import Lead from '../../components/Lead';

import 'swiper/scss';

import './styles.scss';
import './slider.scss';

const Opposing = function() {
  const slidesAmount = 11;
  const [page, setPage] = useState(1);

  const updatePages = (swiperCore) => {
    setPage(swiperCore.realIndex + 1);
  }

  const swiperOpts = {
    allowTouchMove: true,
    slidesPerView: 'auto',
    loop: false,
    centeredSlides: true,
    modules: [Navigation],
    navigation: true,
    onSlideChange: updatePages,
    breakpoints: {
      120: {
        loop: true,
      },
      1024: {
        loop: false,
        centeredSlides: false,
      }
    }
  }

  return (
    <section className="opposing">
      <Lead className="opposing-start">
        <h2>Opposing team</h2>
        <p>
          Each <a href="/">player</a> on this team represents one of the <a href="/">global environmental issues</a>.
          Find out more about each of them and get the tips to reduce their influence.
        </p>
      </Lead>

      <p className="opposing-helper">
        tap on card to see more
      </p>

      <Swiper className="opposing-slider" {...swiperOpts}>
        {[...Array(slidesAmount)].map((el, i) =>
          <SwiperSlide key={i} className={(i === 0) ? 'swiper-slide-start' : null}>
            <div className="swiper-slide-inner">
              <div className="swiper-slide-front">
                <img src={require(`../../images/cards/${i + 1}.png`)} alt="Front of the card" />
              </div>

              <div className="swiper-slide-back">
                <img src={require(`../../images/backs/${i + 1}.png`)} alt="Back of the card" />

                <figure>
                  <h5>
                    <strong>{i + 1}</strong>
                    <span>/ {slidesAmount}</span>
                  </h5>

                  <p>This player plays both on the earth's surface, and in water, and in the air. Playing against him is not easy, but necessary, because in the future plastic waste will affect the health of not only the planet, but also people.</p>
                </figure>

                <Link to="/fight/">open</Link>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>

      <nav className="opposing-pagination">
        <strong>{page}</strong>/
        <span>{slidesAmount}</span>
      </nav>
    </section>
  );
}

export default Opposing;