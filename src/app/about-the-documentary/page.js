"use client"
import styles from "./page.module.css";
// <script src="jquery.min.js"></script>

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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div class={styles.mainTexts}>
            <h2 class={styles.subtitle}>Documentary Creation Outline <br/></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        
        <div class={styles.timeline}>
        <div class={styles.bottomLine}></div>
        <div class={styles.section} style={{'--tl-pos': 1}}>
          <div class={styles.stage1}>
            <div class={styles.content}>
              <div class={styles.pinLine}></div>
              <div class={styles.pinLineCover}></div>
              <div class={styles.pin}></div>
              <div class={styles.dot}></div>
              <p class={styles.sectionTitle}>Outreach</p>
              <div class={styles.sectionText}>
                <h1>Outreach</h1>
                <p>
                  First, we reach out to nonprofit and humanitarian
                  organizations, and work with them to find projects that best
                  help them achieve their goals.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class={styles.section} style={{'--tl-pos': 2}}>
        <div class={styles.stage2}>
          <div class={styles.content}>
            <div class={styles.pinLine}></div>
            <div class={styles.pinLineCover}></div>
            <div class={styles.pin}></div>
            <div class={styles.dot}></div>
            <p class={styles.sectionTitle}>Matching</p>
            <div class={styles.sectionText}>
              <h1>Matching</h1>
              <p>
                We match each CFG developer with a compatible project team, with
                an eye toward balancing experience levels and enthusiasm for the
                nonprofit’s cause.
              </p>
            </div>
            </div>
          </div>
        </div>
        <div class={styles.section} style={{'--tl-pos': 3}}>
        <div class={styles.stage3}>
          <div class={styles.content}>
            <div class={styles.pinLine}></div>
            <div class={styles.pinLineCover}></div>
            <div class={styles.pin}></div>
            <div class={styles.dot}></div>
            <p class={styles.sectionTitle}>Design</p>
            <div class={styles.sectionText}>
              <h1>Design</h1>
              <p>
                Each group plans out and designs all aspects of the project,
                building a visual prototype to incorporate feedback from the
                organization.
              </p>
            </div>
            </div>
          </div>
        </div>
        <div class={styles.section} style={{'--tl-pos': 4}}>
        <div class={styles.stage4}>
          <div class={styles.content}>
            <div class={styles.pinLine}></div>
            <div class={styles.pinLineCover}></div>
            <div class={styles.pin}></div>
            <div class={styles.dot}></div>
            <p class={styles.sectionTitle}>Build</p>
            <div class={styles.sectionText}>
              <h1>Build</h1>
              <p>
                Developers work towards their projects with productive weekly
                meetings and tasks. Teams discuss their progress with the whole
                club in general meetings.
              </p>
            </div>
            </div>
          </div>
        </div>
        <div class={styles.section} style={{'--tl-pos': 5}}>
        <div class={styles.stage5}>
          <div class={styles.content}>
            <div class={styles.pinLine}></div>
            <div class={styles.pinLineCover}></div>
            <div class={styles.pin}></div>
            <div class={styles.dot}></div>
            <p class={styles.sectionTitle}>Finalize</p>
            <div class={styles.sectionText}>
              <h1>Finalize</h1>
              <p>
                Finally, teams can make any requested adjustments and ensure the
                project is polished before shipping it to the organizations.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
             
        <div class= {styles.centerTexts}>
          <h2 class={styles.subtitle}>Thanks to All Our Sponsors! </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
// TODO: document.getElementsByClassName("tl-content").
/*
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
*/


