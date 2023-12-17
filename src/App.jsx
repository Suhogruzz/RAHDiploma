import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './pages/Footer/footer.jsx';
import Header from './pages/Header/header.jsx';
import Main from './pages/Main/main.jsx';
import MainPage from './pages/MainPage/mainPage.jsx';
import CatalogPage from './pages/CataloguePage/cataloguePage.jsx';
import CartPage from './pages/CartPage/cartPage.jsx';
import ItemPage from './pages/ItemPage/itemPage.jsx';
import AboutPage from './pages/AboutPage/aboutPage.jsx';
import ContactsPage from './pages/ContactsPage/contactsPage.jsx';
import ErrorPage from './pages/ErrorPage/errorPage.jsx';
import { MenuData, ContactsData, PayData } from './utils/constants.js';
import './main.css';

const App = () => (
  <div className="container">
    <Router>
      <Header menu={MenuData} searchUrl="/catalog" />
      <Main>
        <Routes>
          <Route path="/">
            <Route index element={<MainPage />} />
            <Route path="/products/:id" element={<ItemPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contacts" element={<ContactsPage data={ContactsData} />} />
            <Route path="/about" element={<AboutPage data={ContactsData} />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Main>
      <Footer menu={MenuData} payData={PayData} contacts={ContactsData} />
    </Router>
  </div>
);

export default App;