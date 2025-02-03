import AnalyticsChart from "@/components/Dashboard/AnalyticsChart";
import DashboardCard from "@/components/Dashboard/Dashboard";
import PostTable from "@/components/Posts/PostTable";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <DashboardCard
          title="Post"
          count={100}
          icon={<Newspaper className="text-slate-500 " size={72} />}
        />
        <DashboardCard
          title="Catergory"
          count={12}
          icon={<Folder className="text-slate-500 " size={72} />}
        />
        <DashboardCard
          title="Users"
          count={750}
          icon={<User className="text-slate-500 " size={72} />}
        />
        <DashboardCard
          title="Comments"
          count={1200}
          icon={<MessageCircle className="text-slate-500 " size={72} />}
        />
      </div>
      <AnalyticsChart />
      <PostTable title="Latest Posts" limit={5}/>
    </>
  );
}
