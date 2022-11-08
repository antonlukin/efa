import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Lead from '../../components/Lead';
import Enemy from '../../components/Enemy';

import AOS from 'aos';

import 'swiper/scss';

import './styles.scss';
import './slider.scss';

const Opposing = function() {
  const slidesAmount = 11;

  const [page, setPage] = useState(1);
  const [current, setCurrent] = useState(null);
  const [swiper, setSwiper] = useState(null)

  const { t } = useTranslation();

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
      allowTouchMove: true,
      centeredSlides: true,
      modules: [Navigation],
      navigation: true,
      preloadImages: true,
      updateOnImagesReady: true,
      initialSlide: (saved - 1),
      breakpoints: {
        1024: {
          loop: false,
          centeredSlides: false,
        }
      },
      onSlideChange: updatePages,
      onImagesReady: () => {
        AOS.refresh();
      }
    }

    setSwiper(options);
  }, []);

  return (
    <section className="opposing">
      <Lead className="opposing-start">
        <h2 data-aos="fade" dangerouslySetInnerHTML={{ __html: t('opposing.title')}} />
        <p data-aos="fade" dangerouslySetInnerHTML={{ __html: t('opposing.description')}} />
      </Lead>

      <p className="opposing-helper" dangerouslySetInnerHTML={{ __html: t('opposing.helper')}} />

      {swiper &&
        <Swiper className="opposing-slider" {...swiper}>
          {[...Array(slidesAmount)].map((el, i) =>
            <SwiperSlide key={i} className='is-next'>
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