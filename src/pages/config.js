import AboutUs from "./AboutUs";
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
    }
]

export default config