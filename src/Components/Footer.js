import twitter from "../img/twitter.png";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import github from "../img/github.png";

const Footer = () => {
  return (
    <section>
      <img src={twitter} alt="twitter_logo" />
      <img src={facebook} alt="facebook_logo" />
      <img src={instagram} alt="instagram_logo" />
      <img src={github} alt="github_logo" />
    </section>
  );
};

export default Footer;
