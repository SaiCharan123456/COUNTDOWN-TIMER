AFRAME.registerComponent("coins", {
    init: function () {
      for (var i = 1; i <= 30; i++) {
        const id = `coin${i}`;
  
        const posX = Math.random() * 90 + -30;
        const posY = Math.random() * 10 + 5;
        const posZ = Math.random() * 50 + -20;

        const position = { x: posX, y: posY, z: posZ };
        this.createCoins(id, position);
      }
    },
    createCoins: function (id, position) {
      const treasureEntity = document.querySelector("#treasureCoins");
      var coinEl = document.createElement("a-entity");
  
      coinEl.setAttribute("id", id);
      coinEl.setAttribute("position", position);
      coinEl.setAttribute("material", "color", "#ff9100");
     
      coinEl.setAttribute("geometry",{ primitive: "circle",radius: 1 });

      coinEl.setAttribute("animation", {
        property: "rotation",
        to: "0 360 0",
        loop: "true",
        dur: 1000,
      });  
       
      coinEl.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 1
      });
  
      coinEl.setAttribute("game-play", {
        elementId: `#${id}`
      });
      
      treasureEntity.appendChild(coinEl);
    }
  });
  