import type { MDXComponents } from "mdx/types";
import { Link } from "@nextui-org/react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a(props: any) {
      return (
        <Link href={props.href} isExternal>
          {props.children}
        </Link>
      );
    },
    p({ children }) {
      return (
        <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>{children}</p>
      );
    },
    h1({ children }) {
      return (
        <h1 className="mb-5 text-3xl font-bold sm:text-3xl sm:tracking-tight">
          {children}
        </h1>
      );
    },
    h2({ children }) {
      return (
        <h2 className="mb-5 text-2xl font-bold sm:text-3xl sm:tracking-tight">
          {children}
        </h2>
      );
    },
    h3({ children }) {
      return (
        <h3 className="mb-5 text-xl font-bold sm:text-3xl sm:tracking-tight">
          {children}
        </h3>
      );
    },
    ol({ children }) {
      return <ol className="list-inside list-decimal">{children}</ol>;
    },
    ul({ children }) {
      return <ul className="list-inside list-disc">{children}</ul>;
    },
    li({ children }) {
      return <li className="mb-2 list-item list-inside">{children}</li>;
    },
    blockquote({ children }) {
      return (
        <blockquote className="relative border-s-4 border-gray-800 bg-slate-200 pl-2 ps-4 sm:ps-6">
          {children}
        </blockquote>
      );
    },
    table({ children }) {
      return <table className="table-auto">{children}</table>;
    },
    ...components,
  };
}
