import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/layout";
import HomePage from "../pages/Home";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {index: true, element:<HomePage/>}
        ]
    }
    
])


export default router