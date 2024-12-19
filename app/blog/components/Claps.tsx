'use client';

import { HandThumbUpIcon, HeartIcon } from '@heroicons/react/24/solid';
import { Button } from '@nextui-org/button';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import useSWR from 'swr';
import { Tooltip } from '@nextui-org/tooltip';

async function incrementClaps(url: string) {
  const res = await fetch('/api/claps', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url }),
  });

  return await res.json();
}

export default function ClapsComponent() {
  const pathname = usePathname();
  const [claps, setClaps] = useState(0);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  useSWR(`/api/claps?url=${pathname}`, async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setClaps(data.claps);
    return data;
  });

  return (
    <div>
      <Tooltip content="Like this post">
        <Button
          variant="bordered"
          onPress={() => {
            setClaps(claps + 1);
            setHasBeenClicked(true);
            incrementClaps(pathname);
          }}
          startContent={
            <HeartIcon
              className={`h-6 w-6 transition-transform duration-500 ${
                hasBeenClicked ? 'text-red-500' : 'animate-bounce text-gray-400'
              }`}
            />
          }
          size='lg'
        >
          {claps}
        </Button>
      </Tooltip>
    </div>
  );
}
