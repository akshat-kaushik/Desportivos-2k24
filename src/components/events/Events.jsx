import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow } from 'swiper/modules';
import './events.css';
import Template from './Template';

const sportsArray = [
  "Badminton",
  "Basketball",
  "Boxing",
  "Carrom",
  "Chess",
  "Cricket",
  "Football",
  "Futsal",
  "Kabaddi",
  "Powerlifting",
  "Squash",
  "Table Tennis",
  "Tennis",
  "Volleyball"
];

function Events() {
  return (
    <div className="relative flex items-center justify-center">
      <img className="w-full h-full" src="events_back.jpg" alt="" />
      <img className="absolute bottom-32 left-0 w-full" src="events_ground.png" alt="" />
      <img className="absolute bottom-1 left-0" src="events__left_rock.png" alt="" />
      <img className="absolute bottom-1 right-0" src="events__right_rock.png" alt="" />

      <div className="absolute">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          {sportsArray.map((sport, index) => (
            <SwiperSlide key={index}>
              <Template sportName={sport} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Events;