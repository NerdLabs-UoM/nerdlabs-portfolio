import React , {useState} from 'react';
import {CarouselItem} from './CarouselItem';

export const  Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        {
          title: "Srilanka",
          description:
            "Sri Lanka, formerly known as Ceylon and officially the Democratic Socialist Republic of Sri Lanka, is an island country in South Asia. It lies in the Indian Ocean, southwest of the Bay of Bengal, separated from the Indian peninsula by the Gulf of Mannar and the Palk Strait",
          icon: require("./Media/undraw_biking_kc-4-f.svg"),
        },
        {
          title: "India",
          description:
            "India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area; the most populous country as of June 2023; and from the time of its independence in 1947, the world's most populous democracy",
          icon: require("./Media/undraw_winter_magic_-5-xu2.svg"),
        },
        {
          title: "Pakistan",
          description:
            "Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia. It is the world's fifth-most populous country, with a population of 241.5 million people, and has the world's largest Muslim population as of year 2023.",
          icon: require("./Media/undraw_fall_thyk.svg"),
        },
      ];

  return (
    <div>
      <CarouselItem/>
    </div>
  )
}