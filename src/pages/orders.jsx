import { data } from "@/data/data";
import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import Header from "@/components/Header";

const Orders = () => {
  return (
    <div className="bg-gray-100  min-h-screen">
      <Header page={"Orders"} user={"John"} />
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-md bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Order</span>
            <span className="sm:text-left text-right">Status</span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidden sm:grid">Method</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className="bg-gray-100 hover:bg-gray-200 border rounded-md my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="bg-purple-200 p-3 rounded-md">
                    <FaShoppingBag className="text-purple-800" />
                  </div>
                  <div className="pl-4">
                    <p className="text-gray-800">
                      ${order.total.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-400">
                      {order.name.first} {order.name.last}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  <span
                    className={
                      order.status === "Initialized"
                        ? "bg-red-200 p-2 rounded-md"
                        : order.status === "Processing"
                        ? "bg-blue-200 p-2 rounded-md"
                        : order.status === "On Hold"
                        ? "bg-yellow-200 p-2 rounded-md"
                        : "bg-green-200 p-2 rounded-md"
                    }
                  >
                    {order.status}
                  </span>
                </p>
                <p className="hidden md:flex">{order.date}</p>
                <div className="sm:flex hidden justify-between items-center">
                  <p className="">{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Orders;
