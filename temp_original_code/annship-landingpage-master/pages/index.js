import styles from "../styles/Home.module.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer";
import AnyTimeAndWhere from "../components/AnyTimeAndWhere";
import WhatCanDo from "../components/WhatCanDo";
import WeDoing from "../components/WeDoing";
import Question from "../components/Question";
import GetToday from "../components/GetToday";
import Meet from "../components/Meet";
import Carries from "../components/Carries";
export default function Home() {
  return (
    <div className={styles.containerBox}>
      <main className={styles.container}>
        <Header />
        <AnyTimeAndWhere />
        <Carries />
        <WhatCanDo />
        {/*<WeDoing />*/}
        {/*<Meet />*/}
        <Question />
        <GetToday />
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}
