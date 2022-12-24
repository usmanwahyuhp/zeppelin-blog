import Navbar from "components/Navbar";
import Head from "next/head";
import Link from "next/link";
// import Image from "next/image";

import Hero from "components/Hero";
import Blogs from "components/Blogs";
import Footer from "components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>sad zeppelin</title>
        <meta name="description" content="blogs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      {/* Blogs Categories */}
      <section className="max-w-7xl mx-auto mb-28">
        <div className="w-full">
          <ul className="flex items-center flex-row">
            <li className="">
              <Link
                href=""
                className="text-base font-semibold text-gray-800 pr-12 focus:text-accent-1 focus:text-lg"
              >
                All
              </Link>
            </li>
            <li className="">
              <Link
                href=""
                className="text-base font-semibold text-gray-800 pr-12"
              >
                UI Design
              </Link>
            </li>
            <li className="">
              <Link
                href=""
                className="text-base font-semibold text-gray-800 pr-12"
              >
                UX Design
              </Link>
            </li>
            <li className="">
              <Link
                href=""
                className="text-base font-semibold text-gray-800 pr-12"
              >
                Product Design
              </Link>
            </li>
            <li className="">
              <Link
                href=""
                className="text-base font-semibold text-gray-800 pr-12"
              >
                Articles
              </Link>
            </li>
            <li className="">
              <Link
                href=""
                className="text-base font-semibold text-gray-800 pr-12"
              >
                Tutorial
              </Link>
            </li>
            <li className="">
              <Link
                href=""
                className="text-base font-semibold text-gray-800 pr-12"
              >
                News
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <Blogs />
      <Footer />
    </>
  );
}
