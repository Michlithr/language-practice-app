import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-center items-center min-w-full h-24 p-0 bg-lapis-lazuli text-white font-bold">
        <p>Header</p>
      </header>
      <main className="min-w-full flex-grow bg-white">
        <p>Content</p>
      </main>
      <footer className="flex justify-center items-center min-w-full h-16 bg-lapis-lazuli text-white font-bold">
        <p>Footer</p>
      </footer>
    </div>
  );
}
