import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Fetch from './components/Fetch';
import Submit from './components/Submit';
const router = createBrowserRouter([
  {
    path:'/',  
    element: <Fetch/>
  },
  {
    path:'/submit',
    element:<Submit/>
  }

])
function App() {
  return (
    <div className="App">
      <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
    </div>
  );
}

export default App;
