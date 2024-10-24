import Image from "next/image";
import { jost } from "@/app/layout";
export default function ImageCaras({
  image,
  index,
  currentIndex,
}: {
  image: { src: string; title: string };
  index: number;
  currentIndex: number;
}) {
  return (
    <div
      key={index}
      className={`${jost.className} absolute inset-0 transition-opacity duration-700 ease-in-out ${
        index === currentIndex ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Title Overlay */}
      <div className="text-white p-4 relative text-5xl font-bold inset-1 z-20 bg-opacity-30 flex items-center justify-center">
        {image.title}
      </div>

      <Image
        src={image.src}
        alt={`Slide ${index + 1}`}
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
}
