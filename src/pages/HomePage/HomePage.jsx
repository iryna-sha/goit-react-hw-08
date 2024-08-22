import s from "./HomePage.module.css";
import img from "../../images/phoneBookImg.jpg";
const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <h1>
        The best <span>phone book app!</span> Try it now!
      </h1>
      <img src={img} alt="Phone Book" />
    </div>
  );
};

export default HomePage;
