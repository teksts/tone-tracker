import AppName from "./AppName";
import Logo from "./Logo";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-screen h-16 m-0 flex justify-between bg-slate-800 text-white shadow-lg">
      <div className="flex justify-between ml-8">
        <Logo />
        <AppName />
      </div>
      <div className="flex justify-around">
        <NavItem label={"Item 1"} />
        <NavItem label={"Item 2"} />
        <NavItem label={"Item 3"} />
        <NavItem label={"Item 4"} />
        <NavItem label={"Item 5"} />
      </div>
    </nav>
  );
}

export default NavBar;