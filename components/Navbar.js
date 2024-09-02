import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-around bg-white items-center py-6 px-2">
        <div className="logo">
          <Image src="/next.svg" width={128} height={77} />
        </div>
        <div className="flex gap-2 text-black">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
