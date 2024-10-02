import React from "react";
import styles from "./PresentationSection.module.css";

import { iBio, iParagraph, iSummaries, iSummary } from "../../../../interfaces"
import { CenterLayout, GridLayout1D, VerticalLayout } from "../../../../components/Layouts";
import { SingleText, Tittle } from "../../../../components"
import { SummaryCard } from "../../../../components/Sections";


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

  // console.log("[PRESENTATION-SEC]", ObjBio, ObjSummary);

  return (
    <>
      <section id="presentation" className={styles["presentation-sec"]}>

        <CenterLayout>
          <Tittle
            className={styles['presentation-title']}
          >
            ABOUT ME
          </Tittle>
        </CenterLayout>


        <GridLayout1D distribution="40% auto">

          <VerticalLayout className={styles['presentation-bio']}>
            {
              ObjBio.bio.map((paragraph: iParagraph) => {
                return (
                  <SingleText key={paragraph.key}
                    className={styles['presentation-bio-paragraph']}
                  >
                    {paragraph.text.text}
                  </SingleText>
                )
              })
            }
          </VerticalLayout>

          <GridLayout1D distribution="50% auto"
            className={styles['presentation-summary']}>
            {
              ObjSummary.summaries.map((summary: iSummary) => {
                return (
                  <SummaryCard summary={summary} key={summary.key} />
                )
              })
            }
          </GridLayout1D>

        </GridLayout1D>

      </section>
    </>
  );
}

export { PresentationSection };