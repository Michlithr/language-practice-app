import Link from "next/link";
import { capitalizeFirstLetter } from "@lib/string-capitalize";

export default function Header() {
  const subpagesNames = ["about", "help", "privacy", "contact"];

  return (
    <div className="flex justify-center items-center w-fit h-16 rounded bg-verdigris text-white font-bold">
      {subpagesNames.map((name) => {
        return (
          <Link key={name} href={name}>
            <p className="p-2 text-xl transition-all duration-200 ease-in-out transform hover:pt-3">
              {capitalizeFirstLetter(name)}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
