
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img from '../../../assets/banner/jeffery-ho-ZtTI0BAxf2U-unsplash__1_-removebg-preview.png';

const Community = () => {
  useEffect(() => {
    AOS.init({
      // Configure options here (e.g., duration, easing, offset, etc.)
    });
  }, []);
    return (
      <div className="my-32 ">
        <div
          data-aos="zoom-out-up"
          data-aos-duration="3000"
          className="w-full  bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 lg:flex rounded-xl pt-8"
        >
          <div className="ms-16 mt-10 mr-8">
            <p className="uppercase text-4xl  font-bold text-white">
              lets join the community
            </p>
            <p className="text-gray-200 mt-6 ">
              Unicorn Gundam, which demonstrated new power in Mobile Suit Gundam
              Unicorn, reappears in GUNDAM UNIVERSE with coloring that imaged
              the time of awakening! The approximately 6-inch body incorporates
              a voluminous modeling arrangement and movement unique to the
              series!
            </p>
            <button className="py-3 bg-white px-8 mt-7 text-blue-700 font-bold">
              Join Now{" "}
            </button>
          </div>
          <img src={img} alt="" className="lg:w-[573px] sm:w-[400px]" />
        </div>
      </div>
    );
};

export default Community;