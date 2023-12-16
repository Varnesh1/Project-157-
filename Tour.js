AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
    
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "poster1",
        url: "./assets/thumbnails/spiderman.jpg",
      },
      {
        id: "poster2",
        url: "./assets/thumbnails/speed.jpg",
      },

      {
        id: "poster3",
        url: "./assets/thumbnails/marvel.jpg",
      },
      {
        id: "poster4",
        url: "./assets/thumbnails/ironman.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id)
      // Thumbnail Element
     const thumbnailEl = this.createThumbnail(item)
      // Title Text Element
      const textEl = this.createTitle(position, item)

      borderEl.appendChild(thumbnailEl)
      borderEl.appendChild(textEl)
      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position, id){
    const entityEL = document.createElement('a-entity');
    entityEL.setAttribute('id', id);
    entityEL.setAttribute('visible', true)
    entityEL.setAttribute('geometry',{
      primitive:'rectangle',
      width : 9,
      height: 10,
    })
    entityEL.setAttribute('position', position)
    entityEL.setAttribute('material', {color:'orange', opacity: 0.4})
    return entityEL;
  },

  createThumbnail : function(item){
    const entityEL = document.createElement('a-entity');
    entityEL.setAttribute('visible', true);
    entityEL.setAttribute('geometry', {
      primitive: 'box',
      width: 9,
      height:10,
    })
    entityEL.setAttribute('material', {src:item.url})
    return entityEL
  },

  createTitle : function(position, item){
    const entityEL = document.createElement('a-entity')
    entityEL.setAttribute('text',{
      font:'exo2bold',
      align:'center',
      width:75,
      color:'black',
      value:item.title

    } )
    const elposition = position
    elposition.y = -20
    entityEL.setAttribute('position', elposition)
    entityEL.setAttribute('visible', true)
    return entityEL
  },

});
