import Logo from "@/components/common/Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProfileDropwdown from "./ProfileDropwdown";

const Header = () => {
  // TODO: Implement login state management
  const login = true;

  return (
    <header className="border-b border-border">
      <div className="container h-16 flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-6">
          <NavLinks className="hidden lg:flex" />

          <div className="flex items-center gap-2">
            {login ? (
              <ProfileDropwdown />
            ) : (
              <Button asChild>
                <Link href={"/"}>Login</Link>
              </Button>
            )}

            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
