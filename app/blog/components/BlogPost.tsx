import { Category } from '@/app/blog/categories';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Link } from '@nextui-org/react';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';
import JaqpotTimeAgo from '@/app/components/JaqpotTimeAgo';
import { Divider } from '@nextui-org/divider';

export default function BlogPost(props: {
  slug: string;
  title: string;
  publishDate: string;
  textPreview: string;
  categories: Category[];
}) {
  return (
    <Card
      className="max-w-xl px-10 py-5 sm:max-w-3xl"
      isPressable
      as={Link}
      href={`/blog/${props.slug}`}
    >
      <CardHeader className="flex flex-col gap-3">
        <div className="flex w-full items-center gap-1">
          {/*<Image*/}
          {/*  alt="nextui logo"*/}
          {/*  height={100}*/}
          {/*  radius="sm"*/}
          {/*  src={imageUrl || "/jaqpot-j-logo.svg"}*/}
          {/*  width={100}*/}
          {/*/>*/}
          <h2
            color="foreground"
            className="text-3xl font-bold sm:text-3xl sm:tracking-tight"
          >
            {props.title}
          </h2>
        </div>
        <div className="flex w-full items-center text-gray-400">
          <>
            <CalendarDaysIcon className="mr-2 size-5" />
            <JaqpotTimeAgo
              date={new Date(props.publishDate as unknown as string)}
            />
          </>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="line-clamp-3">{props.textPreview}</p>
      </CardBody>
      {props.categories && (
        <>
          <Divider />
          <CardFooter>
            <p>
              Categories:{' '}
              {props.categories.map((cat, i) => `${i ? ', ' : ''}${cat}`)}
            </p>
          </CardFooter>
        </>
      )}
    </Card>
  );
}
