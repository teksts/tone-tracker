import NavItem from "./NavItem";

export function NavBar() {
  return (
    <nav className="fixed top-0 w-screen h-16 m-0 flex justify-around bg-slate-800 text-white shadow-lg">
      <NavItem label={"Item 1"} />
      <NavItem label={"Item 2"} />
      <NavItem label={"Item 3"} />
      <NavItem label={"Item 4"} />
      <NavItem label={"Item 5"} />
    </nav>
  );
}
