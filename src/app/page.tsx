import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-6">
      <div className="max-w-3xl">
        <Image
          src="/brand/logo.svg"
          alt="SkillSync Logo"
          width={150}
          height={150}
          priority
        />
        <h1 className="mt-6 text-5xl font-extrabold text-primary">
          Welcome to SkillSync
        </h1>
        <p className="mt-4 text-lg text-secondary">
          AI-powered personalized learning tailored to your goals.
        </p>
        <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg transition hover:bg-opacity-80">
          Get Started
        </button>
      </div>
    </main>
  );
}
