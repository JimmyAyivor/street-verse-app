import { Routes, Route, Outlet } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faDribbble, faFacebook, faGithub, faHtml5, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faArrowUp, faAward, faBars, faBriefcase, faCalendar, faCalendarCheck, faCircle, faCircleNodes, faCirclePlus, faComment, faComments, faEllipsis, faEllipsisV, faEllipsisVertical, faFingerprint, faGear, faMapMarkerAlt, faNewspaper, faPhone, faRetweet, faS, faSearch, faSignOutAlt, faTable, faTimes, faTv, faUniversity, faUser, faUserFriends, faUserPlus, faUsers, faWallet } from "@fortawesome/free-solid-svg-icons";

import "./styles/tailwind.css";

//Pages
import Home from "./pages/home";
import AdminNavbar from "./layouts/Admin";
import UserNavbar from "./layouts/User";
import GlobalNavbar from "./components/Navbars/GlobalNavbar";
import Footer from "./components/Footers/Footer";
import AdminFooter from "./components/Footers/FooterAdmin";
import Dashboard from "./pages/admin/dashboard"
import UserDashboard from "./pages/user/UserDashboard";
import Settings from "./pages/admin/settings"
import Tables from "./pages/admin/tables"
import Messages from "./pages/admin/messages/messages";
import Users from "./pages/admin/users/users";
import UserCommunity from "./pages/user/UserCommunity";
import AdminEvents from "./pages/admin/events/events";
import UserEvents from "./pages/user/UserEvents"
import UserMessages from "./pages/user/UserMessages"

import Login from "./pages/auth/login"
import Register from "./pages/auth/register"
import Profile from "./pages/profile"
import About from "./pages/about";
import HowItWorks from "./pages/howItWorks";
import Community from "./pages/community";
import Faq from "./pages/faq";
import Events from "./pages/events";
import Membership from "./pages/membership";
import TermsAndConditions from "./pages/terms";
import Privacy from "./pages/privacy";
import ContactUs from "./pages/contact";
import FourOFour from "./pages/fourOfour";
import Reset from "./pages/auth/reset"
import EventShow from "./pages/eventShow";
import PrivateOutlet from "./privateRoute";

library.add(fab, faS, faRetweet, faMapMarkerAlt, faUniversity, faBriefcase, faBars, faCalendar, faPhone, faCirclePlus, faCircleNodes, faFingerprint, faAward, faUserFriends, faHtml5, faTwitter, faFacebook, faDribbble, faGithub, faInstagram, faEllipsis, faEllipsisVertical, faEllipsisV, faUsers, faComments, faUserPlus, faSearch, faUser, faGear, faSignOutAlt, faComment, faArrowDown, faArrowUp, faCalendarCheck, faCircle, faTv, faNewspaper, faTimes, faTable, faWallet);




function App() {





  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<LayoutsGlobalNavbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/howitworks" element={<HowItWorks />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/community" element={<Community />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/events" element={<Events />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<ContactUs />} />
          </Route>


          <Route path="/" element={<PrivateOutlet />}>
            <Route path="/" element={<LayoutsAdminNavbar />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/settings" element={<Settings />} />
              <Route path="/admin/tables" element={<Tables />} />
              <Route path="/admin/users" element={<Users />} />
              <Route path="/admin/events" element={<AdminEvents />} />
              <Route path="/admin/messages" element={<Messages />} />
            </Route>
          </Route>
          <Route path="/" element={<PrivateOutlet />}>
            <Route path="/" element={<LayoutsUserNavbar />}>
              <Route path="/user/dashboard" element={<UserDashboard />} />
              <Route path="/user/settings" element={<Settings />} />
              <Route path="/user/community" element={<UserCommunity />} />
              <Route path="/user/events" element={<UserEvents />} />
              <Route path="/user/messages" element={<UserMessages />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/event/:id" element={<EventShow />} />
              <Route path="/profile/:id" element={<Profile />} />
            </Route>
          </Route>

          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path='/auth/reset' element={<Reset />} />

          <Route path="*" element={<FourOFour />} />
        </Routes>
      </main>
    </div>
  );
}
export default App

function LayoutsUserNavbar() {
  return (
    <>
      <UserNavbar >
        <Outlet />
      </UserNavbar>
      <AdminFooter />
    </>
  );
}

function LayoutsAdminNavbar() {
  return (
    <>
      <AdminNavbar>
        <Outlet />
      </AdminNavbar>
      <AdminFooter />
    </>
  );
}
function LayoutsGlobalNavbar() {
  return (
    <>
      <GlobalNavbar />
      <Outlet />
      <Footer />
    </>
  );
}



