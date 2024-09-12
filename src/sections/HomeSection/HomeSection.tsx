import { useContext } from "react"

import { DataContext } from "../../context/DataProvider"

import { BackGround, Image, Tittle, SingleText, IconLink } from "../../components";

import styles from "./HomeSection.module.css"

import '../../index.css'
import { CenterLayout, Frame, GridLayout1D } from "../../components/Layouts";
import { WhoIam } from '../../components/Sections'







export function HomeSection() {

  const { data } = useContext(DataContext);
  const { ProfileImage } = data.Home;

  // console.log(data.Home);

  return (
    <>
      <BackGround id="home" img="/assets/bg2.png" className={styles["home-sec"]}>

        <CenterLayout>

          <GridLayout1D distribution="40% auto">

            <Frame frameSize={ {height: "300px", width: "300px"} }>
              <Image src={ProfileImage} />
            </Frame>

            <WhoIam Home={data.Home} />

          </GridLayout1D>

        </CenterLayout>

      </BackGround>
    </>
  );
}
