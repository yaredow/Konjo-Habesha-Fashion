import PaymentIcons from "./PaymentIcons";
import NewsLetter from "./NewsLetter.jsx";
import QuickAccess from "./QuickAccess";

function Footer() {
  return (
    <footer className=" shadow-md bg-gray-100 mt-8">
      <QuickAccess />
      <NewsLetter />
      <div className="flex flex-col gap-6 md:flex-row items-center justify-between my-8 w-[90%] mx-auto">
        <div>
          <PaymentIcons />
        </div>

        <div className=" flex flex-col gap-4 items-center">
          <div className=" text-sm text-stone-800">
            Copyright &copy; 2023. All rights are reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
