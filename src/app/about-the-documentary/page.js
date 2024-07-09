/* eslint-disable @next/next/no-img-element */
"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useRef} from 'react';
// <script src="jquery.min.js"></script>
/* SECTION 1: Barebone of the webpage */
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
      <div className={styles.imageContainer}>
        <picture>
          <img src='about_doc/right_whale.jpg' className={styles.background_image} alt="right whale"></img>
        </picture>
        <div className={styles.overlay}> </div>
        <h1 className={styles.title}>All of us are listening.<br/>
          Will you?</h1>
      </div>

      <div className={styles.mainTexts}>
        <h2 style={{color: "rgb(67, 130, 178)"}}>Documentary Creation Outline</h2>
        <p>In 2019, we started what we thought would be a documentary about the North Atlantic Ocean, comprised of unique 
          characteristics and complex systems, home to a wide range of organisms vocalizing below the ocean&apos;s surface. A 
          film delicately balancing the beautiful sounds and scenes of the marine world contrasted against its destruction caused 
          by human impacts.</p>
        <p>What we didn&apos;t foresee is a story much more compelling, a &quot;who done it,&quot; following the death of a newborn 
          critically endangered North Atlantic right whale.</p> 
        <p>Was it manmade noise that caused the mother to lose her newborn, a ship strike, chemical or plastic pollution, was it discarded 
            fishing gear or overfishing?</p> 
        <p>We learn from marine experts what happened to this infant right whale, why this species and others are destined for extinction, 
            and why it matters. The documentary dives deep into viable solutions that everyone can support in order to preserve the sounds of 
            the sea and the marine life in it.</p>
      </div>
      
      {/* Timeline */}
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

      {/* Laurels for short film 356 */}
      <div className={styles.laurels}>
        <div className= {styles.centerTexts}>
          <p>- The journey to find the oceans calling begins in our short documentary -</p>
          <h2 style={{color: "rgb(67, 130, 178)"}}><i>356: How the loss of one whale could save his entire species</i></h2>
          <p>To date, &quot;356&quot; has been accepted into
            <span style={{color: "rgb(67, 130, 178)"}}> 19 </span>
            film festivals:
          </p>
        </div>
        <div className={styles.laurel_grid_container}>
            <div class={styles.grid_item}> 
              <img src='laurel/seoul.png' alt="Seoul International Short Film Festival"></img>
            </div>
            <div class={styles.grid_item}> 
              <img src='laurel/winner.png' alt="Winner Sofia International Frilm Festival"></img>
            </div>
            <div class={styles.grid_item}> 
              <img src='laurel/toronto_indie.png' alt="Toronto Indie Filmmakers Festival"></img>
            </div>
            <div class={styles.grid_item}> 
              <img src='laurel/agiff.PNG' alt="AGIFF Semi-Finalist"></img>
            </div>
            <div class={styles.grid_item}> 
              <img src='laurel/biff.PNG' alt="BIFF 2024"></img>
            </div>
            <div class={styles.grid_item}>
              <img src='laurel/rome_women.png' alt="Rome Women Film Festival"></img>
            </div>
            <div class={styles.grid_item}> 
              <img src='laurel/tokyo_official.png' alt="Tokyo International Short Film Festival"></img>
            </div>
            <div class={styles.grid_item}> 
              <img src='laurel/your_way.PNG' alt="You Way Film Festival"></img>
            </div>
            <div class={styles.grid_item}> 
              <img src='laurel/ny_tri_state.png' alt="New York Tri-State"></img>
            </div>
            <div class={styles.grid_item}> 
              <img src='laurel/new_wave.png' alt="New Wave Short Film Festival"></img>
            </div>
            <div class={styles.grid_item}> 
              <img src='laurel/nnf.png' alt="Near Nazareth Festival"></img>
            </div>
            <div class={styles.grid_item}> 
              <img src='laurel/roma.png' alt="Roma Short Film Festival"></img>
            </div>
            <div class={styles.grid_item}> 
              <img src='laurel/golden_tree.png' alt="7th Golden Tree"></img>
            </div>
            <div class={styles.grid_item}> 
              <img src='laurel/fiin.png' alt="FIIN"></img>
            </div>
            <div class={styles.grid_item}> 
              <img src='laurel/longleaf.png' alt="Longleaf Film Festival"></img>
            </div>
            <div class={styles.grid_item}> 
              <img src='laurel/awareness.png' alt="Awareness Festival"></img>
            </div>
            <div class={styles.grid_item}> 
              <img src='laurel/indigo_moon.png' alt="Indigo Moon Film Fest"></img>
            </div>
            <div class={styles.grid_item}> 
              <img src='laurel/vero_beach.png' alt="Vero Beach Film Festival"></img>
            </div>
            <div class={styles.grid_item}> 
              <img src='laurel/raleigh.png' alt="Raleigh Film & Art Festival"></img>
            </div>
        </div>
      </div>

      {/* ITOCT Sponsers */}
      <div className={styles.sponsors}>
        <div className= {styles.centerTexts}>
          <h2>Thanks to All Our Sponsors! </h2>
          <p style={{color: "rgb(67, 130, 178)"}}><i>If the Ocean Could Talk</i> and <i>356</i> are a production of </p>
        </div>  
        <img src='sponsor/production.png' className={styles.sponsor_image} alt="Fil production sponsors"></img>
        <div className= {styles.centerTexts}>
          <p style={{color: "rgb(67, 130, 178)"}}><i>If the Ocean Could Talk</i> is supported by </p>
        </div> 
        <div className={styles.sponsor_grid_container}>
          <div class={styles.grid_item}> 
            <Link href="https://www.relionbattery.com/">
              <img src='sponsor/relion.png' alt="Relion"></img>
            </Link>
          </div>
          <div class={styles.grid_item}> 
            <Link href="https://wilmingtongi.com/">
              <img src='sponsor/wilmington_gastroenterology.png' alt="Wilmington Gastroenterology"></img>
            </Link>
          </div>
          <div class={styles.grid_item}> 
            <Link href="https://www.liveoaksmiles.com/">
              <img src='sponsor/live_oak.png' alt="Live Oak Dental"></img>
            </Link>
          </div>
          <div class={styles.large_grid_item}> 
            <Link href="https://www.plaineproducts.com/shop/?utm_source=google&utm_medium=cpc&utm_campaign=15027549080&utm_adgroup=128228512989&utm_position=&utm_term=plaine%20products&gad=1&gclid=CjwKCAjw7oeqBhBwEiwALyHLM_3UZeFlT23tUdjUHi6T2q4LMLn7ZSSY54yXRWNH3gRWkP_uPHoE0BoCJDIQAvD_BwE">
              <img src='sponsor/plaineproducts.png' alt="Plaine products"></img>
            </Link>
          </div>
        </div>        
      </div>
    </main>
  );
}