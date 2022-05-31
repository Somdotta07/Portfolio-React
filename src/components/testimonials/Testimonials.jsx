import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/Shahier.jpg";
import AVTR2 from "../../assets/Chim.jpg";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const peers = [
  {
    avatar: AVTR1,
    name: "Shahier Nashaat",
    review:
      "Somdotta is one of the best teammates I have ever worked with, she is a very good listener, a fast learner provides help to anyone in the team if needed, and is very committed to the responsibilities that she has.",
  },
  {
    avatar: AVTR2,
    name: "Chimwewme Sinyinza",
    review:
      "I had the chance to work with Somdotta on different projects. Her technical skills were always impressive. She constantly showed professional behaviour and a high level of problem-solving skills.She is always creative with writing codes and shows a nice attitude towards team members. Based on that, I would gladly recommend her as a software developer with her technical and soft skills.",
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
