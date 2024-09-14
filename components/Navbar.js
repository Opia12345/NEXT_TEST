import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="flex justify-around bg-white items-center py-6 px-2">
      <div className="logo">
        <FontAwesomeIcon icon={faLeaf} />
      </div>
      <div className="flex gap-2 text-black">
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
