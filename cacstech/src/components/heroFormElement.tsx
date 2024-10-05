import Image from "next/image";
export default function HeroFormElement({ imageurl }: { imageurl: string }) {
  return (
    <div
      className="bg-cover bg-center w-screen h-[20rem] bg-no-repeat flex flex-col justify-end pl-64 pr-64"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/crowd-people-city-street-blurred-background-people-walking-city-street_919279-456.jpg')",
      }}
    >
      <div className="flex justify-between items-center">
        <div className="text-white w-[100%] p-6">
          <p className="text-6xl font-bold">Collaborate</p>
          <p className="text-gray-200 text-2xl">
            Join hands with us to create...
          </p>
        </div>
        <button className="bg-[#FFFFFF] text-[#FF8400] h-[5rem] w-[20rem] rounded-sm hover:bg-[#FF8400] hover:text-white p-2 m-6">
          Get Started
        </button>
      </div>
    </div>
  );
}