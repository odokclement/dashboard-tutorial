import { Card,CardContent } from "../ui/card";
import { LucideIcon } from "lucide-react";


interface DashboardCardProps {
 title: string;
 count: number;
 icon: React.ReactElement<LucideIcon>;   
}

const DashboardCard = ({title,count,icon}: DashboardCardProps) => {
    return ( <Card className="bg-slate-100 dark:bg-slate-800 text-white p-4 pb-0">
        <CardContent>
          <h3 className="text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-800">{title}</h3>
          <div className="flex justify-center gap-5 items-center">
            {icon}
            <div className="h3 text-5xl font-semibold text-slate-500 dark:text-slate-200">{count}</div>
          </div>
          
        </CardContent>
    </Card> );
}
 
export default DashboardCard;