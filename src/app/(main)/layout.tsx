import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";


const MainLayout = ({children}:{ children: React.ReactNode}) => {
    return ( <>
        <div className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
            <Navbar />
        </div>
        
          <div className="flex">
            <div className="hidden md:block h-[100vh] w-[300px] ">
              <Sidebar />
            </div>
            <div className=" p-5 mt-10 w-full md:max-w-[1140px]">{children}</div>
          </div>
    </> );
}
 
export default MainLayout;