import g2 from '../../../assets/ga/g2.jpg';
import g6 from '../../../assets/ga/g6.jpg';
import g5 from '../../../assets/ga/r1.jpg';
import g4 from '../../../assets/ga/r3.jpg';
import g3 from '../../../assets/ga/r4.jpg';
import g7 from '../../../assets/ga/r5.jpg';
import g1 from '../../../assets/ga/r6.jpg';


const Gallery = () => {
    return (
      <div className="">
        <h3 className="text-4xl  text-center my-24">Toy Gallery Section </h3>
        <div className=" grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 mt-8 px-4">
          <img data-aos="fade-up" src={g1} alt="" />
          <img src={g2} alt="" />
          <img data-aos="fade-right" src={g3} alt="" />
          <img src={g4} alt="" />
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 mt-2 px-4">
          <img data-aos="fade-up-right" src={g5} alt="" />
          <img src={g6} alt="" />
          <img data-aos="fade-down-right" src={g7} alt="" />
        </div>
      </div>
    );
};

export default Gallery;
