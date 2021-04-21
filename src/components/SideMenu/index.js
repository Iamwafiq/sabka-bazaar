import "./style.scss";
const SideMenuComponent = ({ categories }) => {
  return (
    <div className="side-menu">
      {categories &&
        categories.map((category) => (
          <div key={category.id} className="each-filter">
            {category.name}
          </div>
        ))}
    </div>
  );
};
export default SideMenuComponent;
