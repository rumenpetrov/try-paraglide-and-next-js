import type { Metadata } from "next";
import * as m from "@/paraglide/messages.js";
import Page from "@/components/page/page";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { params } = props;
  const { id } = params;

  return {
    title: `${m.page_blog_details_title()} ${id}`,
    description: `${m.page_blog_details_description()} ${id}`,
  };
}

export default function Blog(props: Props) {
  const { params } = props;
  const { id } = params;

  return (
    <Page>
      <h1>
        {m.page_blog_details_title()} - {id}
      </h1>

      <p>{m.page_blog_details_description()}</p>
    </Page>
  );
}
