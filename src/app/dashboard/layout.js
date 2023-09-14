import Sidebar from "./Sidebar";

const layout = ({children}) => {
    return (
        <div className="flex">
           <Sidebar></Sidebar>
            {/* dashboard outlet area  */}
            <div className="bg-orange-200 w-full p-10">
            {children}
            </div>
        </div>
    );
};

export default layout;