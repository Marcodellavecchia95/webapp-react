import { Outlet } from "react-router";

export default function DefaultLayout() {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
