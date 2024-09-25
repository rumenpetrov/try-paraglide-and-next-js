import Image from "next/image";
import * as m from "@/paraglide/messages.js";
import styles from "./page.module.css";
import Page from "@/components/page/page";

export async function generateMetadata() {
  return {
    title: m.page_home_title(),
    description: m.page_home_description(),
  };
}

export default function Home() {
  return (
    <Page className={styles.root}>
      <h1>{m.page_home_title()}</h1>
      <Image
        className={styles.logo}
        src="https://nextjs.org/icons/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <ol>
        <li>{m.steps_one()}</li>
        <li>{m.steps_two()}</li>
      </ol>

      <div className={styles.ctas}>
        <a
          className={styles.primary}
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.logo}
            src="https://nextjs.org/icons/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          {m.page_home_deploy_action()}
        </a>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondary}
        >
          {m.page_home_read_docs_action()}
        </a>
      </div>
    </Page>
  );
}
