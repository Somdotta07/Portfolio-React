import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar3.jpg";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const peers = [
  {
    avatar: AVTR1,
    name: "Rachel Higgins",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Rerum molestiae, corporis possimus consectetur consequuntur eaque dignissimos in reiciendis corrupti necessitatibus ea laborum odit  voluptate nobis quas, explicabo quisquam velit modi!",
  },
  {
    avatar: AVTR2,
    name: "Jim Scott",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Rerum molestiae, corporis possimus consectetur consequuntur eaque dignissimos in reiciendis corrupti necessitatibus ea laborum odit  voluptate nobis quas, explicabo quisquam velit modi!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Peers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        navigation={true}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
      >
        {peers.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="peer_avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="peer_name">{name}</h5>
              <small className="peer_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
