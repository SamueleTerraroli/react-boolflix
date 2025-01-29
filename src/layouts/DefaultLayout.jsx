import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";

const DefaultLayout = ({ setSearchTerm }) => {
    return (
        <>
            <header className="d-flex">
                <MainNav setSearchTerm={setSearchTerm} />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default DefaultLayout;
