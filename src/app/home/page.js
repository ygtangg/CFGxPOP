import styles from "./page.module.css";
/*import { useSpring, animated } from 'react-spring';

const animation = useSpring({
  marginLeft: clicked ? 400 : 0, // Move the box 400px to the right when clicked
});*/

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
          <p><i>If the Ocean Could Talk</i> is a documentary about plastic pollution in the Atlantic Ocean filmed through the lens of saving <i>356</i>, a newborn right whale killed and found on the shores of Cape Hatteras, NC. The full length documentary explores the death of <i>365</i> and various human activities that may have caused it, as well as the impact those human activities have on aquatic wildlife and the Coastal Atlantic ecosystem as a whole. Through the story of <i>356</i>, we hope that viewers take away a better understanding of what they can do to help save the whales, and in doing so, save the marine ecosystem as a whole.</p>
        </div>
        <div class={styles.showings_title}>
          <h2>On Screen: <b>6/8/2024</b></h2>
        </div>
        <div class={styles.showings_list} /*style={{...animation}}*/>
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
