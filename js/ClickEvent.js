AFRAME.registerComponent("cursor-listener",{
  schema: {
    selectedItemId: {default: "", type: "string"},
  },
    init: function(){
      this.handleMouseEnterEvents()
      this.handleMouseLeaveEvents()
    },

  handleMouseEnterEvents: function(){
    this.el.addEventListener("mouseenter", () => {
      const id = this.el.getAttribute("id");
    const placesId = [
      "Spiderman",
      "Captain_America",
      "Hulk",
      "Iron_man"
    ];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#posters-container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id
      });
      this.el.setAttribute("material", {color:"blue"});
    }
    })
  },
  handleMouseLeaveEvents: function () {
    //Cursor 'mouseleave' Events
    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data;
      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if (id == selectedItemId) {
          el.setAttribute("material", {
            color: "red",
            opacity: 1,
          });
        }
      }
    });
  },

  handleMouseClickEvents: function(){
    // mouse click events
    this.el.addEventListener("click", () => {
      const{ selectedItemId } = this.data;

      const fadeBackgroundE1 = document.querySelector("#fadeBackground");
      const titleE1 = document.querySelector("#app-title");
      const cursorE1 = document.querySelector("#camera-cursor");
    })

    if (selectedItemId) {
      fadeBackgroundE1.setAttribute("visible", true);
      fadeBackgroundE1.setAttribute("info-banner", {
        itemId: selectedItemId,
      });
      titleE1.setAttribute("visible", false);
      cursorE1.setAttribute("position", {x:0, y:0, z:-1});
      cursorE1.setAttribute("geometry", {
        radiusInner:0.03,
        radiusOuter:0.04,
      });
    } else {
      fadeBackgroundE1.setAttribute("visible", false);
      titleE1.setAttribute("visible", true);
      cursorE1.setAttribute("position", {x:0, y:0, z:-3});
      cursorE1.setAttribute("geometry", {
        radiusInner:0.08,
        radiusOuter:0.12,
      });
    }
  },

  update:function(){
    const fadeBackgroundE1 = document.querySelector("#fadeBackground");

    c = fadeBackgroundE1.children;
    if(c.lenght > 0) {
      var i;
      for (i = 0; i <= c.lenght; i++) {
        fadeBackgroundE1.removeChild(c[i]);
    }
  } else {
    this.handleMouseClickEvents();
  }
}

});