import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper/modules";
import "./events.css"; // Import your custom styles
import Template from "./Template";

const sportsArray = [
  "Badminton",
  "Futsal",
  "Basketball",
  "Squash",
  "Chess",
  "Cricket",
  "Football",
  "Kabaddi",
  "Powerlifting",
  "Table Tennis",
  "Tennis",
  "Volleyball",
];

function Events() {
  return (
    <div
      id="events"
      className="relative flex items-center justify-center"
      style={{
        backgroundImage: `url('./events_back.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1>Events</h1>
        <img
          className="absolute w-2/3 top-16 left-1/2 -translate-x-1/2 sm:w-1/4"
          src="board.png"
          alt=""
        />
      </div>

      <img
        className="hidden md:block absolute bottom-0 left-0 w-full"
        src="events_ground.png"
        alt=""
      />
      <img
        className="absolute -bottom-20 left-0"
        src="events__left_rock.png"
        alt=""
      />
      <img
        className="absolute -bottom-20  right-0"
        src="events__right_rock.png"
        alt=""
      />

      <div className="pl-2 mt-36 absolute">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
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
        <div
          className="hidden md:block absolute inset-x-0 -top-48 h-16"
          style={{
            background: "linear-gradient(black, transparent)",
          }}
        />
      </div>
    </div>
  );
}

export default Events;
