"use client";

import { Link, usePathname } from "@/lib/i18n";
import { availableLanguageTags } from "@/paraglide/runtime";
import styles from "./language-menu.module.css";

export default function LanguageMenu() {
  const pathname = usePathname();

  return (
    <nav className={styles.menu}>
      {availableLanguageTags.map((locale) => (
        <Link key={locale} href={pathname} locale={locale}>
          {locale}
        </Link>
      ))}
    </nav>
  );
}
