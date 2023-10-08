import { useState } from "react";

function useMaskedCreditCard(initialValue = "") {
  const [cardNumber, setCardNumber] = useState(initialValue);
  const [displayedCardNumber, setDisplayedCardNumber] = useState("");

  const handleCardNumberChange = (inputCardNumber) => {
    // Only allow digits and limit to a maximum of 16 characters (typical for credit card numbers)
    const sanitizedCardNumber = inputCardNumber.replace(/\D/g, "").slice(0, 16);

    setCardNumber(sanitizedCardNumber);

    // Display only the last 4 digits and replace the rest with "*"
    const displayedDigits = sanitizedCardNumber
      .slice(-4)
      .padStart(sanitizedCardNumber.length, "*");
    setDisplayedCardNumber(displayedDigits);
  };

  return {
    cardNumber,
    displayedCardNumber,
    handleCardNumberChange,
  };
}

export default useMaskedCreditCard;
