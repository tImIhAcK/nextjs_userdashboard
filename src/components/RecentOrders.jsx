import { data } from "@/data/data";
import { FaShoppingBag } from "react-icons/fa";

const RecentOrders = () => {
  return (
    <div className="w-full col-span-1 relative md:h-[70vh] h-[50vh] m-auto p-4 border rounded-md bg-white overflow-scroll">
      <h1>Recent Orders</h1>
      <ul>
        {data.map((order, id) => (
          <li
            key={id}
            className="bg-gray-100 hover:bg-gray-200 rounded-md my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="bg-purple-300 rounded-md p-3">
              <FaShoppingBag className="text-purple-800" />
            </div>
            <div className="pl-4">
              <p className="text-gray-800 font-bold">${order.total}</p>
              <p className="text-gray-400 text-sm">{order.name.first}</p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm">
              {order.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
