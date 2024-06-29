import { ISection } from "../../utils/globalInfo";
import styles from "./FixedSectionController.module.css";

export interface IPropsSecButton {
  section: ISection;
  onClick?: (id: string) => void;
}
export interface IPropsController {
  sections: ISection[];
}

function FixedSectionController({ sections }: IPropsController) {
  return (
    <>
      <ListButtons sections={sections} />
    </>
  );
}

function ListButtons({ sections }: IPropsController) {
  function handleOnClick(id: string) {
    console.log("id", id);
  }

  return (
    <div className={styles["controlls"]}>
      {sections.map((section) => (
        <SectionButton
          section={section}
          onClick={handleOnClick}
          key={section.id}
        />
      ))}
    </div>
  );
}

function SectionButton({ section, onClick }: IPropsSecButton) {
  const isActive = section.isActive === true ? styles["sec-active"] : "";

  const handleClick = () => {
    if (onClick === undefined) return;
    onClick(section.id);
  };

  return (
    <div
      onClick={handleClick}
      className={`${styles["sec-control"]} ${isActive}`}
    >
      <i className={section.icon}></i>
    </div>
  );
}

export default FixedSectionController;
