import Slider from "react-slick";

import ArtIcon from "../assets/icons/palette.svg";
import SportsIcon from "../assets/icons/volleyball.svg";
import MicIcon from "../assets/icons/mic-vocal.svg";
import PartyIcon from "../assets/icons/party.svg";
import WineIcon from "../assets/icons/wine.svg";
import BurgerIcon from "../assets/icons/hamburger.svg";


const categories = [
  { name: "Art", icon: ArtIcon },
  { name: "Sports", icon: SportsIcon },
  { name: "Concerts", icon: MicIcon },
  { name: "Parties", icon: PartyIcon },
  { name: "Drinks", icon: WineIcon },
  { name: "Food", icon: BurgerIcon },

];

export default function CategoryCarousel() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    swipeToSlide: true,          
    touchThreshold: 20,          
    adaptiveHeight: true,        
    speed: 600,                  
    cssEase: "cubic-bezier(0.25, 0.1, 0.25, 1)", 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="flex flex-col items-center">
      <h2 className="bg-moonstone text-whiteblue font-semibold text-xl px-6 py-3 rounded-full mb-6 shadow-xl self-center text-bold text-center">
        Explore Categories
      </h2>

      <div className="w-full overflow-visible px-5 py-5">
        <Slider {...settings}>
          {categories.map((cat) => (
            <div key={cat.name} className="px-2">
              <div key={cat.name} className="px-2 flex justify-center">
                <div className="w-40 h-40">
                  <div className="w-full h-full bg-white rounded-4xl flex flex-col items-center justify-center
                                transition-transform duration-300 transform hover:scale-105 hover:-translate-y-1
                                hover:bg-lightermoonstone cursor-pointer">
                    <img
                      src={cat.icon}
                      alt={cat.name}
                      className="w-10 h-10 mb-2 object-contain"
                    />
                    <span className="text-xl font-bold text-moonstone hover:text-white">
                      {cat.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}