import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div class='trailer'>
          <video width="100%" height="700" autoplay='' muted controls>
            <source src="\356_trailer__2160p__730.mp4" type="video/mp4" />
          </video>
        </div>
        <div class={styles.title}>
          <h1>If the Ocean Could Talk:</h1>
          <h1>A Voice for the North Atlantic</h1>
        </div>
        <div class={styles.intro}>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <div class={styles.showings_title}>
          <h2>On Screen: <b>6/8/2024</b></h2>
        </div>
        <div class={styles.showings_list}>
          <ul>
            <li><h2>Showings:</h2></li>
            <li><h3>Evans Hall - 6/8/2024</h3></li>
            <li><h3>Main Stacks - 6/9/2024</h3></li>
            <li><h3>Unit 2 Basement - 7/11/2024</h3></li>
            <li><h3>Soda Hall Showers - 7/28/2024</h3></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
