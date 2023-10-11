const NavItem = (props) => {
  const { label } = props;
  return (
    <a href="#" className="relative flex items-center justify-center w-12 h-6 my-auto mx-6 shadow-lg">
      { label} 
    </a>
  )
}

export default NavItem;