import Header from "@/components/Header";
import { data } from "@/data/data";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";

const Customers = () => {
  return (
    <div className="bg-gray-100 min-h-scre">
      <Header page={"Customers"} user={"John"} />
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-md bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Name</span>
            <span className="sm:text-left text-right">Email</span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidden sm:grid">Method</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className="bg-gray-100 hover:bg-gray-200 rounded-md my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="bg-purple-200 p-3 rounded-md">
                    <BsPersonFill className="text-purple-800" />
                  </div>
                  <p className="pl-4">
                    {order.name.first} {order.name.last}
                  </p>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  {order.name.first}@gmail.com
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

export default Customers;
