import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Blogs() {
  return (
    <section className="max-w-7xl mx-auto mb-28">
      <div className="grid grid-cols-2 gap-14">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
}

function Post() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <Image src={"/images/post-1.png"} width={590} height={145} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <Link
          href={"/"}
          className="text-gray-800 hover:text-gray-600 uppercase"
        >
          July 3, 2022
        </Link>
      </div>
      <div className="title">
        <Link href={"/"}>
          <div className="text-xl font-bold text-accent-1 hover:text-gray-600">
            Your most unhappy customers are your greatest source of learning
          </div>
        </Link>
      </div>
      <p className="text-gray-500 py-3">
        Even the all-powerful Pointing has no control about the blind texts it
        is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of
        Grammar.
      </p>
      <div className="info flex justify-center flex-col py-4">
        <Link
          href={"/"}
          className="text-accent-1 hover:text-gray-600 underline"
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
}
