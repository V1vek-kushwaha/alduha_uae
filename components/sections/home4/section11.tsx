"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  loop: true,
  autoplay: { delay: 1000 },
  breakpoints: {
    0: { spaceBetween: 30, slidesPerView: 1 },
    375: { spaceBetween: 30, slidesPerView: 1 },
    600: { spaceBetween: 30, slidesPerView: 2 },
    768: { spaceBetween: 30, slidesPerView: 3 },
    992: { spaceBetween: 30, slidesPerView: 4 },
    1200: { spaceBetween: 18, slidesPerView: 5 },
  },
};

export default function Section11() {
  // Define clients data array
  const clients = [
    { image: "/assets/img/client/client1-1.svg" },
    { image: "/assets/img/client/client1-2.svg" },
    { image: "/assets/img/client/client1-3.svg" },
    { image: "/assets/img/client/client1-4.svg" },
    { image: "/assets/img/client/client1-5.svg" },
    { image: "/assets/img/client/client1-1.svg" },
    { image: "/assets/img/client/client1-2.svg" },
    { image: "/assets/img/client/client1-3.svg" },
    { image: "/assets/img/client/client1-4.svg" },
    { image: "/assets/img/client/client1-5.svg" },
  ];

  return (
    <>
      <section className="client-area-1 pt-60 pb-60 overflow-hidden tg-header__area-four sticky-menu position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section__title text-center mb-30">
                <span className="sub-title text-white text-anim fw-normal lh-normal lh-base">
                  Used by thousands of companies around the world
                </span>
              </div>
            </div>
          </div>
          <Swiper
            {...swiperOptions}
            className="tg-swiper__slider swiper-container client-slider1"
            id="clientSlider1"
            data-swiper-options="{
            }"
          >
            <div className="swiper-wrapper">
              {clients.map((client, index) => (
                <SwiperSlide key={index}>
                  <Link href="#" className="client-card">
                    <img src={client.image} alt="img" />
                  </Link>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
}
