import { MyAvatar } from "@/components/cust/MyAvatar";
import React from "react";
import {
  ArrowUpDown,
  ArrowUpRight,
  ChevronDown,
  Download,
  FileDown,
  MoreHorizontal,
  SquareArrowOutUpRight,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="flex flex-col items-center min-h-screen pt-20">
      <div className="flex flex-col items-center">
        <MyAvatar />
        <h1 className="text-md font-semibold text-gray-800 text-center mt-8">
          Hello! It&apos;s me, <span className="font-bold">Tegar Levta Anggana.</span>
        </h1>
        <p className="mt-2 text-gray-600 text-sm w-80 text-center">
          I develop apps.
        </p>
        <div className="mt-5">
          <Button>
            <Download className="mr-2 w-4 h-4" />
            <span>Download CV (PDF)</span>
          </Button>
        </div>
        <h1 className="text-md font-semibold text-gray-800 text-center mt-16">
          Find me on
        </h1>
        <div className="mt-5 text-sm">
          <Link href="" className={buttonVariants({ variant: "link" })}>
            WhatsApp
            <SquareArrowOutUpRight className="ml-2 w-4 h-4" />
          </Link>
          <Link href="" className={buttonVariants({ variant: "link" })}>
            Instagram
            <SquareArrowOutUpRight className="ml-2 w-4 h-4" />
          </Link>
          <Link href="" className={buttonVariants({ variant: "link" })}>
            Telegram
            <SquareArrowOutUpRight className="ml-2 w-4 h-4" />
          </Link>
          <Link href="" className={buttonVariants({ variant: "link" })}>
            YouTube
            <SquareArrowOutUpRight className="ml-2 w-4 h-4" />
          </Link>
          <Link href="" className={buttonVariants({ variant: "link" })}>
            GitHub
            <SquareArrowOutUpRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
