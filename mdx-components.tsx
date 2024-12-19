import type { MDXComponents } from 'mdx/types';
import { Link } from '@nextui-org/react';
import Image from 'next/image';
import { ImageProps } from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a(props: any) {
      return (
        <Link href={props.href} isExternal size="md">
          {props.children}
        </Link>
      );
    },
    img(props: any) {
      return (
        <div style={{ position: 'relative', width: '100%', height: '300px' }}>
          <Image
            fill
            sizes="100vw"
            style={{
              objectFit: 'contain',
            }}
            {...(props as ImageProps)}
          />
        </div>
      );
    },
    p({ children }) {
      return (
        <p style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
          {children}
        </p>
      );
    },
    h1({ children }) {
      return (
        <h1
          className="text-3xl font-bold sm:text-3xl sm:tracking-tight"
          style={{ marginTop: '1.5rem', marginBottom: '1rem' }}
        >
          {children}
        </h1>
      );
    },
    h2({ children }) {
      return (
        <h2
          className="mb-5 text-2xl font-bold sm:text-3xl sm:tracking-tight"
          style={{ marginTop: '1.5rem', marginBottom: '1rem' }}
        >
          {children}
        </h2>
      );
    },
    h3({ children }) {
      return (
        <h3
          className="mb-5 text-xl font-bold sm:text-3xl sm:tracking-tight"
          style={{ marginTop: '1.5rem', marginBottom: '1rem' }}
        >
          {children}
        </h3>
      );
    },
    ol({ children }) {
      return (
        <ol
          style={{
            listStylePosition: 'inside',
            listStyleType: 'decimal',
            marginBottom: '1rem',
          }}
        >
          {children}
        </ol>
      );
    },
    ul({ children }) {
      return (
        <ul
          style={{
            listStylePosition: 'inside',
            listStyleType: 'disc',
            marginBottom: '1rem',
          }}
        >
          {children}
        </ul>
      );
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
    code(props) {
      const { children, className, ...rest } = props;
      const match = /language-(\w+)/.exec(className || '');
      return match ? (
        <SyntaxHighlighter
          PreTag="div"
          lineProps={{
            style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' },
          }}
          // eslint-disable-next-line react/no-children-prop
          children={String(children).replace(/\n$/, '')}
          wrapLines
          wrapLongLines
          language={match[1]}
          style={materialDark}
        />
      ) : (
        <code {...rest} className={className}>
          {children}
        </code>
      );
    },
    ...components,
  };
}
