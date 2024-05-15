import Head from "next/head";
import Link from "next/link";
import { capitalizeFirstLetter } from "@lib/string-capitalize";

export default function Header() {
  const subpagesNames = ["kanji", "vocabulary", "grammar"];

  return (
    <div className="flex justify-between items-center min-w-full h-24 px-40 bg-lapis-lazuli text-white font-bold">
      <Head>
        <title>Language practice app</title>
        <meta property="og:title" content="Language practice app" key="title" />
      </Head>
      <span className="material-symbols-outlined text-4xl p-2 transition-all duration-200 ease-in-out transform hover:pt-3 hover:text-sunglow">
        home
      </span>
      <div className="flex justify-center items-center space-x-4">
        {subpagesNames.map((name) => {
          return (
            <Link key={name} href={name}>
              <p className="p-2 text-xl transition-all duration-200 ease-in-out transform hover:pt-3 hover:text-sunglow">
                {capitalizeFirstLetter(name)}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
