import * as m from "@/paraglide/messages.js";
import Page from "@/components/page/page";
import { Link } from "@/lib/i18n";
import styles from "./page.module.css";

export async function generateMetadata() {
  return {
    title: m.page_blog_list_title(),
    description: m.page_blog_list_description(),
  };
}

export default function Blog() {
  return (
    <Page>
      <h1>{m.page_blog_list_title()}</h1>

      <p>{m.page_blog_list_description()}</p>

      <nav>
        <Link href="/blog/1" className={styles.card}>
          {m.page_blog_details_title()} 1
        </Link>

        <Link href="/blog/2" className={styles.card}>
          {m.page_blog_details_title()} 2
        </Link>
      </nav>
    </Page>
  );
}
