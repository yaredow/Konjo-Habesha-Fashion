import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaGoodreads } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="h-40 w-auto bg-stone-900 dark:bg-stone-200 ">
      <div className=" md:pt-18 mx-auto flex h-36 w-[80%] flex-col items-center gap-8 pt-6 md:flex-row md:justify-between">
        <div className="h-18">
          <p className=" tracking-w ide text-center text-xl font-bold text-white dark:text-stone-800">
            Copyright &copy; 2023. All rights are reserved
          </p>
        </div>

        <div className="h-18 flex gap-6">
          <div className="h-9 w-8">
            <a
              className=" inline-block text-3xl text-white hover:text-4xl dark:text-stone-800"
              href="https://github.com/yaredow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTwitterCircle />
            </a>
          </div>

          <div className="h-9 w-8">
            <a
              className="inline-block text-3xl text-white hover:text-4xl dark:text-stone-800"
              href="https://www.linkedin.com/in/yared-yilma-37b586221/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </div>

          <div className="h-9 w-8">
            <a
              className="inline-block text-3xl text-white hover:text-4xl dark:text-stone-800"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook />
            </a>
          </div>

          <div className="h-9 w-8">
            <a
              className="inline-block text-3xl text-white hover:text-4xl dark:text-stone-800"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
