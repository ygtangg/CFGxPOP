"use client"
import styles from "./page.module.css";
<script src="jquery.min.js"></script>

/* SECTION 1: Barebone of the webpage 
Attributed to Kelly Tang :)
*/

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div class={styles.imageContainer}>
          <img src='/Aerial of whale 356.jpg' className={styles.backgroundImage}></img>
          <h1 class={styles.title}>All of us are listening. <br/>
            Will you?</h1>
          
        </div>
        <div class={styles.mainTexts}>
          <h2 class={styles.subtitle}> Our Mission </h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>

        <div class={styles.mainTexts}>
            <h2 class={styles.subtitle}>Documentary Creation Outline <br/></h2>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
       
        <div id="tl-bottom-line">
          
        </div>
       
      
        <div class= {styles.centerTexts}>
          <h2 class={styles.subtitle}>Thanks to All Our Sponsors! </h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>

        <div class={styles.imageContainer}>
          <img src='/plastic_ocean_sponsors.png' className={styles.backgroundImage}></img>
        </div>
        
      </div>
    </main>
  );
}


/* SECTION 2: Navbar 
Attributed to Thomas Culhane :)
*/


// magic number of the number of sections; adjust accordingly
let n = 5; 

// TODO: fix the issue of "$"
// var tl_contents = $('.tl-content').toArray();
// var tl_sections = $('.tl-section').toArray();

function hoverSection(hover_index) {
  old_index = tl_contents[hover_index].getAttribute("hover_index")
  if(old_index != hover_index) {
      let W = 0.65
      let offset = 0
      for ( i = 0; i < 4; i++ ) {
          tl_contents[i].setAttribute("hover_index", hover_index)
          if(i == hover_index) {
              tl_contents[i].style.left = (1 + offset) * -100 * W * i / (n+W) + "%";
          } else if(i <= hover_index) {
              tl_contents[i].style.left = -100*W*i/(n+W) + "%";
          } else {
              tl_contents[i].style.left = 100*((n-i)*W/(n + W)) + "%"
          }
      }
  }
}

// TODO: modify the magic number "5" to arbitrary n

function leaveSection(hover_index) {
  old_index = tl_contents[hover_index].getAttribute("hover_index")
  if(old_index != null) {
      for (var i = 0; i < n-1; i++ ) { // before, up to "4"
          tl_contents[i].setAttribute("hover_index", null);
          tl_contents[i].style.left = 0;
      }
  }
}

for (var i = 0; i < n; i++ ) {
  ((i) => {
      tl_contents[i].setAttribute("hover_index", null)
      tl_sections[i].addEventListener("mouseover", () => hoverSection(i))
      tl_sections[i].addEventListener("mouseleave", () => leaveSection(i))
  })(i)
}



