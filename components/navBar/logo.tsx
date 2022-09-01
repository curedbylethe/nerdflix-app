import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="lg:w-300 sm:w-100 md:w-250">
      <div className="">
        <Link href="/">
          <a className="flex mb-3 align-middle">
            <Image
              src="/nerdflix.png"
              width={250}
              height={50}
              alt="Website Logo"
            ></Image>
          </a>
        </Link>
      </div>
    </div>
  );
};
export default Logo;
