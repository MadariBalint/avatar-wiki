import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import remarkGfm from "remark-gfm";

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
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} {...props}>
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
