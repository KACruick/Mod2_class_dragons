class Dragon {
  constructor(name, color) {
    this.name = name
    this.color = color
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...dragons) {
    let dragonArr = dragons.map((dragon) => dragon.name)
    return dragonArr
  }
 
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
