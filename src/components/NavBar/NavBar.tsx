import useYScrollNavMenu from "../../hooks/useYScrollNavMenu";

import { ISection } from "../../utils/globalInfo";

import styles from "./NavBar.module.css";

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

export default NavBar;
