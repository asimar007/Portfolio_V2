import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import logo from "../assets/AsimLogo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/asimar007/"
          target="_blank"
          rel="noopener no referrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/asimar007"
          target="_blank"
          rel="noopener no referrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/asim_ar007"
          target="_blank"
          rel="noopener no referrer"
          aria-label="Twitter"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://leetcode.com/u/asim_ar007/"
          target="_blank"
          rel="noopener no referrer"
          aria-label="LeetCode"
        >
          <SiLeetcode />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
