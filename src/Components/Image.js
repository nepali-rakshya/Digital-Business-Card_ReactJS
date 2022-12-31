import img from "../img/anya.jpg";
import imgCSS from "./Image.module.css";

const Image = () => {
  return (
    <section>
      <img src={img} alt="anya" className={imgCSS.img_size} />
    </section>
  );
};

export default Image;
