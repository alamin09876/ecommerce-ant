import { Route, Routes } from "react-router-dom";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/:categoryId" element={<Category></Category>}></Route>
    </Routes>
  );
}
export default AppRoutes;
