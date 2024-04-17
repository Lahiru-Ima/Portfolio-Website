import Link from "next/link";
const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-l rounded md:p-1 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
