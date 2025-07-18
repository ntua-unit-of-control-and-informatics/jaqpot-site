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
        <Link
          href={props.href}
          isExternal
          size="md"
          style={{ wordBreak: 'break-all' }}
        >
          {props.children}
        </Link>
      );
    },
    img(props: any) {
      return (
        <div className="w-full">
          <Image
            width={800}
            height={600}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
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
          className="text-4xl font-bold sm:text-5xl sm:tracking-tight text-gray-900"
          style={{ marginTop: '2rem', marginBottom: '1.5rem' }}
        >
          {children}
        </h1>
      );
    },
    h2({ children }) {
      return (
        <h2
          className="text-3xl font-bold sm:text-4xl sm:tracking-tight text-gray-800"
          style={{ marginTop: '2.5rem', marginBottom: '1.25rem' }}
        >
          {children}
        </h2>
      );
    },
    h3({ children }) {
      return (
        <h3
          className="text-2xl font-semibold sm:text-3xl sm:tracking-tight text-gray-700"
          style={{ marginTop: '2rem', marginBottom: '1rem' }}
        >
          {children}
        </h3>
      );
    },
    h4({ children }) {
      return (
        <h4
          className="text-xl font-semibold sm:text-2xl text-gray-600"
          style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}
        >
          {children}
        </h4>
      );
    },
    h5({ children }) {
      return (
        <h5
          className="text-lg font-medium sm:text-xl text-gray-600"
          style={{ marginTop: '1.25rem', marginBottom: '0.5rem' }}
        >
          {children}
        </h5>
      );
    },
    h6({ children }) {
      return (
        <h6
          className="text-base font-medium sm:text-lg text-gray-500"
          style={{ marginTop: '1rem', marginBottom: '0.5rem' }}
        >
          {children}
        </h6>
      );
    },
    ol({ children }) {
      return (
        <ol
          style={{
            listStylePosition: 'outside',
            listStyleType: 'decimal',
            marginBottom: '1rem',
            marginLeft: '1.5rem',
            paddingLeft: '0.5rem',
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
            listStyleType: 'disc',
            listStylePosition: 'outside',
            marginLeft: '1.5rem',
            marginBottom: '1rem',
            paddingLeft: '0.5rem',
          }}
        >
          {children}
        </ul>
      );
    },
    li({ children }) {
      return (
        <li
          style={{
            marginBottom: '0.5rem',
            lineHeight: '1.6',
            display: 'list-item',
          }}
        >
          {children}
        </li>
      );
    },
    blockquote({ children }) {
      return (
        <blockquote className="relative border-s-4 border-gray-800 bg-slate-200 pl-2 ps-4 sm:ps-6">
          {children}
        </blockquote>
      );
    },
    table({ children }) {
      return (
        <div className="overflow-x-auto my-6">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
            {children}
          </table>
        </div>
      );
    },
    thead({ children }) {
      return <thead className="bg-gray-50">{children}</thead>;
    },
    tbody({ children }) {
      return <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>;
    },
    tr({ children }) {
      return <tr className="hover:bg-gray-50">{children}</tr>;
    },
    th({ children }) {
      return (
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          {children}
        </th>
      );
    },
    td({ children }) {
      return <td className="px-6 py-4 text-sm text-gray-900">{children}</td>;
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
