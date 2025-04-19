
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <Link href="/" className="text-xl font-bold">
        La.dev
      </Link>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;

