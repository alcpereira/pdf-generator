import Separator from "~/components/Separator/Separator";
import { Header as HeaderType } from "~/types/cv.types";
import "./Header.css";

const Header = ({ name, resume }: HeaderType) => {
  return (
    <>
      <div className="header__container">
        <h1 className="header__name">{name}</h1>
        <div className="header__lines">
          {resume.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
      <Separator marginBottom={10} marginTop={5} />
    </>
  );
};

export default Header;
