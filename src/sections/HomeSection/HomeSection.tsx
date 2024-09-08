import { useContext } from "react"

import { DataContext } from "../../context/DataProvider"

import { BackGround, Image, Tittle, SingleText, IconLink } from "../../components";

import styles from "./HomeSection.module.css"

import '../../index.css'
import { CenterLayout, GridLayout1D } from "../../components/Layouts";
import { WhoIam } from '../../components/Home'






export function HomeSection() {

  const { data } = useContext(DataContext);
  const { ProfileImage } = data.Home;

  console.log(data.Home);

  return (
    <>
      <BackGround id="home" img="/assets/bg2.png" className={styles["home-sec"]}>

        <CenterLayout>

          <GridLayout1D distribution="40% auto">
            
            <Image img={ProfileImage}/>

            <WhoIam Home={data.Home}/>

          </GridLayout1D>

        </CenterLayout>

      </BackGround>
    </>
  );
}
