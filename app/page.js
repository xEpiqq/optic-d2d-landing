export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 gap-6">
      <h1 className="text-4xl font-bold">Optic D2D</h1>
      <p className="text-lg">Sell Fiber Fast</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Get Started
      </button>
      <a
        href="/privacy"
        className="text-blue-600 hover:underline text-sm"
      >
        Privacy Policy
      </a>
    </main>
  );
}
