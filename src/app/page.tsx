"use client";

import { BlogBox } from "./_components/blogBox";
import Header from "./_components/header";
import { GetWindowSize } from "./_utils/getWindowsSize";

export default function Home() {
  const { width, height } = GetWindowSize();
  console.log("width:", width, "height", height);

  return (
    <main className="min-h-screen">
      <Header />

      <BlogBox />
    </main>
  );
}
