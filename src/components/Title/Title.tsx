import "./Title.css";

const Title = ({ text, onClick }: { text: string; onClick?: () => void }) => {
  return (
    <span onClick={onClick} className="title">
      {text}
    </span>
  );
};

export default Title;
