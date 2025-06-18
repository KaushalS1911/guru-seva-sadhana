import { Outlet } from "react-router-dom";
import Navigation from "@/components/Navigation.tsx";
import Footer from "@/components/Footer.tsx";


const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* Top Navigation Bar */}
            <Navigation />

            {/* Routed page content will appear here */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;
