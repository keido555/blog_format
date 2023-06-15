import Link from "next/link";
import { MouseEventHandler } from "react";

type NavigationProps = {
  open: boolean;
  onClick: MouseEventHandler;
};

export const Navigation = (props: NavigationProps) => {
  return (
    <nav id="navigation" aria-hidden={!props.open} className="navigation shadow-lg">
      <div>
        <button
          type="button"
          aria-controls="navigation"
          aria-expanded={props.open}
          aria-label="naviの開閉"
          onClick={props.onClick}
          className="toggleButton"
        >
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </button>
      </div>
      <ul className="mt-8 text-base">
        <li className="my-auto mt-2 hover:cursor-pointer hover:text-sky-700">
          <Link href="/">HOME</Link>
        </li>
        <li className="my-auto mt-2 hover:cursor-pointer hover:text-sky-700">
          <Link href="/blog">BLOG</Link>
        </li>
        <li className="my-auto mt-2 hover:cursor-pointer hover:text-sky-700">
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};
