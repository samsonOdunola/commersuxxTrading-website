const initstate = {
  isMenuOpened: false,
};
const states = (state = initstate, action) => {
  if (action.type === "SHOWMENU") {
    return { ...state, isMenuOpened: true };
  }
  if (action.type === "HIDEMENU") {
    return { ...state, isMenuOpened: false };
  } else {
    return state;
  }
};

export default states;
