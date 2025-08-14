"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import gsap from "gsap";
import Seo from "@/app/components/seo";

const playFairDisplay = Playfair_Display({
  weight: "500",
  subsets: ["latin"],
});

const About = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".content-section",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="my-4 content-section">
      <Seo
        title="About Me"
        description="About Chijikem Christopher Agu - CS, Software Developer"
      />
      <br />
      <h1
        className={cn(
          playFairDisplay.className,
          "lg:text-[50px] text-3xl text-center"
        )}
      >
        Chijikem Christopher Agu
      </h1>
      <br />

      <div className="mx-auto flex items-center justify-center">
        <span className="text-gray-600 mx-1">CS Major </span> @{" "}
        <Link
          href={"https://mouau.edu.ng/"}
          className="underline flex items-end text-center mx-1"
        >
          {" "}
          Michael Okpara University of Agriculture Umudike{" "}
          <ArrowUpRight className="h-5 w-5" />
        </Link>
      </div>

      <div className="flex items-center justify-center my-4">
        <div className="lg:flex items-start justify-center lg:gap-6 lg:w-[900px] my-5">
          <img
            src={"/emma-3.jpg"}
            alt="Chijikem Christopher Agu"
            width={400}
            height={600}
            className="rounded-lg mx-auto lg:my-0 my-4"
          />

          <div className="lg:my-0 my-3">
            <p>
              I am a Software Engineer with over 4 years of experience and an
              alumnus of the{" "}
              <Link
                href="https://mouau.edu.ng/"
                className="underline text-blue-500"
              >
                Michael Okpara University of Agriculture Umudike
              </Link>{" "}
              , currently pursuring a Bachelors degree in Computer Science with
              a focus on Backend systems and Cloud infrastructure.
            </p>

            <Separator className="my-5" />

            <p>
              Currently, I mainly work on Backend Systems
              (API/Micro-Services/DB), Mobile Development (React Native &
              Flutter), Artificial Intelligence and Web3.
            </p>

            <br />

            <p>
              I also build fullstack applications (Web Apps, PWAs, Mobile Apps).
              I build fast, seamless and scalable user interfaces along with
              scalable backend systems and cross-platform mobile applications.
            </p>

            <br />

            <p>
              I’m passionate about open source and believe in making my side
              projects accessible to others. By sharing the tools I create, I
              aim to help others learn and benefit from them. Over the years,
              I’ve developed several projects covering areas such as AI
              technologies, mobile development, web frameworks, payment
              gateways, automation, web3, and bot development. You can explore
              all of my projects on GitHub.{" "}
              <Link
                href="https://github.com/agucchristopher"
                className="underline text-blue-500"
              >
                Github - @agucchristopher
              </Link>{" "}
            </p>

            <Separator className="my-5" />

            <p>
              In my free time, I'm either trading forex, being a degen in the
              markets, or watching YouTube videos. My trading experience has
              taught me valuable lessons about risk management, data analysis,
              and making quick decisions under pressure - skills that translate
              well into software development.
            </p>

            <Link href={"/projects"}>
              <button className="rounded-[30px] my-4 border hover:bg-black transition-all duration-400 ease-in hover:text-white border-black p-2 w-32 flex items-center justify-center">
                Projects <ArrowUpRight strokeWidth={1.5} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
