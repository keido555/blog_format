"use client";

import { BlogBlockBox } from "./_components/blogBlockBox";
import { GetWindowSize } from "./_utils/getWindowsSize";

export default function Home() {
  const { width, height } = GetWindowSize();
  console.log("width:", width, "height", height);

  return (
    <>
      <BlogBlockBox />
    </>
  );
}
