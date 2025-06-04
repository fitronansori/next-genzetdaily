import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border">
      <div className="container flex flex-col items-center justify-between gap-4 py-5 lg:flex-row lg:py-0 lg:h-16">
        <div className="flex flex-col items-center gap-4 px-8 lg:flex-row lg:gap-2 lg:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground lg:text-left">
            Dibuild pake{" "}
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Next.js
            </Link>{" "}
            sama{" "}
            <Link
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              shadcn/ui
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-6">
          <nav className="flex flex-col items-center justify-center lg:flex-row gap-4 md:gap-6">
            <Link href="#" className="text-sm font-medium">
              Terms & Condition, sih
            </Link>
            <Link href="#" className="text-sm font-medium">
              Privacy Policy, bro
            </Link>
            <Link href="#" className="text-sm font-medium">
              Contact Me, dong
            </Link>
          </nav>

          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Ansori Dev. Hak cipta dilindungi,
            bro!
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
