import { Button } from "@/components/ui/button";
import { ReactNode, useState } from "react";
import { CaretDownIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

type ProjectProps = {
  title: string;
  description: string;
  linkText?: string;
  linkTarget?: string;
  image?: ReactNode;
  children: ReactNode;
};

export const Project = ({
  title,
  description,
  linkText,
  linkTarget,
  image,
  children,
}: ProjectProps) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      className={clsx(
        "group relative mt-10 h-fit w-full min-w-full border-l border-t border-gray-400 py-6 pl-4 transition-all duration-100 hover:border-green-500 md:pl-10",
        expanded && "rounded-tl-2xl border-l",
        !expanded && "border-l-transparent hover:border-l-transparent",
      )}
    >
      <div className="absolute -top-[1.625rem] left-4 w-fit bg-white p-2 text-2xl font-bold dark:bg-zinc-900">
        {title}
      </div>
      <div
        className="mb-4 flex w-full cursor-pointer justify-between border-b border-gray-400 pb-4 font-medium group-hover:border-green-500"
        onClick={() => setExpanded(!expanded)}
      >
        <p className="select-none">
          {description}
          {linkTarget && linkText && (
            <a
              href={linkTarget}
              target="_blank"
              className="underline-offset ml-4 text-green-500 underline"
              onClick={(e) => e.stopPropagation()}
            >
              {linkText}
            </a>
          )}
        </p>
        <Button variant="ghost" className="h-6 p-0 dark:hover:bg-zinc-600">
          <CaretDownIcon
            className={clsx(
              "h-8 w-8 transition-transform duration-100 group-hover:text-green-500",
              !expanded && "-rotate-90",
            )}
          />
        </Button>
      </div>
      <div
        className={clsx(
          expanded
            ? "h-full scale-y-100 opacity-100"
            : "h-0 scale-y-0 opacity-0",
          "origin-top overflow-hidden transition-all duration-100",
        )}
      >
        {image && <div>{image}</div>}
        <div className={clsx("mr-6", image && "mt-10")}>{children}</div>
      </div>
    </div>
  );
};

export const P = ({ children }: { children: ReactNode }) => (
  <div className="mb-4 last:mb-0">{children}</div>
);

type LProps = {
  href: string;
  children: ReactNode;
};

export const L = ({ href, children }: LProps) => (
  <a
    href={href}
    target="_blank"
    className="underline-offset text-green-500 hover:underline"
  >
    {children}
  </a>
);
