import { useState, useEffect } from 'react';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Lead from '../../components/Lead';
import Enemy from '../../components/Enemy';

import 'swiper/scss';

import './styles.scss';
import './slider.scss';

const Opposing = function() {
  const slidesAmount = 11;

  const [page, setPage] = useState(1);
  const [current, setCurrent] = useState(null);
  const [swiper, setSwiper] = useState(null)

  const updatePages = (swiperCore) => {
    setPage(swiperCore.realIndex + 1);
  }

  useEffect(() => {
    let saved = window.localStorage.getItem('enemy');

    if (saved === null) {
      saved = 1;
    }

    saved = parseInt(saved);
    setCurrent(saved);

    const options = {
      slidesPerView: 'auto',
      loop: true,
      allowTouchMove: false,
      centeredSlides: true,
      modules: [Navigation],
      navigation: true,
      initialSlide: (saved - 1),
      breakpoints: {
        1024: {
          loop: false,
          centeredSlides: false,
        }
      },
      onSlideChange: updatePages,
    }

    setSwiper(options);
  }, []);

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

      {swiper &&
        <Swiper className="opposing-slider" {...swiper}>
          {[...Array(slidesAmount)].map((el, i) =>
            <SwiperSlide key={i} className={i === (current - 1) ? 'is-next' : null}>
              <Enemy id={i} current={current} slidesAmount={slidesAmount} />
            </SwiperSlide>
          )}
        </Swiper>
      }

      <nav className="opposing-pagination">
        <strong>{page}</strong>/
        <span>{slidesAmount}</span>
      </nav>
    </section>
  );
}

export default Opposing;