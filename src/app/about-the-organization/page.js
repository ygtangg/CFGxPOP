import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.horizontalSpace}>
        <div className={styles.verticalSpace}>
          <div>
            <h1>This was a <br /> GIANT collaboration</h1>
            <div style={{marginTop: "50px"}}></div>
            <h3>We would like to thank ... for sponsoring ths project.<br />Without you guys we would not be able to ...</h3>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.singleImage} src="https://www.plasticoceanproject.org/uploads/1/3/2/4/132466152/img-5483-2_orig.jpg"></img>
        </div>
      </div>

      <div className={styles.horizontalSpace}>
        {/* PUT IMAGE CAROUSEL HERE */}
      </div>
    </div>
  );
}

