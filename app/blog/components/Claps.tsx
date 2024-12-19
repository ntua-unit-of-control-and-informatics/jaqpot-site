'use client';

import { HandThumbUpIcon } from '@heroicons/react/24/solid';
import { Button } from '@nextui-org/button';

export default function ClapsComponent() {
  return (
    <div>
      <Button isIconOnly>
        <HandThumbUpIcon className="h-6 w-6 text-gray-500" />
      </Button>
    </div>
  );
}
