import Bubble from "~/components/Bubble/Bubble";
import Separator from "~/components/Separator/Separator";
import Title from "~/components/Title/Title";
import { WorkExperience, Project } from "~/types/cv.types";
import "./Category.css";

type Data = Project | WorkExperience;

const Category = ({ data }: { data: Data[] }) => {
  if (!data || data.length === 0) {
    return null;
  }

  const isProjectSection = "name" in data[0];

  const renderSubtitle = (data: Data) => {
    if ("duration" in data) {
      return <span>{data.duration}</span>;
    } else {
      return (
        <span>
          {data.location} • {data.company} • {data.type} • {data.years}
        </span>
      );
    }
  };

  const renderTitle = (data: Data) => {
    return "duration" in data ? data.name : data.position;
  };

  return (
    <div className="category">
      <Title text={isProjectSection ? "Projects" : "Work Experience"} />
      <div>
        {data.map((item, index) => {
          return (
            <div className="category__data" key={index}>
              <div className="category__title">{renderTitle(item)}</div>
              <div className="category__subtitle">{renderSubtitle(item)}</div>
              <div className="category__bubbles">
                {item.bubbles.map((bubble, bubble_index) => (
                  <Bubble key={bubble_index} text={bubble} />
                ))}
              </div>
              <ul className="category__lines">
                {item.lines.map((line, line_index) => (
                  <li
                    key={line_index}
                    className={line.bulletPoint ? "category__bulletPoints" : ""}
                  >
                    {line.text}
                  </li>
                ))}
              </ul>
              {index !== data.length - 1 && (
                <Separator marginBottom={10} marginTop={2} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
