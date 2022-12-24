import React from "react";
import Image from "next/image";

import Twitter from "../../images/twitter.svg";
import Linkedin from "../../images/linkedin.svg";
import Medium from "../../images/medium.svg";

function Hero() {
  return (
    <section className="relative mb-28">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-7/12">
            <h1 className="font-bold text-accent-1 text-7xl pt-52 mb-5">
              Blog Post
            </h1>
            <h2 className="font-medium text-slate-900 text-5xl mb-8">
              I think so, this is it.
            </h2>
            <p className="font-light text-slate-900 text-sm mb-5">
              Design begins after I begin to think about how to present an
              experience most successfully, whether a button I put in can solve
              a problem. The only point in design is not ui design, if the user
              does not have a good experience at the end of the product, the
              design will be considered unsuccessful in my opinion.
            </p>
            <div className="flex">
              <div className="w-80 mr-8">
                <Twitter />
              </div>
              <div className="w-80 mr-8">
                <Linkedin />
              </div>
              <div className="w-80">
                <Medium />
              </div>
            </div>
          </div>
          <div className="w-5/12 h-[442px] relative">
            <div className="absolute w-96 pt-52 right-0 bottom-0">
              <Image
                alt="hero traveller"
                priority
                layout="responsive"
                width="100"
                height="100"
                src="/images/hero.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
