import React from "react";
import { ISection } from "../../utils/globalInfo";
import styles from "./FixedSectionController.module.css";

export interface IPropsSecButton {
  section: ISection;
  onClick?: (id: string) => void;
}

export interface IPropsController {
  sections: ISection[];
}

export interface ISectionsUpdate {
  sections: ISection[];
  idSection: string;
}

// function UpdateSectionsState({ sections, idSection }: ISectionsUpdate) {}

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
    <nav className={styles["controlls"]}>
      {sections.map((section) => (
        <SectionButton
          section={section}
          onClick={handleOnClick}
          key={section.id}
        />
      ))}
    </nav>
  );
}

function SectionButton({ section, onClick }: IPropsSecButton) {
  const isActive = section.isActive === true ? styles["sec-active"] : "";
  const hreftag = "#" + section.id;

  const handleClick = () => {
    if (onClick === undefined) return;
    onClick(section.id);
  };

  return (
    <div
      onClick={handleClick}
      className={`${styles["sec-control"]} ${isActive}`}
    >
      <a className={section.icon} href={`${hreftag}`}></a>
    </div>
  );
}

export default FixedSectionController;
