import React, { useState } from "react";

import "./Recommended.css";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";

export default function Recommended() {

  const [liked, setLiked] = useState([]);

  const handleLike = (index) => {

    if(liked.includes(index)){

      setLiked(
        liked.filter((item)=> item !== index)
      );

    }else{

      setLiked([...liked,index]);

    }

  };

  const properties = [

    {
      image:house1,
      title:"New Apartment Nice View",
      location:"Quincy St, Brooklyn, NY, USA",
      price:"$7,500/mo",
    },

    {
      image:house2,
      title:"Luxury Family House",
      location:"Miami Beach, Florida",
      price:"$9,200/mo",
    },

    {
      image:house3,
      title:"Modern Glass Villa",
      location:"California, USA",
      price:"$12,500/mo",
    },

    {
      image:house1,
      title:"Classic Urban Apartment",
      location:"New York, USA",
      price:"$6,400/mo",
    },

  ];

  return (

    <section className="recommended">

      <div className="recommended-top">

        <span className="small-dot"></span>

        <h2>
          Recommended
        </h2>

        <p>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>

      </div>

      <Swiper

        modules={[
          Navigation,
          Pagination,
          Autoplay,
        ]}

        slidesPerView={3}

        spaceBetween={28}

        navigation={true}

        pagination={{
          clickable:true,
        }}

        autoplay={{
          delay:3000,
          disableOnInteraction:false,
        }}

        speed={1000}

        loop={true}

        breakpoints={{

          0:{
            slidesPerView:1,
          },

          768:{
            slidesPerView:2,
          },

          1100:{
            slidesPerView:3,
          }

        }}

      >

        {properties.map((item,index)=>(

          <SwiperSlide key={index}>

            <div className="property-card">

              {/* IMAGE */}

              <div className="property-image-wrapper">

                <img
                  src={item.image}
                  alt=""
                  className="property-image"
                />

                <span className="featured">
                  FEATURED
                </span>

                <span className="sale">
                  FOR SALE
                </span>

              </div>

              {/* CONTENT */}

              <div className="property-content">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.location}
                </p>

                {/* INFO */}

                <div className="property-info">

                  <span>
                    🛏 4 Beds
                  </span>

                  <span>
                    🛁 5 Baths
                  </span>

                  <span>
                    🚗 1 Garage
                  </span>

                  <span>
                    📐 1200 Sq Ft
                  </span>

                </div>

                {/* PRICE */}

                <div className="price-row">

                  <div>

                    <small>
                      $2,800/mo
                    </small>

                    <h4>
                      {item.price}
                    </h4>

                  </div>

                  {/* LIKE */}

                  <button
                    className={
                      liked.includes(index)
                      ? "icons active-heart"
                      : "icons"
                    }

                    onClick={() =>
                      handleLike(index)
                    }
                  >

                    {liked.includes(index)
                      ? "♥"
                      : "♡"}

                  </button>

                </div>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}