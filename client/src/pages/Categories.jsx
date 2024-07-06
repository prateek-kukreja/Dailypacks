import { Outlet } from "react-router-dom";
import CategoriesFilter from "../components/CategoriesFilter";

function Categories() {
  return (
    <>
      <CategoriesFilter />
      <Outlet />
    </>
  );
}

export default Categories;
