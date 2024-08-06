import BackGround from "../../components/Background/Background";

import styles from "./HomeSection.module.css"

export function HomeSection() {


  return (
    <>
      <BackGround id="home" img="../../public/assets/bg2.png" className={styles["home-sec"]}>
        <div>Hello World</div>
      </BackGround>
    </>
  );
}
