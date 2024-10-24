"use client";
import { jost } from "@/app/layout";
import Sponsors from "@/components/sponsorspics";

export default function SponsorsPage() {
  return (
    <div className={`${jost.className} flex-1 text-white `}>
      <Sponsors />
    </div>
  );
}
