import { Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";
import HomePage from "../pages/home/HomePage";
import RegisterPage from "../pages/register/RegisterPage";
import Error404Page from "../pages/404/Error404Page";
import LoginPage from "../pages/login/LoginPage";
import EditCardPage from "../pages/EditCardPage/EditCardPage";
import SandboxPage from "../pages/Sandbox/SandboxPage";
import CreateCardPage from "../pages/CreateCardPage/CreateCardPage";
import AuthGuard from "../Guard/AuthGuard";
import BizGuard from "../Guard/BizGuard";
import About from "../pages/About/About";
import Logout from "../pages/login/Logout";
import FavCards from "../pages/Fav/FavCards";
import ShowCard from "../layout/CardInfo/ShowCard";
import UpdateUser from "../pages/Sandbox/UpdateUser"

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.LOGOUT} element={<Logout />} />
      <Route path={ROUTES.FAV} element={<FavCards />} />
      <Route
        path={ROUTES.CREATECARD}
        element={
          <AuthGuard>
            <BizGuard>
              <CreateCardPage />
            </BizGuard>
          </AuthGuard>
        }
      />
      <Route path={`${ROUTES.EDITCARD}/:id`} element={<EditCardPage />} />
      <Route path={`${ROUTES.CARD}/:id`} element={<ShowCard />} />
      <Route path={`${ROUTES.UPDATE}/:id`} element={<UpdateUser />} />
      <Route path={ROUTES.SANDBOX} element={<SandboxPage />}/>
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
};
export default Router;
