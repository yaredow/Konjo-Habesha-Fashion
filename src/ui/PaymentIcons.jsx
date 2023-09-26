import Visa from "../../public/icons/Visa.svg";
import Amex from "../../public/icons/Amex.svg";
import ApplePay from "../../public/icons/ApplePay.svg";
import DinnersClub from "../../public/icons/DinnersClub.svg";
import Discover from "../../public/icons/Discover.svg";
import GooglePay from "../../public/icons/GooglePay.svg";
import MasterCard from "../../public/icons/MasterCard.svg";
import PayPal from "../../public/icons/PayPal.svg";
import PaymentIconsContainer from "./PaymentIconsContainer";

function PaymentIcons() {
  const paymentMethods = [
    <img src={Amex} alt="Amex icon" key="Amex icon" />,
    <img className=" mt-[8px]" src={Visa} alt="visa" key="Visa icon" />,
    <img src={DinnersClub} alt="Dinner Club" key="Dinner Club icon" />,
    <img src={Discover} alt="Discover" key="Discover icon" />,
    <img src={MasterCard} alt="MasterCard" key="MasterCard icon" />,
    <img src={ApplePay} alt="Apple Pay" key="Apple Pay" />,
    <img src={GooglePay} alt="GooglePay" key="Google Pay icon" />,
    <img src={PayPal} alt="PayPal" key="PayPal icon" />,
  ];
  return (
    <div className=" flex flex-row gap-1">
      {paymentMethods.map((paymentMethod) => (
        <PaymentIconsContainer
          key={paymentMethod.key}
          paymentMethod={paymentMethod}
        />
      ))}
    </div>
  );
}

export default PaymentIcons;
