import { AppMeta } from "newt-client-js";
import Link from "next/link";
import styles from "../styles/Header.module.css";

export function Header({ app }: { app: AppMeta }): JSX.Element {
  return (
    <header className={styles.Header}>
      <div className={styles.Header_Inner}>
        <Link href="/">
          <a href="#" className={styles.Title}>
            {app.icon?.type === "emoji" && (
              <span className={styles.Title_Icon}>{app.icon.value}</span>
            )}
            {app.icon?.type === "image" && (
              <span className={styles.Title_Icon}>
                <img src={app.icon.value} />
              </span>
            )}
            <div className={styles.Title_Text}>{app.name || app.uid || ""}</div>
          </a>
        </Link>
        <div className={styles.Link}>
          <a
            href="https://github.com/Newt-Inc/newt-blog-starter-nextjs"
            rel="noreferrer noopener"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
