import axios from "axios";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../cart/cartSlice";
import "react-datepicker/dist/react-datepicker.css";

function CheckoutForm() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [expirationDate, setExpirationDate] = useState(new Date());
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

  return (
    <form className="w-full mx-auto m-4  bg-white rounded">
      <div className="mt-2 mb-6">
        <label
          className="block mb-2 text-md font-custom text-gray-90"
          htmlFor="cus_email"
        >
          Email
        </label>
        <input
          className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
          id="cus_email"
          name="cus_email"
          type="text"
          required=""
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
          className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
          id="cus_name"
          name="cus_name"
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
            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="0000 0000 0000 0000"
            type="text"
          />
        </div>
      </div>
      <div className="flex ">
        <div className="w-1/2 mt-2 mb-6">
          <label className="block mb-2 text-md font-custom text-gray-90">
            Expiration date
          </label>

          <DatePicker
            selected={expirationDate}
            onChange={(date) => setExpirationDate(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            className=" w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
          />
        </div>

        <div className="w-1/2 mt-2 mb-6">
          <label className="block mb-2 text-md font-custom text-gray-90">
            Security code
          </label>
          <div>
            <input
              className=" w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
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
          className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
          id="cus_address"
          name="cus_address"
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
          className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
          id="cus_city"
          name="cus_city"
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
            onChange={handleSelect}
            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
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
            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
            id="cus_zip"
            name="cus_zip"
            type="text"
            required=""
            placeholder="Zip"
            aria-label="Zip"
          />
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/products");
            handleClearCart();
          }}
          className="w-full px-3 py-2 font-semibold hover:bg-blue-600 mb-1 bg-blue-500 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
        >
          PAY NOW
        </button>
      </div>
    </form>
  );
}

export default CheckoutForm;
