import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img1 from "../../../assets/banner/2.jpg";
import img from "../../../assets/banner/3.jpg";
import img4 from "../../../assets/banner/4.jpg";

const Banner = () => {
   useEffect(() => {
     Aos.init({
       // Configure options here (e.g., duration, easing, offset, etc.)
     });
   }, []);
  return (
    <div className="carousel w-full ">
      <div
        data-aos="flip-up"
        data-aos-duration="2000"
        id="slide1"
        className="carousel-item relative w-full lg:h-[600px]  bg-gray-900 border-white"
      >
        <div className="grid lg:grid-cols-2 lg:ms-20">
          <div className="mt-20">
            <h1 className="text-white text-5xl ">
              GN-0000 GNR-010 00
              <br /> RAISER
            </h1>
            <p className="text-white mt-7 me-8">
              Learning through play is the foundation of the STEM philosophy,
              and this fun robot couple takes that concept to the next level.
              Program their movements, emotions, and dances, or control their
              movements manually or via your remote control.
            </p>

            <button className="bg-blue-700 py-3 px-4 text-white mt-7 font-semibold">
              Get Your Now
            </button>
          </div>

          <div>
            <img src={img} className="lg:h-[600px] lg:w-50" />
          </div>
        </div>
        <div className="absolute flex gap-10 left-20 bottom-20">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full lg:h-[600px]  bg-gray-900 border-white"
      >
        <div className="grid lg:grid-cols-2 lg:ms-20">
          <div className="mt-20">
            <h1 className="text-white text-5xl ">
              Xtrem Bots Sophie <br /> Robot
            </h1>
            <p className="text-white mt-7 me-8">
              Learning through play is the foundation of the STEM philosophy,
              and this fun robot couple takes that concept to the next level.
              Program their movements, emotions, and dances, or control their
              movements manually or via your remote control.
            </p>

            <button className="bg-blue-700 py-3 px-4 text-white mt-7 font-semibold">
              Get Your Now
            </button>
          </div>

          <div>
            <img src={img1} className="lg:h-[600px] lg:w-50" />
          </div>
        </div>
        <div className="absolute flex gap-10 left-20 bottom-20">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative w-full lg:h-[600px]  bg-gray-900 border-white"
      >
        <div className="grid lg:grid-cols-2 lg:ms-20">
          <div className="mt-20">
            <h1 className="text-white text-5xl ">
              GUNDAM DEATHSCYTHE <br /> HELL EW
            </h1>
            <p className="text-white mt-7 me-8">
              Learning through play is the foundation of the STEM philosophy,
              and this fun robot couple takes that concept to the next level.
              Program their movements, emotions, and dances, or control their
              movements manually or via your remote control.
            </p>

            <button className="bg-blue-700 py-3 px-4 text-white mt-7 font-semibold">
              Get Your Now
            </button>
          </div>

          <div>
            <img src={img4} className="lg:h-[600px] lg:w-50" />
          </div>
        </div>
        <div className="absolute flex gap-10 left-20 bottom-20">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
