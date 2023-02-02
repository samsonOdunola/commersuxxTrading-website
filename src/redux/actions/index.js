const openMenu = () => {
  return { type: "SHOWMENU" };
};

const closeMenu = () => {
  return { type: "HIDEMENU" };
};

export { openMenu, closeMenu };
