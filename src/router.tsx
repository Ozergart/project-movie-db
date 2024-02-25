import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages";



const router =  createBrowserRouter([
    {path: '' , element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'movies/1'}/>},
            {path:'movies/:page', element:<MoviesPage/>}
        ]}
])
export {
    router
}