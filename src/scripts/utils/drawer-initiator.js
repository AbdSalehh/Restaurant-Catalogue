const DrawerInitiator = {
    init({
        button, drawer, nav, favNav,
    }) {
        button.addEventListener('click', (event) => {
            this._toggleDrawer(event, drawer);
        });

        nav.addEventListener('click', (event) => {
            this._closeDrawer(event, drawer);
        });

        favNav.addEventListener('click', (event) => {
            this._closeDrawer(event, drawer);
        });
    },

    _toggleDrawer(event, drawer) {
        event.stopPropagation();
        event.preventDefault();
        drawer.classList.toggle('open');
    },

    _closeDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.remove('open');
    },

};

export default DrawerInitiator;
