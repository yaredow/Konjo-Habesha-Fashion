import axios from "axios";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../cart/cartSlice";
import { IoIosArrowBack } from "react-icons/io";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import useMaskedCreditCard from "../../hook/useMaskedCreditCard";

function CheckoutForm() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [expirationDate, setExpirationDate] = useState(new Date());
  const { displayedCardNumber, handleCardNumberChange } = useMaskedCreditCard();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countries = response.data.map((country) => ({
          value: country.cca2,
          label: country.name.common,
        }));

        countries.sort((a, b) => a.label.localeCompare(b.label));
        setCountries(countries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleSelect = (e) => {
    const country = countries.find((c) => c.value === e.target.value);
    setSelectedCountry(country);
    onselect(country);
  };
  function onSubmit(data) {
    console.log("Form data submitted:", data);
    navigate("/products");
    handleClearCart();
    reset();
  }
  function onErrors(errors) {
    console.error(errors);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onErrors)}
      className="w-full mx-auto m-4  bg-white rounded"
    >
      <div className="mt-2 mb-6">
        <label
          className="block mb-2 text-md font-custom text-gray-90"
          htmlFor="cus_email"
        >
          Email
        </label>
        <input
          className={`input ${errors.email ? "border-red-500" : ""}`}
          id="email"
          name="cus_email"
          type="text"
          {...register("email", {
            required: "This field required",
          })}
          placeholder="Your Email"
          aria-label="Email"
        />
      </div>
      <div className="mt-2 mb-6">
        <label
          className="block mb-2 text-md font-custom text-gray-90"
          htmlFor="cus_name"
        >
          Name on card
        </label>
        <input
          className={`input ${errors.name ? "border-red-500" : ""}`}
          id="name"
          {...register("name", {
            required: "This field required",
          })}
          name="name"
          type="text"
          required=""
          placeholder="Your Name"
          aria-label="Name"
        />
      </div>
      <div className="mb-3">
        <label className="block mb-2 text-md font-custom text-gray-90">
          Card number
        </label>
        <div>
          <input
            className={`input ${errors.cardNumber ? "border-red-500" : ""}`}
            id="cardNumber"
            {...register("cardNumber", {
              required: "This field required",
              max: {
                value: 16,
                message: "The number of degits have to be 16",
              },
            })}
            value={displayedCardNumber}
            onChange={(e) => handleCardNumberChange(e.target.value)}
            placeholder="0000 0000 0000 0000"
            type="text"
          />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-1/2 mt-2 mb-6">
          <label className="block mb-2 text-md font-custom text-gray-90">
            Expiration date
          </label>

          <DatePicker
            selected={expirationDate}
            onChange={(date) => setExpirationDate(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            className={`input ${errors.securityCode ? "border-red-500" : ""}`}
          />
        </div>

        <div className="w-1/2 mt-2 mb-6">
          <label className="block mb-2 text-md font-custom text-gray-90">
            Security code
          </label>
          <div>
            <input
              className={`input ${errors.securityCode ? "border-red-500" : ""}`}
              id="securityCode"
              {...register("securityCode", {
                required: "This field required",
                min: {
                  value: 3,
                  message: "Security number code has to be three degit",
                },
              })}
              placeholder="000"
              type="text"
            />
          </div>
        </div>
      </div>

      <div className="mt-2 mb-6">
        <label
          className="block mb-2 text-md font-custom text-gray-90"
          htmlFor="cus_address"
        >
          Address
        </label>
        <input
          className={`input ${errors.address ? "border-red-500" : ""}`}
          id="address"
          {...register("address", {
            required: "This field required",
          })}
          name="address"
          type="text"
          required=""
          placeholder="Street"
          aria-label="Address"
        />
      </div>
      <div className="mt-2 mb-6">
        <label
          className="block mb-2 text-md font-custom text-gray-90"
          htmlFor="cus_city"
        >
          City
        </label>
        <input
          className={`input ${errors.city ? "border-red-500" : ""}`}
          id="city"
          {...register("city", {
            required: "This field required",
          })}
          name="city"
          type="text"
          required=""
          placeholder="City"
          aria-label="City"
        />
      </div>

      <div className=" flex gap-4">
        <div className="mt-2 mb-6 w-1/2">
          <label
            className="block mb-2 text-md font-custom text-gray-90"
            htmlFor="cus_country"
          >
            Country
          </label>

          <select
            value={selectedCountry ? selectedCountry.value : ""}
            id="country"
            onChange={handleSelect}
            className={`input ${errors.country ? "border-red-500" : ""}`}
          >
            <option value="" disabled>
              Select a country
            </option>
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-2 mb-6 w-1/2">
          <label
            className="block mb-2 text-md font-custom text-gray-90"
            htmlFor="cus_zip"
          >
            Zip
          </label>
          <input
            className={`input ${errors.zip ? "border-red-500" : ""}`}
            id="zip"
            {...register("zip", {
              required: "This field required",
            })}
            name="zip"
            type="text"
            required=""
            placeholder="Zip"
            aria-label="Zip"
          />
        </div>
      </div>
      <div className=" flex flex-row items-center">
        <button
          onClick={() => {
            navigate("/products");
          }}
          className="w-full md:px-3 py-2 font-semibold mb-1 rounded-md transition-colors cursor-pointer flex items-center"
        >
          <IoIosArrowBack className="text-black mr-2" />
          <span className=" text-stone-600">Return to shopping</span>
        </button>

        <button
          type="submit"
          className="w-full px-3 py-2 font-semibold hover:bg-blue-600 mb-1 bg-blue-500 border rounded-md focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
        >
          PAY NOW
        </button>
      </div>
    </form>
  );
}

export default CheckoutForm;
