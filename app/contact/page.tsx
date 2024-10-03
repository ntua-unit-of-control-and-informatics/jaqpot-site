import Link from 'next/link';
import { Metadata } from 'next';
import { generateSharedMetadata } from '@/app/shared.metadata';

export const metadata: Metadata = generateSharedMetadata(
  'Contact',
  "Get in touch with the Jaqpot team for inquiries, support, or collaboration opportunities. We're here to help with any questions about our machine learning platform.",
);

export default function Contact() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center from-white to-blue-50 p-6">
      <h1 className="mb-6 text-4xl font-bold text-gray-800">Get in touch</h1>
      <p className="mb-8 max-w-md text-center text-lg text-gray-600">
        We’d love to hear from you! Whether you have a question, feedback, or
        just want to chat, feel free to reach out at any time.
      </p>
      <Link
        href="mailto:upci.ntua@gmail.com"
        className="text-blue-600 underline transition hover:text-blue-800"
      >
        📧 upci.ntua [at] gmail.com
      </Link>
    </div>
  );
}
