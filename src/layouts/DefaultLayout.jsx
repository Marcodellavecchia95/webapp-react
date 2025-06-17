import Header from "../components/Header";
import { Outlet } from "react-router";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
