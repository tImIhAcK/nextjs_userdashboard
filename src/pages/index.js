import BarChart from "@/components/BarChart";
import Header from "@/components/Header";
import RecentOrders from "@/components/RecentOrders";
import TopCards from "@/components/TopCards";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header page={"Dashboard"} user={"John"} />
      <TopCards />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-4">
        <BarChart />
        <RecentOrders />
      </div>
    </main>
  );
}
