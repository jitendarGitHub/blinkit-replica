import { useNavigate } from "react-router"

export default function ShoppingBtn() {
    const navigate = useNavigate()
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-gray-700 font-semibold text-xl mb-2">  Your cart is empty!  </h1>

            <button className="bg-purple-700  rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-purple-600 font-bold hover:text-purple-700 p-3" onClick={() => navigate("/")} >
                SHOP NOW
            </button>
        </div>
    )
}