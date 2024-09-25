import * as m from "@/paraglide/messages.js";
import Page from "@/components/page/page";

export async function generateMetadata() {
  return {
    title: m.page_about_title(),
    description: m.page_about_description(),
  };
}

export default function About() {
  return (
    <Page>
      <h1>{m.page_about_title()}</h1>

      <p>{m.page_about_description()}</p>
    </Page>
  );
}
