import Navbar from "@/components/Navbar";

const WithLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <footer>
                This is a footer area
            </footer>
        </div>
    );
};

export default WithLayout;