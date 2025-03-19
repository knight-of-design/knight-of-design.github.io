import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header>
        <h1>James Knight&apos;s</h1>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />Website</header>
        
            <code>Under development...</code>
          

        
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/knightofdesign"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to my LinkedIn →
        </a>
      </footer>
    </div>
  );
}
