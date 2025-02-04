import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";


interface BackButtonProps {
 text: string;
 link: string;   
}

const BackButton = ({text,link}: BackButtonProps) => {
    return ( <div>
        <Button className="bg-white text-gray-500 hover:bg-gray-100 px-3 py-2 rounded-lg">
        <Link href={link} className="text-grey-500 hover:underline flex items-center gap-1 font-semibold mb-5"> 
                <ArrowLeftCircle size={16} className="inline-block mr-2"/>
                {text}
        </Link> 
        </Button>
    </div> );
}
 
export default BackButton;