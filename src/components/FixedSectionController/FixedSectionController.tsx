import { useEffect } from "react";
import { GlobalStorage } from "../../utils/GlobalStorege";

import { ISection } from "../../utils/globalInfo";
import styles from "./FixedSectionController.module.css";
import useYScrollController from "../../hooks/useYScrollController";

export interface IPropsSecButton {
  section: ISection;
}

export interface IPropsController {
  sections: ISection[];
}

export interface ISectionsUpdate {
  sections: ISection[];
  idSection: string;
}

function FixedSectionController() {
  const { reduxSections } = useYScrollController(true);

  return (
    <>
      <ListButtons sections={reduxSections} />
    </>
  );
}

function ListButtons({ sections }: IPropsController) {
  // Only to verify Values in GlobalStorage
  useEffect(() => {
    // console.log("List Button Component Rendered");
    // This is the effect code

    console.log(new GlobalStorage());

    return () => {
      // console.log("Cleanup");
      // This is the cleanup code
    };
  }, []);

  return (
    <nav className={styles["controlls"]}>
      {sections.map((section) => (
        <SectionButton section={section} key={section.id} />
      ))}
    </nav>
  );
}

function SectionButton({ section }: IPropsSecButton) {
  const isActive = section.isActive === true ? styles["sec-active"] : "";

  useEffect(() => {
    // console.log("Section Button Component Rendered");
    // This is the effect code
    // const GStore = new GlobalStorage();
    // GStore.setData(`sec-${section.id}`, section.id);

    addNewSection2GStore(section.id);

    return () => {
      // console.log("Cleanup");
      // This is the cleanup code
    };
  }, []);

  const handleClick = () => {
    const GStore = new GlobalStorage();
    const listSection = GStore.getData("section-list") as Array<string>;

    for (const item of listSection) {
      if (item === section.id) {
        document.getElementById(item)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`${styles["sec-control"]} ${isActive}`}
    >
      <a className={section.icon}></a>
    </div>
  );
}

function addNewSection2GStore(id: string) {
  const GStore = new GlobalStorage();
  let list_sec = [];

  if (GStore.getData("section-list") === undefined) {
    GStore.setData("section-list", [id]);
  } else {
    list_sec = [...(GStore.getData("section-list") as Array<string>), id];
    GStore.setData("section-list", [...new Set(list_sec)]);
  }
}

export default FixedSectionController;
