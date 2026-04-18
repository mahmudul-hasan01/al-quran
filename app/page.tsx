import HomePage from "./_components/HomePage";

export default function Home() {
  return (
    <>
      <div className="app-body flex-1 flex relative">
        <main className="flex-1 min-w-0">
          <HomePage />
        </main>
      </div>
    </>
  );
}
