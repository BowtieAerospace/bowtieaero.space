import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[8px] row-start-2 items-center sm:items-start">
        <Image
          className="rounded-md"
          src="/images/logo.png"
          alt="Bowtie Aerospace logo"
          width={100}
          height={100}
          priority
        />

        <h1 className="text-4xl font-bold font-instrument-serif">
          Insana Facimus.
        </h1>

        <p className="text-sm font-mono">
          We're two high schoolers trying to vibe-clone SpaceX.
        </p>
      </main>
    </div>
  );
}
