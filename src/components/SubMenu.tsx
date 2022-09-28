function SubMenu() {
  const scrollTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return <div onClick={scrollTop}>Topへ</div>;
}

export default SubMenu;
