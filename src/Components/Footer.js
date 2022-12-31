import twitter from "../img/twitter.png";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import github from "../img/github.png";
import FooterCSS from "./Footer.module.css";
import cn from "classnames";

const Footer = () => {
  return (
    <section className={cn(FooterCSS.Footer_position)}>
      <img
        src={twitter}
        alt="twitter_logo"
        className={cn(FooterCSS.Footer_img_size)}
      />
      <img
        src={facebook}
        alt="facebook_logo"
        className={cn(FooterCSS.Footer_img_size)}
      />
      <img
        src={instagram}
        alt="instagram_logo"
        className={cn(FooterCSS.Footer_img_size)}
      />
      <img
        src={github}
        alt="github_logo"
        className={cn(FooterCSS.Footer_img_size)}
      />
    </section>
  );
};

export default Footer;
