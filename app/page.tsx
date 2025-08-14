"use client";
import { Playfair_Display } from "next/font/google";
import React from "react";
import { cn } from "@/lib/utils";
import ColoredLink from "@/app/components/link";
import gsap from "gsap";
import Seo from "@/app/components/seo";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/lib/projects";

const playFairDisplay = Playfair_Display({
  weight: "500",
  subsets: ["latin"],
});

const Home = () => {
  const featuredProjects = getFeaturedProjects();

  React.useEffect(() => {
    gsap.fromTo(
      ".content-section",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="my-4">
      <Seo
        title="Home"
        description="Engineering Seamless Experiences for the Digital Age"
      />
      <br />

      <div className="content-section">
        <h1
          className={cn(playFairDisplay.className, "lg:text-[50px] text-3xl")}
        >
          Crafting Digital Solutions That Matter.
        </h1>
        <br />
        <br />

        <div className="lg:text-[20px] text-[15px]">
          <p>
            I transform ideas into powerful digital solutions. From robust
            backend systems to intuitive mobile apps, I build technology that
            makes a difference. Creator of{" "}
            <span className="flex items-center gap-x-3 flex-wrap">
              {featuredProjects.map((project) => (
                <ColoredLink key={project.id} href={project.url}>
                  {project.name}
                </ColoredLink>
              ))}
            </span>
          </p>

          <br />
          <p>
            Full-Stack Software Engineer & Mobile Developer - Passionate about
            creating innovative solutions that solve real-world problems through
            clean code and exceptional user experiences.
          </p>

          <br />
          <p>
            Turning complex problems into elegant, user-friendly solutions. When
            I'm not coding, you'll find me analyzing market trends and trading
            forex.
          </p>

          <br />

          <Link href={"/Christopher-Chijikem-Agu-Resume.pdf"} target="_blank">
            <button className="rounded-[30px] my-4 border hover:bg-black transition-all duration-400 ease-in hover:text-white border-black p-2 w-40 flex items-center justify-center">
              Resume <ArrowUpRight strokeWidth={1.5} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
