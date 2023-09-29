import { AiOutlineInstagram } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import PaymentIcons from "./PaymentIcons";

function Footer() {
  return (
    <footer className=" shadow-md bg-stone-100 ">
      <div className=" flex flex-col gap-6 md:flex-row items-center justify-between my-8 w-[90%] mx-auto">
        <div>
          <PaymentIcons />
        </div>

        <div className=" flex flex-col gap-4 items-center">
          <div className=" flex flex-row gap-2">
            <div className=" h-12 w-12">
              <CiFacebook className=" text-3xl hover:text-4xl  text-blue-500 " />
            </div>

            <div className=" h-12 w-12">
              <FaXTwitter className=" text-3xl hover:text-4xl  text-blue-500 " />
            </div>

            <div className=" h-12 w-12">
              <AiOutlineInstagram className=" text-3xl hover:text-4xl text-blue-500 " />
            </div>
          </div>
          <div className=" text-lg text-stone-800">
            Copyright &copy; 2023. All rights are reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
