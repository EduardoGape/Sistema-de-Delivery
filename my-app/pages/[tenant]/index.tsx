import styles from '../../styles/Home.module.css';
import { SearchInput } from '../../components/SearchInput/index';

const Home =  () => {
  const handleSearch = (searchValue: string) =>{

  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja Bem Vindo (a)</div>
            <div className={styles.headerSubtitle}>O que deseja pra hoje?</div>
          </div>
          <div className={styles.headerTopRight}>
              <div className={styles.menuButton}>
                  <div className={styles.menuButtonLine}></div>
                  <div className={styles.menuButtonLine}></div>
                  <div className={styles.menuButtonLine}></div>
              </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput mainColor="#fb9400" onSearch={() => null}/>
        </div>
      </header>
    </div>
  )
}

export default Home
