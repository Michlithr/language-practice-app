import Link from "next/link";
import { capitalizeFirstLetter } from "@lib/string-capitalize";

export default function Header() {
  const subpagesNames = ["kanji", "vocabulary", "grammar"];

  return (
    <div className="flex justify-between items-center min-w-full h-24 px-40 bg-lapis-lazuli text-white font-bold">
      <span className="material-symbols-outlined text-4xl p-2  border-2 border-transparent rounded hover:border-sunglow hover:text-sunglow">
        home
      </span>
      <div className="flex justify-center items-center space-x-4">
        {subpagesNames.map((name) => {
          return (
            <Link key={name} href={name}>
              <p className="p-2 text-xl border-2 border-transparent rounded mx-2 hover:border-sunglow hover:text-sunglow">
                {capitalizeFirstLetter(name)}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
