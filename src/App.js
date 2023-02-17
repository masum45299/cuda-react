

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import MainNav from './Components/MainNav/MainNav';
import Work from './Components/Work/Work';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';


function App() {
  const router=createBrowserRouter([
    {path :'/' , element: <MainNav></MainNav>, children: [
      {path:'/', element: <Home></Home>},
      {path : '/Home', element : <Home></Home>},
      {path : '/About', element : <About></About>},
      {path : '/Work', element : <Work></Work>},
      {path : '/Blog', element : <Blog></Blog>},
      {path : '/Contact', element : <Contact></Contact>},
    ]},
  ])
  return (
    <div className="App">
      <RouterProvider
      router={router}
      ></RouterProvider>
    </div>
  );
}

export default App;
