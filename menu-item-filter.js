class MenuItemFiltration {
  constructor(itemContainer) {
    this.itemContainer = itemContainer;
    this.menuItems = itemContainer.querySelectorAll(".menu-item");
    this.filters = itemContainer.querySelectorAll(".menu-item-filter");
    this.init();
  }
  init() {
    this.attachEventHanlder();
  }
  filtration(filter) {
    const menuCategory = filter.dataset.menu_item_category;
    this.filters.forEach((filterBtn) => {
      filterBtn.classList.remove("active-filter");
    });
    filter.classList.add("active-filter");
    this.menuItems.forEach((menuItem) => {
      const menuItemName = menuItem.dataset.menu_item_name;
      if (menuItemName === menuCategory || menuCategory === "all") {
        menuItem.classList.remove("hide-menu-item");
      } else {
        menuItem.classList.add("hide-menu-item");
      }
    });
  }
  attachEventHanlder() {
    this.filters.forEach((filter) => {
      filter.addEventListener("click", () => {
        this.filtration(filter);
      });
    });
  }
}
window.addEventListener("load", () => {
  const menuItemContainer = document.querySelectorAll(".menu-item-container");
  menuItemContainer.forEach((item) => {
    new MenuItemFiltration(item);
  });
});
