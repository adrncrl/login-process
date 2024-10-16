import LandingPage from "views/landing";
import LoginPage from "views/login";
import SignupPage from "views/signup";
import DashboardPage from "views/dashboard";

const routes = [
  { access: "public", path: "/", component: LandingPage },
  { access: "public", path: "/login", component: LoginPage },
  { access: "public", path: "/signup", component: SignupPage },
  { access: "private", path: "/dashboard", component: DashboardPage },
];

export default routes;
