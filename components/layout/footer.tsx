import Link from "next/link";

export default function Footer() {
  return (
    <div className="absolute w-full py-5 text-center">
      <p className="text-gray-500">
        A project by{" "}
        <Link
          className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
          href="https://twitter.com/upci_ntua"
          target="_blank"
          rel="noopener noreferrer"
        >
          UPCI NTUA
        </Link>
      </p>
    </div>
  );
}
