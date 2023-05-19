import Marquee from "react-fast-marquee";
import a1 from '../../../assets/spon/1.png';
import b2 from '../../../assets/spon/2.png';
import c3 from '../../../assets/spon/3.png';
import d4 from '../../../assets/spon/4.png';
import e5 from '../../../assets/spon/5.png';
import f6 from '../../../assets/spon/6.png';

import i9 from '../../../assets/spon/9.png';



const Sponsored = () => {

  return (
    <div className="my-24">
      <h3 className="text-center text-4xl font-bold my-24">Sponsored</h3>
      <Marquee speed={100}>
        <img className="rounded-full w-40 mx-24" src={a1} alt="" />
        <img className="rounded-full w-40 mx-24" src={b2} alt="" />
        <img className="rounded-full w-40 mx-24" src={c3} alt="" />
        <img className="rounded-full w-40 mx-24" src={d4} alt="" />
        <img className="rounded-full w-40 mx-24" src={e5} alt="" />
        <img className="rounded-full w-40 mx-24" src={f6} alt="" />
        <img className="rounded-full w-40 mx-24" src={i9} alt="" />
      </Marquee>
    </div>
  );
};

export default Sponsored;
