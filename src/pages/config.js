import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Homepage from "./Homepage";
import Services from "./Services";

const config = [
    {
        path: '/',
        element: <Homepage />
    },
    {
        path: '/about',
        element: <AboutUs />
    },
    {
        path: '/services',
        element: <Services/>
    },
    {
        path: '/aboutus',
        element: <ContactUs/>
    }
]

export default config