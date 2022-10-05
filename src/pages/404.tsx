import Image from "next/future/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="content flex flex-col items-center justify-center">
      <div className="lost-invader relative z-10 mx-auto h-32 w-32">
        <Image src="/sad-invader.png" alt="sad invader" fill />
      </div>
      <div className="lost-invader-shadow h-6 w-28 rounded-[50%] bg-black/30 blur-[3px]" />
      <h1 className="mb-3 mt-8 text-6xl">404</h1>
      <p className="mb-6">Oh no, we did not expect that.</p>
      <Link href="/">
        <a className="text-fuchsia-500">Return to homepage</a>
      </Link>
    </div>
  );
}
