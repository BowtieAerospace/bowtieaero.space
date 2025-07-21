import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";

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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 justify-center max-w-md mx-auto">
          <div className="flex flex-col items-center text-center">
            <Link href="https://x.com/adityasaravana" className="group">
              <Image
                src="/images/aditya.png"
                alt="Photo of Aditya"
                width={128}
                height={128}
                className="rounded-full object-cover transition-transform hover:scale-105 cursor-pointer"
                priority
              />
            </Link>
            <div className="flex items-center gap-1 mt-4">
              <Link href="https://x.com/adityasaravana" className="hover:underline">
                <h2 className="text-xl font-instrument-serif font-bold">Aditya</h2>
              </Link>
              <div className="flex gap-1">
                <a href="https://x.com/adityasaravana" className="p-1 transition-colors hover:scale-125 transition-transform">
                  <FontAwesomeIcon icon={faTwitter} size="sm" className="text-gray-700" />
                </a>
                <a href="https://www.linkedin.com/in/adityasaravana/" className="p-1 transition-colors hover:scale-125 transition-transform">
                  <FontAwesomeIcon icon={faLinkedin} size="sm" className="text-gray-700" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <Link href="https://www.linkedin.com/in/andr%C3%A9s-mathias-427469340/" className="group">
              <div className="w-32 h-32 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Photo</span>
              </div>
            </Link>
            <div className="flex items-center gap-1 mt-4">
              <Link href="https://www.linkedin.com/in/andr%C3%A9s-mathias-427469340/" className="hover:underline">
                <h2 className="text-xl font-instrument-serif font-bold">Andy</h2>
              </Link>
              <div className="flex gap-1">
                <Link href="https://x.com/andmath173842" className="p-1 transition-colors hover:scale-125 transition-transform">
                  <FontAwesomeIcon icon={faTwitter} size="sm" className="text-gray-700" />
                </Link>
                <Link href="https://www.linkedin.com/in/andr%C3%A9s-mathias-427469340/" className="p-1 transition-colors hover:scale-125 transition-transform">
                  <FontAwesomeIcon icon={faLinkedin} size="sm" className="text-gray-700" />
                </Link>
              </div>
            </div>
          </div>


        </div>
        <br></br>
        <p className="text-sm font-mono">
          Wanna talk? <Link href="mailto:hi@bowtieaero.space" className="text-blue-500">Say hi.</Link>
        </p>

        <p className="text-sm font-mono">
          Follow us on <Link href="https://x.com/bowtieaerospace" className="text-blue-500">X</Link> for updates.
        </p>
      </main>
    </div>
  );
}
