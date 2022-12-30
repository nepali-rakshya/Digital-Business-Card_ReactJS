import img from "../img/anya.jpg";

const Image = () => {
  return (
    <section>
      <img src={img} alt="anya" width="300px" />
      <p className="name">Rakshya Nepali</p>
      <p className="title">Frontend Developer</p>
      <p className="website">rakshyanepali440@gmail.com</p>
    </section>
  );
};

export default Image;
