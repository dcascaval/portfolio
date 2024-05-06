import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ForwardRefExoticComponent } from "react";
import {
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";

type LogoButtonProps = {
  href: string;
  icon: ForwardRefExoticComponent<IconProps>;
};

const LogoButton = ({ href, icon: Icon }: LogoButtonProps) => (
  <a href={href} target="_blank">
    <Button
      variant="ghost"
      className="h-6 px-2 py-0 hover:text-green-500 dark:hover:bg-zinc-600"
    >
      <Icon className="h-4 w-4 min-w-4" />
    </Button>
  </a>
);

export const Profile = () => (
  <div className="mb-6 flex min-w-fit md:mb-0">
    <div>
      <Image
        className="relative h-12 w-12 min-w-12 rounded-full"
        alt="Profile picture"
        src="/profile.jpg"
        width={50}
        height={50}
      />
    </div>
    <div className="px-4">
      <p className="text-lg font-bold">Dan Cascaval</p>
      <p className="font-mono text-sm">dan@cascaval.org</p>
    </div>
    <div className="grid grid-cols-2">
      <LogoButton href="mailto:dan@cascaval.org" icon={EnvelopeClosedIcon} />
      <LogoButton
        href="https://www.linkedin.com/in/dan-cascaval/"
        icon={LinkedInLogoIcon}
      />
      <LogoButton
        href="https://www.instagram.com/de.methodic/"
        icon={InstagramLogoIcon}
      />
      <LogoButton href="https://github.com/dcascaval" icon={GitHubLogoIcon} />
    </div>
  </div>
);
