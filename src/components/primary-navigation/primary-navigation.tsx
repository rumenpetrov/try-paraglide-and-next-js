import { Link } from "@/lib/i18n";
import * as m from "@/paraglide/messages.js";
import styles from "./primary-navigation.module.css";

export default function PrimaryNavigation() {
  return (
    <nav className={styles.menu}>
      <Link href="/">{m.page_home_title()}</Link>

      <Link href="/about">{m.page_about_title()}</Link>
    </nav>
  );
}
