import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Navigation, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Lead from '../../components/Lead';
import Enemy from '../../components/Enemy';

import { ReactComponent as IconChevron } from '../../images/icons/chevron.svg';

import AOS from 'aos';
import Cursor from '../../utils/cursor';

import 'swiper/scss';

import './styles.scss';
import './slider.scss';

const Opposing = function() {
  const slidesAmount = 11;

  const [page, setPage] = useState(1);
  const [current, setCurrent] = useState(null);
  const [swiper, setSwiper] = useState(null);

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
      allowTouchMove: true,
      centeredSlides: true,
      modules: [Navigation, Keyboard],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      keyboard: {
        enabled: true,
      },
      preloadImages: true,
      updateOnImagesReady: true,
      initialSlide: (saved - 1),
      breakpoints: {
        1024: {
          loop: false,
          centeredSlides: false,
          allowTouchMove: false,
        }
      },
      onSlideChange: updatePages,
      onImagesReady: () => {
        AOS.refresh();

        new Cursor({
          targets: ['.is-opened', '.is-locked'],
        });
      }
    }

    setSwiper(options);
  }, []);

  return (
    <section className="opposing">
      <Lead className="opposing-start">
        <h2 data-aos="fade">{t('opposing.title')}</h2>
        <p data-aos="fade">{t('opposing.description')}</p>
      </Lead>

      <p className="opposing-helper">{t('opposing.helper')}</p>

      {swiper &&
        <Swiper className="opposing-slider" {...swiper}>
          {[...Array(slidesAmount)].map((el, i) =>
            <SwiperSlide key={i}>
              <Enemy id={i} current={current} />
            </SwiperSlide>
          )}

          <div className="swiper-button-prev">
            <IconChevron />
          </div>

          <div className="swiper-button-next">
            <IconChevron />
          </div>
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