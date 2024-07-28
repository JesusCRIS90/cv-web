import { useEffect } from "react";
import { GlobalStorage } from "../../utils/GlobalStorege";

import { ISection } from "../../utils/globalInfo";
import styles from "./NavBar.module.css";
import useYScrollController from "../../hooks/useYScrollController";
import useYScrollNavMenu from "../../hooks/useYScrollNavMenu";

export interface IPropsNavButton {
  section: ISection;
}

export interface IPropsNavMenu {
  sections: ISection[];
}

function NavBar() {
  // const { reduxSections } = useYScrollController(true);
  const { reduxSections } = useYScrollNavMenu(true);

  return (
    <>
      <NavMenu sections={reduxSections} />
    </>
  );
}

function NavMenu({ sections }: IPropsNavMenu) {
  
  // // Only to verify Values in GlobalStorage
  // useEffect(() => {
  //   console.log(new GlobalStorage());
  //   return () => {};
  // }, []);

  return (
    <nav className={styles["controlls"]}>
      {sections.map((section) => (
        <NavButton section={section} key={section.id} />
      ))}
    </nav>
  );
}

function NavButton({ section }: IPropsNavButton) {

  const { getSectionIdList } = useYScrollNavMenu();

  const isActive = section.isActive === true ? styles["sec-active"] : "";

  // useEffect(() => {
  //   addNewSection2GStore(section.id);

  //   return () => {
  //     // This is the cleanup code
  //   };
  // }, []);

  const handleClick = () => {
    const listSection = getSectionIdList();

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

export default NavBar;
