import ThemeToggler from "@/components/ThemeToggler";

const AuthLayout = ({children}:{ children: React.ReactNode}) => {
    return ( <div className="h-[100vh] flex items-center justify-center relative">
        <div className="absolute text-white top-5 right-0">
            <ThemeToggler />
        </div>
        {children}
    </div> );
}
 
export default AuthLayout;