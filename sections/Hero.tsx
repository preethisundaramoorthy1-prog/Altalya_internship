import fs from "fs";
import path from "path";

export default function Hero() {
  const filePath = path.join(process.cwd(), "content/hero.json");

  let data = { title: "", description: "" };

  try {
    const jsonData = fs.readFileSync(filePath, "utf-8");
    data = JSON.parse(jsonData);
  } catch (error) {
    console.error("JSON ERROR:", error);
  }

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold">
        {data.title}
      </h1>
      <p className="mt-6 text-gray-400 max-w-xl">
        {data.description}
      </p>
      <a
        href="#courses"
        className="mt-8 px-6 py-3 bg-purple-600 rounded-lg hover:scale-105 transition"
      >
        Get Started
      </a>

    </section>
  );
}