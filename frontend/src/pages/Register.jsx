import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Mock register success
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form className="bg-white shadow-md rounded p-6 w-96" onSubmit={handleRegister}>
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input type="text" placeholder="Full Name" className="w-full mb-4 p-2 border rounded" required />
        <input type="email" placeholder="Email" className="w-full mb-4 p-2 border rounded" required />
        <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" required />
        <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Register</button>
      </form>
    </div>
  );
}
