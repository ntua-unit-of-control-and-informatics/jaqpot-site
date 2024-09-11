import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { DemoVideo } from "@/components/home/demo-video";
import Link from "next/link";
import { generateSharedMetadata } from "@/app/shared.metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateSharedMetadata(
  "Home",
  "A presentation of Jaqpot features",
);

export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/ntua-unit-of-control-and-informatics/jaqpotpy",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every 24 hours
      next: { revalidate: 86400 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="z-10 max-w-2xl px-5 xl:px-0">
        <Link
          // TODO fix url when posted twitter status about release
          href="https://x.com/upci_ntua"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <Twitter className="h-5 w-5 text-[#1d9bf0]" />
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Introducing Jaqpot
          </p>
        </Link>
        <h1
          className="mg-auto animate-fade-up bg-gradient-to-r from-indigo-500 from-30% via-purple-500 via-35% to-pink-500 to-75% bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Build. Train. Deploy
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Upload, manage and deploy your machine learning model or use
          open-source models, all accessible through our inference api
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <Link
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href={`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/new/model`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <RocketLaunchIcon className="h-4 w-4 group-hover:text-black" />
            <p>Deploy your model</p>
          </Link>
          <Link
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/ntua-unit-of-control-and-informatics/jaqpotpy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>
              <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
              <span className="font-semibold">{nFormatter(stars)}</span>
            </p>
          </Link>
        </div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={demo}
            large={large}
          />
        ))}
      </div>
    </div>
  );
}
const features = [
  {
    title: "Empower your Machine Learning journey",
    description:
      "Build, train, and deploy machine learning models effortlessly with Python. Jaqpot handles the rest.",
    large: true,
    demo: <DemoVideo />,
  },
  {
    title: "Flexible access and permissions",
    description:
      "Control who can see and use your models. Keep them private, share with organizations, or make them public.",
    demo: (
      <Image
        src="/lock-icon.png"
        alt="Flexible Access and Permissions"
        width={120}
        height={30}
      />
    ),
  },
  {
    title: "Seamless integration and deployment",
    description:
      "Deploy models with a user-friendly interface and access them programmatically via API.",
    demo: (
      <Link
        className="group flex max-w-fit items-center justify-center space-x-2 rounded-md border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
        href={`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/new/model`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <RocketLaunchIcon className="h-4 w-4 group-hover:text-black" />
        <p>Deploy your model</p>
      </Link>
    ),
  },
  {
    title: "Always up-to-date and blazing fast",
    description:
      "We ensure our platform and models are always up-to-date with the latest libraries and technologies, including Torch, scikit-learn, and ONNX runtime, providing you with blazing fast performance.",
    demo: (
      <div className="flex flex-wrap items-center justify-center justify-items-center gap-5 p-5">
        <Image
          alt="Pytorch logo"
          src="/pytorch-logo.png"
          width={100}
          height={25}
        />
        <Image
          alt="Scikit learn logo"
          src="/scikit-learn-logo.svg"
          width={100}
          height={53}
        />
        <Image
          alt="ONNX logo"
          src="/ONNX_Runtime_logo_dark.png"
          width={130}
          height={50}
        />
      </div>
    ),
  },
  {
    title: "Advanced Preprocessing and Featurization",
    description:
      "Jaqpotpy provides robust preprocessing pipelines and various featurizers to enhance your machine learning models. Transform your data and gain deeper insights with ease deployed in the cloud.",
    demo: (
      <div className="grid grid-flow-col grid-rows-2 gap-10 p-10">
        <span className="font-mono font-semibold">Featurizers</span>
        <span className="font-mono font-semibold">Preprocessing</span>
        <span className="font-mono font-semibold">Model Insights</span>
        <span className="font-mono font-semibold">Cloud Deployment</span>
      </div>
    ),
  },
];
