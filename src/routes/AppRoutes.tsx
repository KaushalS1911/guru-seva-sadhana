import { Routes, Route } from "react-router-dom";

import NotFound from "@/pages/NotFound";
import HomePage from "@/pages/Home/homePage.tsx";
import AboutPage from "@/pages/About/aboutPage.tsx";
import AshramProgressPage from "@/pages/Ashram/ashramProgressPage.tsx";
import AwardsPage from "@/pages/Awards/awardsPage.tsx";
import BlogPage from "@/pages/Blog/blogPage.tsx";
import ContactPage from "@/pages/Contact/contactPage.tsx";
import DonatePage from "@/pages/Donate/donatePage.tsx";
import GalleryPage from "@/pages/Gallery/galleryPage.tsx";
import OfferingsPage from "@/pages/Offerings/offeringsPage.tsx";
import TestimonialsPage from "@/pages/Testimonials/testimonialsPage.tsx";
import MainLayout from "@/layouts/MainLayout.tsx";


const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout  />}>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/ashram-progress" element={<AshramProgressPage />} />
                <Route path="/awards" element={<AwardsPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/donate" element={<DonatePage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/offerings" element={<OfferingsPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
