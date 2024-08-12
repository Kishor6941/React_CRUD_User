
import styles from "./App.module.css"
import Test from "./components/Test";
import ParentC from "./ParentC";
import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ParentReactMemo from "./ParentReactMemo";
// import Home from './components/Home';
// import AddEditUser from './components/AddEditUser';
// import ViewUserDetails from './components/ViewUserDetails';

const Home=React.lazy(()=>import('./components/Home'))
const AddEditUser =React.lazy(()=>import('./components/AddEditUser'))
const ViewUserDetails=React.lazy(()=>import('./components/ViewUserDetails'))

const App = () => {
  // console.log(styles);
  
  // let obj = { 
  //   color: "blue",
  //    backgroundColor: "pink",
  //    fontSize : "20px" ,
  //    paddingTop:"50px",
  //    marginTop : "100px"
  //   };
  return (
    <div className="m-auto">
      {/* <h1 style={obj}>Kishor Fawade</h1>
      <h1 className={styles.abc}>Kishor Shripati Fawade</h1>
      <Test /> */}
      {/* <BrowserRouter>
        <Layout />
          <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add-user' element={<AddEditUser/>} />
        <Route path='/edit-user/:id' element={<AddEditUser/>} />
        <Route path='/view-user/:id' element={<ViewUserDetails/>} />
        </Routes>
        </Suspense>
      </BrowserRouter> */}
      {/* <ParentC /> */}
      <ParentReactMemo />
    </div>
  );
};

export default App;
