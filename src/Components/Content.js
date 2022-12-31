import ContentCSS from "./Content.module.css";
import cn from "classnames";

const Content = () => {
  return (
    <main className={cn(ContentCSS.content)}>
      <p className={ContentCSS.title}>About</p>
      <p>
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>
      <p className={ContentCSS.title}>Interests</p>
      <p>
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </main>
  );
};

export default Content;
