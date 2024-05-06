import { useEffect, useState } from "react";
import clsx from "clsx";

import { Button } from "@/components/ui/button";
import { Profile } from "@/components/Profile";
import { projects } from "@/content/projects";
import { resumes } from "@/content/resume";

type PageType = "projects" | "resume";

export default function Home() {
  const [page, setPage] = useState<PageType>("projects");
  const [fade, setFade] = useState(false);

  useEffect(() => {
    document.title = "Dan Cascaval";
  });

  const transition = (target: PageType) => {
    if (target === page) return;

    setFade(true);
    setTimeout(() => {
      setPage(target);
      setTimeout(() => setFade(false), 0);
    }, 500);
  };

  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-6 selection:bg-[#54ca7244] dark:bg-zinc-900 dark:text-zinc-300 md:px-24">
      <nav className="flex w-full max-w-5xl flex-col-reverse justify-between border-b border-gray-400 py-10 md:flex-row">
        <div className="flex items-end gap-4">
          <Button
            variant="ghost"
            className="text-lg"
            onClick={() => transition("projects")}
          >
            Projects
          </Button>
          <Button
            variant="ghost"
            className="text-lg"
            onClick={() => transition("resume")}
          >
            Resume
          </Button>
        </div>
        <Profile />
      </nav>

      <section
        className={clsx(
          "w-full max-w-5xl transition-opacity duration-500",
          fade && "opacity-0"
        )}
      >
        {page === "projects" && projects}
        {page === "resume" && resumes}
      </section>
    </main>
  );
}
