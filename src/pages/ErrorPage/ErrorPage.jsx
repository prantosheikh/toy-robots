import { Link } from 'react-router-dom';
import errorPage from '../../assets/errorPage/error.jpg';

const ErrorPage = () => {
    return (
      <div className="w-[900px] mx-auto  ">
        <img src={errorPage} alt="" />
        <div className="text-center  top-0">
          <button className="btn btn-primary w-1/2">
            <Link to='/'>GO HOME</Link>
          </button>
        </div>
      </div>
    );
};

export default ErrorPage;