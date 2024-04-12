"use client"
import styles from "./page.module.css";
import { useEffect, useState, useRef, useCallback} from 'react';

// <script src="jquery.min.js"></script>

/* SECTION 1: Barebone of the webpage 
Attributed to Kelly Tang :)
*/
// magic number of the number of sections; adjust accordingly

export default function Home() {

  /*
    const tlContents = Array.from(document.getElementsByClassName('content'));
    const tlSections = Array.from(document.getElementsByClassName('section'));
    const n = tlContents.length;
  */

    const hoverSection = (hoverIndex) => {
      const tlContents = Array.from(document.getElementsByClassName('content'));
      console.log(tlContents)
      let oldIndex = tlContents[hoverIndex].getAttribute("hover_index");
      if (oldIndex !== hoverIndex) {
        const n = tlContents.length;
        const W = 0.65;
        let offset = 0;
        for (let i = 0; i < n; i++) {
          tlContents[i].setAttribute("hover_index", hoverIndex);
          if (i === hoverIndex) {
            tlContents[i].style.left = (1 + offset) * -100 * W * i / (n + W) + "%";
          } else if (i <= hoverIndex) {
            tlContents[i].style.left = -100 * W * i / (n + W) + "%";
          } else {
            tlContents[i].style.left = 100 * ((n - i) * W / (n + W)) + "%";
          }
        }
      }
    };

    const leaveSection = (hoverIndex) => {
      const tlContents = Array.from(document.getElementsByClassName('content'));
      const oldIndex = tlContents[hoverIndex].getAttribute("hover_index");
      if (oldIndex !== null) {
        for (let i = 0; i < n - 1; i++) {
          tlContents[i].setAttribute("hover_index", null);
          tlContents[i].style.left = 0;
        }
      }
    };

  /* 
  useEffect(() => {
  const tlContents = document.getElementsByClassName('content');
  const tlSections = document.getElementsByClassName('section');
  const n = tlContents.length;
  })

  const [hoverIndex, setHoverIndex] = useState(null);
  const handleMouseOver = (index) => {
    setHoverIndex(index);
    let oldIndex = tlContents[hoverIndex].getAttribute("hover_index");
      if (oldIndex !== hoverIndex) {
        const n = tlContents.length;
        const W = 0.65;
        let offset = 0;
        for (let i = 0; i < n; i++) {
          tlContents[i].setAttribute("hover_index", hoverIndex);
          if (i === hoverIndex) {
            tlContents[i].style.left = (1 + offset) * -100 * W * i / (n + W) + "%";
          } else if (i <= hoverIndex) {
            tlContents[i].style.left = -100 * W * i / (n + W) + "%";
          } else {
            tlContents[i].style.left = 100 * ((n - i) * W / (n + W)) + "%";
          }
        }
      }
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
    const oldIndex = tlContents[hoverIndex].getAttribute("hover_index");
      if (oldIndex !== null) {
        for (let i = 0; i < n - 1; i++) {
          tlContents[i].setAttribute("hover_index", null);
          tlContents[i].style.left = 0;
        }
      }
  };


  /*
    const tlContents = useRef(null);
    const [hoverIndex, setHoverIndex] = useState(null);
    
    const handleMouseOver = useCallback((index) => {
      setHoverIndex(index);
      const contents = tlContents.current.children;
      const n = contents.length;
      const W = 0.65;
  
      let oldIndex = contents[index]?.getAttribute("hover_index");
      if (oldIndex !== index.toString()) {
        let offset = 0;
        for (let i = 0; i < n; i++) {
          contents[i].setAttribute("hover_index", index.toString());
          if (i === index) {
            contents[i].style.left = `${(1 + offset) * -100 * W * i / (n + W)}%`;
          } else if (i <= index) {
            contents[i].style.left = `${-100 * W * i / (n + W)}%`;
          } else {
            contents[i].style.left = `${100 * ((n - i) * W / (n + W))}%`;
          }
        }
      }
    }, []);
  
    const handleMouseLeave = useCallback(() => {
      setHoverIndex(null);
      const contents = tlContents.current.children;
      const n = contents.length;
  
      for (let i = 0; i < n; i++) {
        contents[i].setAttribute("hover_index", null);
        contents[i].style.left = '0';
      }
    }, []);
*/
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
            <div className={styles.content} 
                 onMouseOver={() => hoverSection(0)}
                 onMouseLeave={() => leaveSection(0)}>
              <div className={styles.pinLine}></div>
              <div className={styles.pinLineCover}></div>
              <div className={styles.pin}></div>
              <div className={styles.dot}></div>
              <p className={styles.sectionTitle}>Outreach</p>
              <div className={styles.sectionText}>
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
        <div className={styles.section} style={{'--tl-pos': 2}}>
        <div className={styles.stage2}>
          <div className={styles.content}>
            <div className={styles.pinLine}></div>
            <div className={styles.pinLineCover}></div>
            <div className={styles.pin}></div>
            <div className={styles.dot}></div>
            <p className={styles.sectionTitle}>Matching</p>
            <div className={styles.sectionText}>
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
        <div className={styles.section} style={{'--tl-pos': 3}}>
        <div className={styles.stage3}>
          <div className={styles.content}>
            <div className={styles.pinLine}></div>
            <div className={styles.pinLineCover}></div>
            <div className={styles.pin}></div>
            <div className={styles.dot}></div>
            <p className={styles.sectionTitle}>Design</p>
            <div className={styles.sectionText}>
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
                Developers work towards their projects with productive weekly
                meetings and tasks. Teams discuss their progress with the whole
                club in general meetings.
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
            <p className={styles.sectionTitle}>Finalize</p>
            <div className={styles.sectionText}>
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
             
        <div className= {styles.centerTexts}>
          <h2 className={styles.subtitle}>Thanks to All Our Sponsors! </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className={styles.imageContainer}>
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



