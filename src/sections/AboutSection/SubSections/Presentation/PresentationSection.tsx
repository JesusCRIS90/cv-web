import React from "react";
import styles from "./PresentationSection.module.css";

import { iBio, iSummaries } from "../../../../interfaces"

export interface PresentationsPorps {
  ObjBio: iBio | undefined,
  ObjSummary: iSummaries | undefined,
}

const PresentationSection: React.FC<PresentationsPorps> = ({
  ObjBio = undefined,
  ObjSummary = undefined,
}) => {

  if (ObjBio === undefined || ObjSummary === undefined) {
    return <></>
  }

  console.log("[PRESENTATION-SEC]",ObjBio, ObjSummary);

  return (
    <>
      <section id="presentation" className={styles["presentation-sec"]}>


      </section>
    </>
  );
}

export { PresentationSection };