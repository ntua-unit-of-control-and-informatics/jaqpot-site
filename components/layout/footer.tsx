import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white shadow-medium">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a
              href="https://jaqpot.org/"
              className="flex items-center text-black"
            >
              <Image
                src="/jaqpot-j-logo.svg"
                className="me-3 h-12"
                alt="Jaqpot Logo"
                width={66}
                height={66}
              />
              <span className="self-center whitespace-nowrap text-2xl font-semibold ">
                Jaqpot
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 ">
                Resources
              </h2>
              <ul className="font-medium text-gray-500 ">
                <li className="mb-4">
                  <Link
                    href="https://app.jaqpot.org/"
                    className="text-gray-500 hover:underline"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://jaqpot.org/docs"
                    className="text-gray-500 hover:underline"
                  >
                    Docs
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://api.jaqpot.org"
                    className="text-gray-500 hover:underline"
                  >
                    API
                  </Link>
                </li>
                {/*<li className="mb-4">*/}
                {/*  <Link*/}
                {/*    href="https://jaqpot.org/pricing"*/}
                {/*    className="text-gray-500 hover:underline"*/}
                {/*  >*/}
                {/*    Pricing*/}
                {/*  </Link>*/}
                {/*</li>*/}
                {/*<li className="mb-4">*/}
                {/*  <Link*/}
                {/*    href="https://jaqpot.org/blog"*/}
                {/*    className="text-gray-500 hover:underline"*/}
                {/*  >*/}
                {/*    Blog*/}
                {/*  </Link>*/}
                {/*</li>*/}
                {/*<li className="mb-4">*/}
                {/*  <Link*/}
                {/*    href="https://jaqpot.org/contact"*/}
                {/*    className="text-gray-500 hover:underline"*/}
                {/*  >*/}
                {/*    Contact*/}
                {/*  </Link>*/}
                {/*</li>*/}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 ">
                Follow us
              </h2>
              <ul className="font-medium text-gray-500 ">
                <li className="mb-4">
                  <a
                    href="https://github.com/orgs/ntua-unit-of-control-and-informatics"
                    className="text-gray-500 hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.linkedin.com/in/upci-ntua-15794b194/"
                    className="text-gray-500 hover:underline "
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/tVpCjYQqSV"
                    className="text-gray-500 hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 ">
                Legal
              </h2>
              <ul className="font-medium text-gray-500 ">
                <li className="mb-4">
                  <a href="#" className="text-gray-500 hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 " />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">
            © {new Date().getFullYear()}{' '}
            <a href="https://jaqpot.org/" className="hover:underline">
              Jaqpot™
            </a>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex sm:mt-0 sm:justify-center">
            {/*<a href="#" className="text-gray-500 hover:text-gray-900 ">*/}
            {/*  <svg*/}
            {/*    className="h-4 w-4"*/}
            {/*    aria-hidden="true"*/}
            {/*    xmlns="http://www.w3.org/2000/svg"*/}
            {/*    fill="currentColor"*/}
            {/*    viewBox="0 0 8 19"*/}
            {/*  >*/}
            {/*    <path*/}
            {/*      fill-rule="evenodd"*/}
            {/*      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"*/}
            {/*      clip-rule="evenodd"*/}
            {/*    />*/}
            {/*  </svg>*/}
            {/*  <span className="sr-only">Facebook page</span>*/}
            {/*</a>*/}
            <a
              href="https://github.com/ntua-unit-of-control-and-informatics"
              className="ms-5 text-gray-500 hover:text-gray-900 "
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="https://www.linkedin.com/in/upci-ntua-15794b194/"
              className="ms-5 text-gray-500 hover:text-gray-900 "
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
              <span className="sr-only">LinkedIn account</span>
            </a>

            <a
              href="https://x.com/upci_ntua"
              className="ms-5 text-gray-500 hover:text-gray-900 "
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="https://discord.gg/tVpCjYQqSV"
              className="ms-5 text-gray-500 hover:text-gray-900 "
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
