    import {createBrowserRouter, Navigate} from "react-router-dom";
    import {MainLayout} from "./layouts";
    import {MovieDetailsPage, MoviesPage} from "./pages";



    const router =  createBrowserRouter([
        {path: '' , element:<MainLayout/>, children:[
                {index:true, element:<Navigate to={'movies/?page=1'}/>},
                {path:'movies/?page=:page&idsWith=:idsWith?&idsWithout=:idsWithout?', element:<MoviesPage/>},
                {path:'movieDetails/:movieId', element:<MovieDetailsPage/>}
            ]}
    ])
    export {
        router
    }