import MenuItem from "./MenuItem"

const MenuItemGenerator = (
  menus
) => {
  return menus
    .map((menu) => (
      <MenuItem
      key={menu.name}
      menu={menu}
    />
  ))
}

const MenuSection = ({
  category,
  menus
}) => (
  <div>
    <h4 className="mt-4 mb-2 font-bold">{category}</h4>
    { MenuItemGenerator(menus) }
  </div>
)

export default MenuSection