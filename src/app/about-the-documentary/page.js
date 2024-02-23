import styles from "../globals.css";

// TODO: add some spacing between "Will you?" and "Our Mission"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1> All of us are listening. <br/>
         Will you? </h1>
  
        <h2> Our Mission </h2>
        <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
           velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
           occaecat cupidatat non proident, sunt in culpa qui 
           officia deserunt mollit anim id est laborum." </p>

        

      </div>
    </main>
  );
}
