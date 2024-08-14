import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_green_white_checkmark.svg/2048px-Eo_circle_green_white_checkmark.svg.png"
        alt="green tick"
        className="w-20 h-20 grayscale"
      />
      <h1 className="text-xl tracking-wide font-bold">
        Order Placed Successfully!
      </h1>
      <p className="text-xs sm:text-xl text-gray-600">
        Thank you for your order. You will receive a confirmation email shortly.
      </p>
      <button
        className="bg-black text-white px-6 py-3 rounded-lg"
        onClick={() => navigate("/")}
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default Success;
