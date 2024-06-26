import Header from "@ui/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />
      <main className="min-w-full flex-grow bg-white">
        <p>Content</p>
      </main>
      <footer className="flex justify-center items-center min-w-full h-16 bg-lapis-lazuli text-white font-bold">
        <p>Footer</p>
      </footer>
    </div>
  );
}
