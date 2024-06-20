import Link from "next/link";
import React from "react";
import Particles from "../components/particles";
// import { Redis } from "@upstash/redis";
import { Card } from "../components/card";
import { Article } from "./(routes)/projects/article";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];
// const redis = Redis.fromEnv();

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav> */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        xCaria
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      {/* <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          <Link
            // target="_blank"
            key ="/contact"
            href="/contact"
            className="underline duration-500 hover:text-zinc-300">
            Contact us
          </Link> to know more about the innovative AI solutions we offer in the Retail analytics space.
        </h2>
      </div> */}
      <div className="flex gap-4 animate-title">
        <Link href="/login" className="flex gap-4 mt-8 px-4 py-2 border border-zinc-500 text-zinc-500 hover:bg-zinc-500 hover:text-white transition-colors duration-300">
          Login
        </Link>
        <Link href="/contact" className="flex gap-4 mt-8 px-4 py-2 border border-zinc-500 text-zinc-500 hover:bg-zinc-500 hover:text-white transition-colors duration-300">
          Contact Us
        </Link>
      </div>
      {/* <div className="flex w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top1, top2, top3].map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={views[project.slug] ?? 0} />
              </Card>
            ))}
      </div> */}
    </div>
  );

}


