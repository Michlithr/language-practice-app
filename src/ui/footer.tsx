import Link from "next/link";
import { capitalizeFirstLetter } from "@lib/string-capitalize";

export default function Header() {
  const subpagesNames = ["about", "help", "privacy", "contact"];

  return (
    <footer className="flex justify-center items-center min-w-full h-16 bg-lapis-lazuli text-white font-bold">
      {subpagesNames.map((name) => {
        return (
          <Link key={name} href={name}>
            <p className="p-2 text-xl transition-all duration-200 ease-in-out transform hover:pt-3 hover:text-sunglow">
              {capitalizeFirstLetter(name)}
            </p>
          </Link>
        );
      })}
    </footer>
  );
}
