import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <Image
        src={"/icon/logoipsum.svg"}
        alt="Logoipsum"
        width={35}
        height={35}
      />

      <h1 className="text-2xl font-bold text-main-foreground tracking-tight">
        Genzet Daily
      </h1>
    </Link>
  );
};
export default Logo;
