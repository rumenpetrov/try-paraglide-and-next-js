// file generated by the Paraglide-Next init command
import { PrefixStrategy, Navigation, Middleware } from "@inlang/paraglide-next";
import type { AvailableLanguageTag } from "@/paraglide/runtime";
import * as m from "@/paraglide/messages.js";

const strategy = PrefixStrategy<AvailableLanguageTag>({
  prefixDefault: "never",
  pathnames: {
    "/about": m.pathname_about,
  },
});

export const middleware = Middleware({ strategy });
export const { Link, useRouter, usePathname, redirect, permanentRedirect } =
  Navigation({ strategy });
