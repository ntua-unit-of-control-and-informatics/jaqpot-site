import Link from 'next/link';
import { Metadata } from 'next';
import { generateSharedMetadata } from '@/app/shared.metadata';

export const metadata: Metadata = generateSharedMetadata(
  'Privacy Policy',
  'How Jaqpot collects, uses, and protects personal data, including the access platform administrators have to account and request information.'
);

const LAST_UPDATED = '27 October 2026';

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 text-gray-700">
      <h1 className="mb-2 text-4xl font-bold text-gray-800">Privacy Policy</h1>
      <p className="mb-8 text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>

      <p className="mb-6">
        This Privacy Policy explains how the Jaqpot platform
        (&quot;Jaqpot&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
        collects, uses, shares, and protects personal data when you use our
        websites, applications, APIs, and related services (collectively, the
        &quot;Service&quot;).
      </p>

      <h2 className="mb-3 mt-8 text-2xl font-semibold text-gray-800">
        1. Who we are
      </h2>
      <p className="mb-4">
        The Service is operated by the Unit of Control and Informatics of the
        National Technical University of Athens (NTUA), Greece. For the purposes
        of the General Data Protection Regulation (GDPR), we act as the data
        controller for the personal data described in this policy.
      </p>
      <p className="mb-4">
        For any privacy-related question or request, you can contact us at{' '}
        <Link
          href="mailto:jaqpot@jaqpot.org"
          className="text-blue-600 underline transition hover:text-blue-800"
        >
          jaqpot@jaqpot.org
        </Link>
        .
      </p>

      <h2 className="mb-3 mt-8 text-2xl font-semibold text-gray-800">
        2. Personal data we collect
      </h2>
      <ul className="mb-4 list-disc space-y-2 pl-6">
        <li>
          <strong>Account data:</strong> first name, last name, username, email
          address, profile picture, organization membership, and account
          identifiers used for authentication.
        </li>
        <li>
          <strong>Content and activity data:</strong> models, datasets,
          prediction requests and results, API keys, comments, chat messages,
          and other content you submit to the Service.
        </li>
        <li>
          <strong>Technical data:</strong> IP address, browser and device
          information, timestamps, request logs, and cookie or similar
          identifiers.
        </li>
      </ul>

      <h2 className="mb-3 mt-8 text-2xl font-semibold text-gray-800">
        3. How we use personal data
      </h2>
      <p className="mb-4">We use personal data to:</p>
      <ul className="mb-4 list-disc space-y-2 pl-6">
        <li>create and manage accounts, organizations, and access rights;</li>
        <li>provide, operate, maintain, and improve the Service;</li>
        <li>
          execute model training, deployment, prediction, and other features you
          request;
        </li>
        <li>
          monitor usage, prevent abuse, troubleshoot issues, and respond to
          support requests;
        </li>
        <li>communicate with you about the Service, security, and updates;</li>
        <li>comply with legal obligations and enforce our terms.</li>
      </ul>
      <p className="mb-4">
        Our legal bases under the GDPR are: performance of a contract (providing
        the Service), legitimate interests (security, reliability, support, and
        improvement of the Service), consent (where required, for example for
        optional cookies or communications), and legal obligation.
      </p>

      <h2 className="mb-3 mt-8 text-2xl font-semibold text-gray-800">
        4. Administrator access notice
      </h2>
      <p className="mb-4">
        <strong>
          Account and usage information is visible to authorized Jaqpot
          administrators.
        </strong>{' '}
        For support, security, monitoring, and operational purposes, authorized
        administrators may access your account details (including your first
        name, last name, username, and email address), the models and datasets
        you submit, and the history of prediction requests associated with your
        account.
      </p>
      <p className="mb-4">
        Administrator access is restricted to personnel who need it to operate
        and support the Service, is subject to confidentiality obligations, and
        is not used for unrelated purposes. Administrative access is logged and
        reviewed as part of our security controls.
      </p>

      <h2 className="mb-3 mt-8 text-2xl font-semibold text-gray-800">
        5. Sharing and disclosure
      </h2>
      <p className="mb-4">
        We do not sell personal data. We may share personal data with service
        providers that help us operate the Service (for example hosting,
        storage, email, and monitoring providers), with your organization where
        you are a member and the Service makes shared resources available, and
        with public authorities where required by law. Service providers act on
        our instructions and are bound by appropriate data protection terms.
      </p>

      <h2 className="mb-3 mt-8 text-2xl font-semibold text-gray-800">
        6. Retention and deletion
      </h2>
      <p className="mb-4">
        We retain personal data for as long as your account is active and as
        needed to provide the Service, comply with legal obligations, resolve
        disputes, and enforce agreements. Content such as prediction datasets
        may be deleted or anonymized after a retention period. You may request
        deletion of your account and personal data as described below.
      </p>

      <h2 className="mb-3 mt-8 text-2xl font-semibold text-gray-800">
        7. Your rights
      </h2>
      <p className="mb-4">
        Subject to applicable law, you have the right to access, correct, or
        delete your personal data, to restrict or object to its processing, to
        receive a portable copy of the data you provided, and to withdraw
        consent at any time where processing is based on consent. To exercise
        these rights, contact us at{' '}
        <Link
          href="mailto:jaqpot@jaqpot.org"
          className="text-blue-600 underline transition hover:text-blue-800"
        >
          jaqpot@jaqpot.org
        </Link>
        . You also have the right to lodge a complaint with a supervisory
        authority, including the Hellenic Data Protection Authority.
      </p>

      <h2 className="mb-3 mt-8 text-2xl font-semibold text-gray-800">
        8. Cookies and similar technologies
      </h2>
      <p className="mb-4">
        We use cookies and similar technologies that are necessary for
        authentication, security, and core functionality, and to remember your
        preferences. Where required, we ask for your consent before using
        non-essential cookies. You can control cookies through your browser
        settings, although disabling essential cookies may prevent the Service
        from working correctly.
      </p>

      <h2 className="mb-3 mt-8 text-2xl font-semibold text-gray-800">
        9. Security
      </h2>
      <p className="mb-4">
        We use administrative, technical, and organizational measures to protect
        personal data, including access controls, encryption in transit, audit
        logging, and regular review of administrative access. No method of
        transmission or storage is completely secure, so we cannot guarantee
        absolute security.
      </p>

      <h2 className="mb-3 mt-8 text-2xl font-semibold text-gray-800">
        10. International transfers
      </h2>
      <p className="mb-4">
        The Service is primarily operated within the European Economic Area. If
        personal data is transferred outside the EEA, we will implement
        appropriate safeguards as required by applicable data protection law.
      </p>

      <h2 className="mb-3 mt-8 text-2xl font-semibold text-gray-800">
        11. Changes to this policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. When we make
        material changes, we will post the updated policy on this page and
        update the date above. We encourage you to review this page
        periodically.
      </p>

      <h2 className="mb-3 mt-8 text-2xl font-semibold text-gray-800">
        12. Contact
      </h2>
      <p className="mb-4">
        Questions, requests, or concerns about this Privacy Policy can be sent
        to{' '}
        <Link
          href="mailto:jaqpot@jaqpot.org"
          className="text-blue-600 underline transition hover:text-blue-800"
        >
          jaqpot@jaqpot.org
        </Link>
        .
      </p>
    </div>
  );
}
