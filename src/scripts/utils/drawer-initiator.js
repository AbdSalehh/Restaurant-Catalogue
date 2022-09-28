const DrawerInitiator = {
    init({ button, drawer}) {
        button.addEventListener("click", (event) => {
            this._toggleDrawer(event, drawer);
        });
    },

    _toggleDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.toggle("open");
        event.preventDefault();
    },

};

export default DrawerInitiator;
