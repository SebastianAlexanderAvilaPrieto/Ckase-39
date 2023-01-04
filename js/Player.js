class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  addPlayer() {
    var playerindex = "players/player" + this.index;
    if (this.index == 1) {
      this.positionX = width/2 - 100;
    } else {
      this.positionX = width/2 + 100;
    }
    database.ref(playerindex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY
    })
  }

  getDistance() {
    var playerdistanceref = database.ref("players/player" + this.index);
    playerdistanceref.on("value", data => {
      var data = data.val();
      this.positionX = data.positionX;
      this.positionY = data.positionY;
    })
  }

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data=> {
      playerCount = data.val();
    })
  }

  update() {
    var playerindex = "players/player" + this.index;
    database.ref(playerindex).update({
      positionX: this.positionX,
      positionY: this.positionY
    })
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    })
  }

  static getplayersinfo() {
    var playerinforef = database.ref("players");
    playerinforef.on("value", data=>{
      allPlayers = data.val();
    })
  }

 }


