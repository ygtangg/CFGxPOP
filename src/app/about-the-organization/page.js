import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>This was a <br /> GIANT collaboration</h1>
        <h2>We would like to thank ... for sponsoring ths project.<br />Without you guys we would not be able to ...</h2>
        <div class="slideshow-container">
          <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <img src="https://www.plasticoceanproject.org/uploads/1/3/2/4/132466152/img-5483-2_orig.jpg"></img>
            <div class="text">Caption Text</div>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">2 / 3</div>
            <img src="img2.jpg"></img>
            <div class="text">Caption Two</div>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">3 / 3</div>
            <img src="img3.jpg"></img>
            <div class="text">Caption Three</div>
          </div>

          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <div>
          <span class="dot" onclick="currentSlide(1)"></span>
          <span class="dot" onclick="currentSlide(2)"></span>
          <span class="dot" onclick="currentSlide(3)"></span>
        </div>

        <img src="https://www.plasticoceanproject.org/uploads/1/3/2/4/132466152/img-5483-2_orig.jpg"></img>
        <h1>Plastic Ocean Project</h1>
        <p>test</p>
      </div>
    </main>
  );
}
