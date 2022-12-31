import ConnectionCSS from "./Connection.module.css";
import cn from "classnames";
import email from "../img/email.png";
import linkedIn from "../img/linkedIn.png";

const Connection = () => {
  return (
    <section>
      <h2 className={`${ConnectionCSS.name}`}>Rakshya Nepali</h2>
      <p className={`${ConnectionCSS.title}`}>Frontend Developer</p>
      <p className={`${ConnectionCSS.website}`}>rakshya.website</p>
      <div className={ConnectionCSS.FlexBox_row}>
        <p className={cn(ConnectionCSS.Icon, ConnectionCSS.Icon_email)}>
          <img src={email} className={cn(ConnectionCSS.FlexBox_img)} /> Email
        </p>
        <p className={cn(ConnectionCSS.Icon, ConnectionCSS.Icon_linkedIn)}>
          <img src={linkedIn} className={cn(ConnectionCSS.FlexBox_img)} />
          LinkedIn
        </p>
      </div>
    </section>
  );
};

export default Connection;
