function  NavItem(props) {
  const { label } = props;
  return (
    <a href="#" className="relative flex items-center justify-center w-12 h-6 my-auto shadow-lg">
      { label} 
    </a>
  )
}

export default NavItem;