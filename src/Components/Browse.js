import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Correct CSS import
import 'swiper/css/pagination'; // Import pagination styles
import 'swiper/css/navigation'; // Import navigation styles
import m1 from '../Images/web asset ii_Agriculture.jpg';
import m2 from '../Images/web asset ii_Banking and FinTech-.jpg';
import m3 from '../Images/web asset ii_E-commerce.jpg';
import m4 from '../Images/web asset ii_Manufacturing.jpg';
import m5 from '../Images/web asset ii_Politics.jpg';
import m6 from '../Images/web asset ii_Restaurant.jpg';
import m7 from '../Images/web asset ii_Social media.jpg';
import m8 from '../Images/web asset ii_Sports.jpg';
import m9 from '../Images/web asset ii_education.jpg';
import m10 from '../Images/web asset ii_event & entertainment.jpg';
import m11 from '../Images/web asset ii_health.jpg';
import m12 from '../Images/web asset ii_logistics.jpg';
import m13 from '../Images/web asset ii_real estate.jpg';

import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // Correct module import

const Browse = () => {

  const Categories = [
    {
      id: 1,
      img: m1,
    },
    {
      id: 2,
      img: m2,
    },
    {
      id: 3,
      img: m3,
    },
    {
      id: 4,
      img: m4,
    },
    {
      id: 5,
      img: m5,
    },
    {
      id: 6,
      img: m6,
    },
    {
      id: 7,
      img: m7,
    },
    {
      id: 8,
      img: m8,
    },
    {
      id: 9,
      img: m9,
    },
    {
      id: 10,
      img: m10,
    },
    {
      id: 11,
      img: m11,
    },
    {
      id: 12,
      img: m12,
    },
    {
      id: 13,
      img: m13,
    }
  ];

  return (
    <div>
      <div className="browse">
        <h3>Browse Our Categories</h3>
        <p>Choose from wide varieties</p>

        <Swiper
          spaceBetween={30}
          slidesPerView={4} // Show 4 slides at a time
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]} // Use the imported modules
        >
          {Categories.map((Category, id) => (
            <SwiperSlide key={id} className="cards">
              <div className="card">
                <div>
                  <img src={Category.img} alt="" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Browse;
