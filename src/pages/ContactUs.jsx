import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit() {
    reset();
    toast.success("Thank you for contacting us");
    navigate("/home");
  }

  return (
    <div className="container mx-auto px-4 my-12 text-gray-800 dark:bg-gr">
      <div className=" text-center text-md mb-6  dark:text-gray-200 max-w-md flex justify-center flex-col mx-auto">
        <h2 className="text-3xl font-custom font-semibold mb-6 ">Contact Us</h2>
        <p>
          Contact us through a info@Konjohabesha.com for a quicker response.
          KonjoHabesha.com CC.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "This field required",
            })}
            className={`input ${errors.email ? "border-red-500" : ""}`}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "This field required",
            })}
            className={`input ${errors.email ? "border-red-500" : ""}`}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200"
          >
            Message
          </label>
          <textarea
            id="message"
            {...register("message", {
              required: "This field required",
            })}
            rows="4"
            className={`input ${errors.email ? "border-red-500" : ""}`}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
