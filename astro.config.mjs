// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.
import astroRemark from "@astrojs/markdown-remark";

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Enable Custom Markdown options, plugins, etc.
  renderers: [],
  markdownOptions: {
    render: [
      astroRemark,
      {
        syntaxHighlight: "shiki",
        shikiConfig: {
          theme: "dracula",
        },
      },
      {
        rehypePlugins: [
          "rehype-slug",
          [
            "rehype-autolink-headings",
            {
              behavior: "prepend",
              content: {
                type: "element",
                tagName: "span",
                properties: { className: ["heading-link"] },
                children: [
                  {
                    type: "element",
                    tagName: "img",
                    properties: { src: "/assets/link.svg" },
                    children: [],
                  },
                ],
              },
            },
          ],
          [
            "rehype-external-links",
            {
              content: {
                type: "element",
                tagName: "img",
                properties: {
                  src: "/assets/external-link.svg",
                  alt: "External link icon",
                },
                children: [],
              },
              contentProperties: { className: ["external-link-icon"] },
            },
          ],
        ],
      },
    ],
  },
});
