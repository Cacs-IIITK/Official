"use client";
import Link from "next/link";
import { gothic_a1 } from "@/app/layout";

export default function NavComp() {
  return (
    <nav
      className={`${gothic_a1.className} p-12 flex items-center text-[#FFD900] w-[100%]`}
    >
      <Link href="/">
        <p className="text-9xl font-bold hover:text-white duration-300">CACS</p>
      </Link>
      <div className="flex gap-4 w-[100%] justify-end text-2xl font-bold">
        <Link href="team">
          <p className="hover:underline hover:decoration-[#FFD900] hover:decoration-2 transition-all duration-300 ease-in-out">
            Our Team
          </p>
        </Link>
        <Link href="events">
          <p className="hover:underline hover:decoration-[#FFD900] hover:decoration-2 transition-all duration-300 ease-in-out">
            Past Events
          </p>
        </Link>
        <Link href="clubs">
          <p className="hover:underline hover:decoration-[#FFD900] hover:decoration-2 transition-all duration-300 ease-in-out">
            Our Clubs
          </p>
        </Link>
        <Link href="sponsors">
          <p className="hover:underline hover:decoration-[#FFD900] hover:decoration-2 transition-all duration-300 ease-in-out">
            Past Sponsors
          </p>
        </Link>
      </div>
    </nav>
  );
}
