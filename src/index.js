import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

//import NetflixIndexComponent from './components/NetflixIndexComponent'; 
import reportWebVitals from './reportWebVitals';
import DataBindingComponent from './components/DataBindingComponent';
import ShoppingComponent from './components/shoppingComponent';
import EventBindingComponent from './components/EventBindingDemo';
import OnewayBinding from './PracticeComponents/onewaybinding';
import FetchData from './PracticeComponents/fetchData';
import TwoWayBinding from './components/TwoWayBinding';
import ShoppingDemo from './PracticeComponents/shoppingDemo';
import OneWayClassDemo from './components/OneWayClassDemo';
import TwoWayClassDemo from './components/TwoWayBindingClassDemo';
import ShoppingClassDemo from './components/ShoppingClassDemo';
import CardsDisplay from './PracticeComponents/CardsDisplayComponent';
import LoginComponent from './components/LoginComponent';
import FormComponent from './components/formComponent';
import FormikDemo from './components/FormikDemo';
import FormikValidation from './components/formikvalidations';
import YupValidation from './components/yupvalidation';
import YupValidationComponent from './components/YupValidationComponent';
import LifeCycleDemo from './components/LifeCycleDemo';
import ReactHookDemo from './components/ReactHookDemo';
import ContextDemo from './components/ContextDemo';
import UserLogin from './components/UserLogin';

import { CookiesProvider } from 'react-cookie';
import ReducerDemo from './components/ReducerDemo';
import { CustomHook } from './hooks/customHookDemo';
import UserLoginCus from './components/UserLogin 1';
import Card from './practice/Card';
import AppDemo from './practice/App';
import { LoadProducts } from './practice/LoadProducts';
import JqueryAjaxDemo from './components/JqueryAjaxDemo';
import AxiosDemo from './components/axiosDemo';
import ShoppingIndex from './shopping/ShoppingIndex';
import SPAComponent from './components/SPAComponent';
import TutorialRoutes from './components/TutorialRoutes';
import IshopIndex from './ishop/IShopIndex';
import MainComponent from './BankApp/MainComponent';
import SearchDemo from './components/SearchDemo';

//import RegisterComponent from './components/RegisterClassComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchDemo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
