import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import remarkGfm from "remark-gfm";

function getNodeText(node) {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getNodeText).join("");
  }

  if (node?.props?.children) {
    return getNodeText(node.props.children);
  }

  return "";
}

function slugifyHeading(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function HeadingWithAnchor({ as: Tag, children, ...props }) {
  const headingText = getNodeText(children);
  const id = slugifyHeading(headingText);

  return (
    <Tag id={id} className="scroll-mt-36" {...props}>
      {children}
    </Tag>
  );
}

function MarkdownLink({ href = "", children, ...props }) {
  const isExternal =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//");

  const isSpecial =
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#");

  if (isExternal || isSpecial) {
    return (
      <a className="text-sky-600" href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className="text-sky-600 no-underline hover:underline" to={href} {...props}>
      {children}
    </Link>
  );
}

function MarkdownRenderer({ content }) {
  return (
    <article className="prose max-w-none">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: MarkdownLink,
          h1: ({ children, ...props }) => (
            <HeadingWithAnchor as="h1" {...props}>
              {children}
            </HeadingWithAnchor>
          ),
          h2: ({ children, ...props }) => (
            <HeadingWithAnchor as="h2" {...props}>
              {children}
            </HeadingWithAnchor>
          ),
          h3: ({ children, ...props }) => (
            <HeadingWithAnchor as="h3" {...props}>
              {children}
            </HeadingWithAnchor>
          ),
          h4: ({ children, ...props }) => (
            <HeadingWithAnchor as="h4" {...props}>
              {children}
            </HeadingWithAnchor>
          ),
          h5: ({ children, ...props }) => (
            <HeadingWithAnchor as="h5" {...props}>
              {children}
            </HeadingWithAnchor>
          ),
          h6: ({ children, ...props }) => (
            <HeadingWithAnchor as="h6" {...props}>
              {children}
            </HeadingWithAnchor>
          ),
          table: (props) => (
            <div className="w-full overflow-x-auto">

            <table
              className="w-full table-auto border border-sky-600 "
              {...props}
              />
              </div>
          ),
          thead: (props) => <thead className="bg-sky-300" {...props} />,
          th: (props) => (
            <th
              className="border border-sky-600 px-4 py-2 text-left"
              {...props}
            />
          ),
          td: (props) => (
            <td className="border border-sky-600 px-4 py-2" {...props} />
          ),
          tr: (props) => <tr className="hover:bg-sky-200" {...props} />,
        }}
      >
        {content}
      </Markdown>
    </article>
  );
}

export default MarkdownRenderer;
