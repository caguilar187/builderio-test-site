import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@builder.io/sdk-react-nextjs";

// 1. Initialize Builder with your API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    slug?: string[];
  };
}

export default async function Page(props: PageProps) {
  // 2. Resolve the slug (e.g. ["about", "us"] -> "/about/us")
  const urlPath = "/" + (props.params?.slug?.join("/") || "");

  // 3. Fetch content from Builder
  const content = await builder
    .get("page", {
      userAttributes: {
        urlPath: urlPath,
      },
    })
    .toPromise();

  // 4. Render the content
  // If content is found, RenderBuilderContent handles it.
  // If not found (404), you can handle it here or let Builder handle it.
  return (
    <>
      {content ? (
        <RenderBuilderContent model="page" content={content} />
      ) : (
        <div className="p-10 text-center">
          <h1 className="text-2xl font-bold">Page Not Found</h1>
          <p>This page hasn't been created in Builder.io yet.</p>
        </div>
      )}
    </>
  );
}