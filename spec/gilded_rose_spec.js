var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  ///////////////////////////////////////////////////
  /////////// TEST WITH A sellIn POSITIVE ///////////
  ///////////////////////////////////////////////////

  // Test the "normal items" : decreasing the quality by 1 with a sellIn >= 0
  it("should decrease fork quality by 1", () => {
    const knife = new Item("knife", 30, 10);
    const fork = new Item("fork", 20, 25);
    const agedBrie = new Item("Aged Brie", 20, 30);
    const sulfuras = new Item("Sulfuras", Infinity, 80);
    const backstage = new Item("Backstage passes to a TAFKAL80ETC concert", 30, 10);
    const conjured = new Item("Conjured something", 30, 25);
    const gildedRose = new Shop([knife, fork, agedBrie, sulfuras, backstage, conjured]);

    const forkQualityBefore = fork.quality;
    gildedRose.updateQuality();
    const forkQualityAfter = fork.quality;
    expect(forkQualityAfter).toEqual(forkQualityBefore - 1);
  })

  // Test the "Aged Brie" : increasing the quality by 1
  it("sould increase Aged Brie quality by 1", () => {
    const knife = new Item("knife", 30, 10);
    const fork = new Item("fork", 20, 25);
    const agedBrie = new Item("Aged Brie", 20, 30);
    const sulfuras = new Item("Sulfuras", Infinity, 80);
    const backstage = new Item("Backstage passes to a TAFKAL80ETC concert", 30, 10);
    const conjured = new Item("Conjured something", 30, 25);
    const gildedRose = new Shop([knife, fork, agedBrie, sulfuras, backstage, conjured]);

   const agedBrieQualityBefore = agedBrie.quality;
   gildedRose.updateQuality();
   const agedBrieQualityAfter = agedBrie.quality;
   expect(agedBrieQualityAfter).toEqual(agedBrieQualityBefore + 1);
  })

  // Test the "Sulfuras" : quality has to remain at 80
  it("should unchange Sulfuras quality", () => {
    const knife = new Item("knife", 30, 10);
    const fork = new Item("fork", 20, 25);
    const agedBrie = new Item("Aged Brie", 20, 30);
    const sulfuras = new Item("Sulfuras", Infinity, 80);
    const backstage = new Item("Backstage passes to a TAFKAL80ETC concert", 30, 10);
    const conjured = new Item("Conjured something", 30, 25);
    const gildedRose = new Shop([knife, fork, agedBrie, sulfuras, backstage, conjured]);

    const sulfurasQualityBefore = sulfuras.quality;
    gildedRose.updateQuality();
    const sulfurasQualityAfter = sulfuras.quality;
    expect(sulfurasQualityAfter).toEqual(sulfurasQualityBefore);
  })

  // Test the "Backstage passes to a TAFKAL80ETC concert" : increasing quality by 2 with a sellIn <= 10
  it("should increase 'Backstage passes to a TAFKAL80ETC concert' quality by 2 with a sellIn <= 10", () => {
    const knife = new Item("knife", 30, 10);
    const fork = new Item("fork", 20, 25);
    const agedBrie = new Item("Aged Brie", 20, 30);
    const sulfuras = new Item("Sulfuras", Infinity, 80);
    const backstage = new Item("Backstage passes to a TAFKAL80ETC concert", 9, 10);
    const conjured = new Item("Conjured something", 30, 25);
    const gildedRose = new Shop([knife, fork, agedBrie, sulfuras, backstage, conjured]);

    const backstageQualityBefore = backstage.quality;
    gildedRose.updateQuality();
    const backstageQualityAfter = backstage.quality;
    expect(backstageQualityAfter).toEqual(backstageQualityBefore + 2);
  })

    // Test the "Backstage passes to a TAFKAL80ETC concert" : increasing quality by 3 with a sellIn <= 5
    it("should increase 'Backstage passes to a TAFKAL80ETC concert' quality by 3 with a sellIn <= 5", () => {
      const knife = new Item("knife", 30, 10);
      const fork = new Item("fork", 20, 25);
      const agedBrie = new Item("Aged Brie", 20, 30);
      const sulfuras = new Item("Sulfuras", Infinity, 80);
      const backstage = new Item("Backstage passes to a TAFKAL80ETC concert", 4, 10);
      const conjured = new Item("Conjured something", 30, 25);
      const gildedRose = new Shop([knife, fork, agedBrie, sulfuras, backstage, conjured]);
  
      const backstageQualityBefore = backstage.quality;
      gildedRose.updateQuality();
      const backstageQualityAfter = backstage.quality;
      expect(backstageQualityAfter).toEqual(backstageQualityBefore + 3);
    })

    // Test the "Backstage passes to a TAFKAL80ETC concert" : quality set to 0 with a sellIn = 0
    it("should increase 'Backstage passes to a TAFKAL80ETC concert' quality by 3 with a sellIn <= 5", () => {
      const knife = new Item("knife", 30, 10);
      const fork = new Item("fork", 20, 25);
      const agedBrie = new Item("Aged Brie", 20, 30);
      const sulfuras = new Item("Sulfuras", Infinity, 80);
      const backstage = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10);
      const conjured = new Item("Conjured something", 30, 25);
      const gildedRose = new Shop([knife, fork, agedBrie, sulfuras, backstage, conjured]);
  
      // const backstageQualityBefore = backstage.quality;
      gildedRose.updateQuality();
      const backstageQualityAfter = backstage.quality;
      expect(backstageQualityAfter).toEqual(0);
    })

    // Test the "Conjured something" : decreasing quality by 2 with a sellIn >= 0
    it("should increase 'Conjured something' decrease by 2 with a sellIn >= 0", () => {
      const knife = new Item("knife", 30, 10);
      const fork = new Item("fork", 20, 25);
      const agedBrie = new Item("Aged Brie", 20, 30);
      const sulfuras = new Item("Sulfuras", Infinity, 80);
      const backstage = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10);
      const conjured = new Item("Conjured something", 30, 25);
      const gildedRose = new Shop([knife, fork, agedBrie, sulfuras, backstage, conjured]);

      const conjuredQualityBefore = conjured.quality;
      gildedRose.updateQuality();
      const conjuredQualityAfter = conjured.quality;
      expect(conjuredQualityAfter).toEqual(conjuredQualityBefore - 2);
    })


    ///////////////////////////////////////////////////
    /////////// TEST WITH A sellIn NEGATIVE ///////////
    ///////////////////////////////////////////////////

    // Test the "normal items" : decreasing the quality by 2 with a sellIn < 0
    it("should decrease knife quality by 2 (sellIn is < 0)", () => {
      const knife = new Item("knife", -1, 10);
      const fork = new Item("fork", 20, 25);
      const agedBrie = new Item("Aged Brie", 20, 30);
      const sulfuras = new Item("Sulfuras", Infinity, 80);
      const backstage = new Item("Backstage passes to a TAFKAL80ETC concert", 30, 10);
      const conjured = new Item("Conjured something", 30, 25);
      const gildedRose = new Shop([knife, fork, agedBrie, sulfuras, backstage, conjured]);

      const knifeQualityBefore = knife.quality;
      gildedRose.updateQuality();
      const knifeQualityAfter = knife.quality;
      expect(knifeQualityAfter).toEqual(knifeQualityBefore - 2);
      expect(10).toEqual(10);
    })

    // Test the "Conjured something" : decreasing quality by 4 with a sellIn < 0
    it("should increase 'Conjured something' decrease by 4 with a sellIn < 0", () => {
      const knife = new Item("knife", 30, 10);
      const fork = new Item("fork", 20, 25);
      const agedBrie = new Item("Aged Brie", 20, 30);
      const sulfuras = new Item("Sulfuras", Infinity, 80);
      const backstage = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10);
      const conjured = new Item("Conjured something", -1, 25);
      const gildedRose = new Shop([knife, fork, agedBrie, sulfuras, backstage, conjured]);

      const conjuredQualityBefore = conjured.quality;
      gildedRose.updateQuality();
      const conjuredQualityAfter = conjured.quality;
      expect(conjuredQualityAfter).toEqual(conjuredQualityBefore - 4);
    })


    ///////////////////////////////////////////////////
    ////////   TEST QUALITY LIMITS (0 / 50)    ////////
    ///////////////////////////////////////////////////

    // Test that any item quality should be included between 0 and 50 after a large amount of updates, 100 for our exemple
    it("should stop items qualitu at 0 or 50 after 100 updates", () => {
      const knife = new Item("knife", 30, 10);
      const fork = new Item("fork", 20, 25);
      const agedBrie = new Item("Aged Brie", 20, 30);
      const sulfuras = new Item("Sulfuras", Infinity, 80);
      const backstage = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10);
      const conjured = new Item("Conjured something", -1, 25);
      const gildedRose = new Shop([knife, fork, agedBrie, sulfuras, backstage, conjured]);

      for(let i = 0 ; i < 100 ; i++){
        gildedRose.updateQuality();
      }

      expect(knife.quality).toEqual(0);
      expect(fork.quality).toEqual(0);
      expect(agedBrie.quality).toEqual(50);
      expect(sulfuras.quality).toEqual(80); // Sulfuras is an exception as its quality never changes.
      expect(backstage.quality).toEqual(0);
      expect(conjured.quality).toEqual(0);
    })
});
