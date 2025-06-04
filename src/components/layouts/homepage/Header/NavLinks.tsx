import { Button } from "@/components/ui/button";
import { nav_links } from "@/constants/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

type NavLinksProps = {
  className?: string;
};

const NavLinks = ({ className }: NavLinksProps) => {
  return (
    <nav className={cn("flex items-center gap-x-6", className)}>
      {nav_links.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="hidden lg:block font-bold text-base"
        >
          {item.name}
        </Link>
      ))}

      {nav_links.map((item, index) => (
        <Button key={index} className="w-full" asChild>
          <Link
            key={index}
            href={item.href}
            className="lg:hidden font-bold text-base"
          >
            {item.name}
          </Link>
        </Button>
      ))}
    </nav>
  );
};

export default NavLinks;
