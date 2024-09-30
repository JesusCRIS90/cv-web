import { BackGround, Image } from "../../components";
import { CenterLayout, Frame, GridLayout1D, VerticalLayout } from "../../components/Layouts";

import styles from "./HomeSection.module.css"

import '../../index.css'
import { ContextStore } from "../../context";
import { useContext, useEffect } from "react";
import { iContact, iProfileImage, iWhoIAm } from "../../interfaces";
import { WhoIam } from "../../components/Sections";
import { ContactBar } from "../../components/Contact/ContactBar/ContactBar"


export function HomeSection() {

  const { appManager } = useContext(ContextStore);

  const profileImage = appManager.getContext<iProfileImage>("PROFILE-IMAGE")?.getData();
  const whoIamData = appManager.getContext<iWhoIAm>("WHO-I-AM")?.getData();
  const contactData = appManager.getContext<iContact>("CONTACT")?.getData();

  return (
    <>
      <BackGround id="home" img="/assets/bg2.png" className={styles["home-sec"]}>

        <CenterLayout className={styles['home-sec-content-layout']}>

          <GridLayout1D distribution="40% auto">

            <Frame frameSize={{ height: "300px", width: "300px" }} 
              className={styles['home-sec-profile-image']}>
              {
                ( profileImage === undefined ) 
                  ? <></>
                  : <Image src={profileImage?.profileImage.src} />
              }
            </Frame>

            <VerticalLayout className={styles['home-sec-right-col']}>

              <WhoIam ObjData={whoIamData} />
              <ContactBar ObjData={contactData}/>
            
            </VerticalLayout>


          </GridLayout1D>

        </CenterLayout>

      </BackGround>
    </>
  );
}
