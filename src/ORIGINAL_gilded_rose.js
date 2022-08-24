class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {

  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {

    for (var i = 0; i < this.items.length; i++) {

      var degradSpeed = this.getDegradSpeed(this.items[i]);
      this.checkName(this.items[i], degradSpeed);
      this.checkQualityLimits(this.items[i]);
      this.updateSellIn(this.items[i]);
    }

    return this.items;
  }

  getDegradSpeed = (item) => {
    return item.sellIn <= 0 ? 2 : 1;
  }

  checkName = (item, degradSpeed) => {
    switch(true) {
      case (item.name === 'Aged Brie'):
        // console.log("On est dans le case Aged Brie.");
        item.quality += 1;
        break;
      case (item.name === 'Sulfuras') :
        // console.log("On est dans le case Sulfuras.");
        break;
      case (item.name === 'Backstage passes to a TAFKAL80ETC concert') :
        // console.log("On est dans le case Backstage passes.");
        switch(true) {
          case (item.sellIn <= 10 && item.sellIn > 5) :
            item.quality += 2;
            break;
          case (item.sellIn <= 5 && item.sellIn > 0) :
            item.quality += 3;
            break;
          case (item.sellIn <= 0) :
            item.quality = 0;
            break;
          default:
            item.quality += 1;
        }
        break;
      case (item.name.indexOf("Conjured") !== -1) :
        item.quality -= degradSpeed*2;
        // console.log("On est dans le cas Conjured.");
        break;
      default:
        // console.log("On est dans le default");
        item.quality -= 1*degradSpeed;
    }

  }

  checkQualityLimits = (item) => {
    if (item.name !== "Sulfuras") {
      if (item.quality < 0) { item.quality = 0 }
      if (item.quality > 50 ) { item.quality = 50 }
    }
  }

  updateSellIn = (item) => {
    item.sellIn -= 1;
  }

}
module.exports = {
  Item,
  Shop
}


// const perform = () => {
//   console.log("test");

  // const item1 = new Item("couteau", 30, 10);
  // const item2 = new Item("fourchette", 20, 25);
  // const item3 = new Item("Aged Brie", 20, 30);
  // const item4 = new Item("Sulfuras", Infinity, 80);
  // const item5 = new Item("Backstage passes to a TAFKAL80ETC concert", 30, 10);
  // const item6 = new Item("Conjured something", 30, 25);

  // const shop = new Shop([item1, item2, item3, item4, item5, item6]);

//   // console.log(shop);

//   for (let i = 0 ; i < 30 ; i++) {
//     shop.updateQuality();
//   }
  
//   console.log(shop);
// }

// perform();