"use client";

import Link from "next/link";
import { Surround, Text } from "@/app/(common)/components/ui";
import { Button } from "@nextui-org/react";

function ErrorPage() {
  return (
    <main>
      <Surround className="flex flex-col items-center py-40 text-zinc-900 dark:text-zinc-50">
        <Text className="text-4xl font-bold md:text-5xl" aria-label="404">
          5💡💡
        </Text>
        <Text className="text-center text-4xl font-bold md:text-5xl">
          An Error Occurred
        </Text>
        <Text className="mt-10 text-center text-base font-medium md:text-xl">
          Sorry, an error occurred. <br />
          Please visit again later.
        </Text>
        <Link href="/" className="mt-5">
          <Button
            title="Go Home"
            className="rounded-md border border-gray-300 bg-violet-500 px-5 py-2 text-lg font-bold text-gray-50 shadow duration-200 hover:bg-violet-700 dark:border-gray-500 dark:text-gray-50"
          >
            Go Home
          </Button>
        </Link>
      </Surround>
    </main>
  );
}

export default ErrorPage;
