"use client"
import styles from "./page.module.css";
import { useEffect, useState, useRef, useCallback} from 'react';

// <script src="jquery.min.js"></script>

/* SECTION 1: Barebone of the webpage 
Attributed to Kelly Tang :)
*/
// magic number of the number of sections; adjust accordingly

export default function Home() {
  const contentRef = useRef(null);
  useEffect(() => {
    const tlContents = document.getElementsByClassName(styles.content);
    const tlSections = document.getElementsByClassName(styles.section);
    const n = tlContents.length;

    function hoverSection(hover_index) {
      let old_index = tlContents[hover_index].getAttribute("hover_index")
      if(old_index != hover_index) {
          let W = 0.65
          let offset = 0
          for ( i = 0; i < n - 1; i++ ) {
              tlContents[i].setAttribute("hover_index", hover_index)
              if(i == hover_index) {
                  tlContents[i].style.left = (1 + offset) * -100 * W * i / (n+W) + "%";
              } else if(i <= hover_index) {
                  tlContents[i].style.left = -100*W*i/(5+W) + "%";
              } else {
                  tlContents[i].style.left = 100*((n-i)*W/(n + W)) + "%"
              }
          }
      }
    }
        
    function leaveSection(hover_index) {
      let old_index = tlContents[hover_index].getAttribute("hover_index")
      if(old_index != null) {
          for (var i = 0; i < n; i++ ) { // before, up to "4"
              tlContents[i].setAttribute("hover_index", null);
              tlContents[i].style.left = 0;
          }
      }
    }

    for (var i = 0; i < n; i++ ) {
      ((i) => {
          tlContents[i].setAttribute("hover_index", null)
          tlSections[i].addEventListener("mouseover", () => hoverSection(i))
          tlSections[i].addEventListener("mouseleave", () => leaveSection(i))
      })(i)
    }
  })

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.imageContainer}>
          <img src='/Aerial of whale 356.jpg' className={styles.backgroundImage}></img>
          <h1 className={styles.title}>All of us are listening. <br/>
            Will you?</h1>
          
        </div>
        <div className={styles.mainTexts}>
          <h2 className={styles.subtitle}> Our Mission </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className={styles.mainTexts}>
            <h2 className={styles.subtitle}>Documentary Creation Outline <br/></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        
        <div className={styles.timeline}>
        <div className={styles.bottomLine}></div>
        <div className={styles.section} style={{'--tl-pos': 1}}>
          <div className={styles.stage1}>
            <div className={styles.content} ref={contentRef}>
              <div className={styles.pinLine}></div>
              <div className={styles.pinLineCover}></div>
              <div className={styles.pin}></div>
              <div className={styles.dot}></div>
              <p className={styles.sectionTitle}>Outreach</p>
              <div className={styles.sectionText}>
                <h1>Outreach</h1>
                <p>
                Am no an listening depending up believing. Enough around 
                remove to barton agreed regret in or it. Advantage mr estimable 
                be commanded provision. Year well shot deny shew come now had. 
                Shall downs stand marry taken his for out. Do related mr account 
                brandon an up.  
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section} style={{'--tl-pos': 2}}>
        <div className={styles.stage2}>
          <div className={styles.content}>
            <div className={styles.pinLine}></div>
            <div className={styles.pinLineCover}></div>
            <div className={styles.pin}></div>
            <div className={styles.dot}></div>
            <p className={styles.sectionTitle}>Design</p>
            <div className={styles.sectionText}>
              <h1>Design</h1>
              <p>
                Am no an listening depending up believing. Enough around 
                remove to barton agreed regret in or it. Advantage mr estimable 
                be commanded provision. Year well shot deny shew come now had. 
                Shall downs stand marry taken his for out. Do related mr account 
                brandon an up. 
              </p>
            </div>
            </div>
          </div>
        </div>
        <div className={styles.section} style={{'--tl-pos': 3}}>
        <div className={styles.stage3}>
          <div className={styles.content}>
            <div className={styles.pinLine}></div>
            <div className={styles.pinLineCover}></div>
            <div className={styles.pin}></div>
            <div className={styles.dot}></div>
            <p className={styles.sectionTitle}>Film</p>
            <div className={styles.sectionText}>
              <h1>Film</h1>
              <p>
                Am no an listening depending up believing. Enough around 
                remove to barton agreed regret in or it. Advantage mr estimable 
                be commanded provision. Year well shot deny shew come now had. 
                Shall downs stand marry taken his for out. Do related mr account 
                brandon an up. 
              </p>
            </div>
            </div>
          </div>
        </div>
        <div className={styles.section} style={{'--tl-pos': 4}}>
        <div className={styles.stage4}>
          <div className={styles.content}>
            <div className={styles.pinLine}></div>
            <div className={styles.pinLineCover}></div>
            <div className={styles.pin}></div>
            <div className={styles.dot}></div>
            <p className={styles.sectionTitle}>Build</p>
            <div className={styles.sectionText}>
              <h1>Build</h1>
              <p>
                Am no an listening depending up believing. Enough around 
                remove to barton agreed regret in or it. Advantage mr estimable 
                be commanded provision. Year well shot deny shew come now had. 
                Shall downs stand marry taken his for out. Do related mr account 
                brandon an up. 
              </p>
            </div>
            </div>
          </div>
        </div>
        <div className={styles.section} style={{'--tl-pos': 5}}>
        <div className={styles.stage5}>
          <div className={styles.content}>
            <div className={styles.pinLine}></div>
            <div className={styles.pinLineCover}></div>
            <div className={styles.pin}></div>
            <div className={styles.dot}></div>
            <p className={styles.sectionTitle}>Show</p>
            <div className={styles.sectionText}>
              <h1>Show</h1>
              <p>
                Am no an listening depending up believing. Enough around 
                remove to barton agreed regret in or it. Advantage mr estimable 
                be commanded provision. Year well shot deny shew come now had. 
                Shall downs stand marry taken his for out. Do related mr account 
                brandon an up.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className= {styles.centerTexts}>
        <h2 className={styles.subtitle}>Thanks to All Our Sponsors! </h2>
        
      </div>       
      <div className= {styles.centerTexts}>
        <h2 className={styles.subtitle}> Accepted Film Festival Images </h2>
        <p>Here is a list of film festival images our documentary is accepted into</p>
      </div>

        <div className={styles.gridContainer}>
          <div class={styles.gridItem}> 
            <img src='/film_festival_pic/laurel_7th.png' className={styles.backgroundImage}></img>
          </div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>  
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>  
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>  
          <img src='/plastic_ocean_sponsors.png' className={styles.backgroundImage}></img>
        </div>
        
      </div>
    </main>
  );
}


/* SECTION 2: Navbar 
Attributed to Thomas Culhane :)
*/




// TODO: fix the issue of "$"
// var tl_contents = $('.tl-content').toArray();
// var tl_sections = $('.tl-section').toArray();
/* var tl_contents = document.getElementsByClassName("tl-content")
var tl_sections = document.getElementsByClassName("tl-co")

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


