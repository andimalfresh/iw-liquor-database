exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("spirits-list")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("spirits-list").insert([
        {
          id: 1,
          spirit: "vodka",
          product: "Handmade Vodka",
          retail: 59.99,
          price: 19.99,
          tag:
            "Clarity and purity is our focus with this crystal clear vodka! We small batch carbon filter our 100% grain based vodka to make it an ultimate mixer and sipper alike."
        },
        {
          id: 2,
          spirit: "gin",
          product: "Alpine Gin",
          retail: 59.99,
          price: 21.33,
          tag:
            "Our gin is the result of redistilling our vodka and running the vapors through a botanical-packed column. Using 51% juniper and 12 other essential botanicals, our gin is soft and citrusy and not the typical pine tree punch in the mouth."
        },
        {
          id: 3,
          spirit: "gin",
          product: "Hibiscus Gin",
          retail: 59.99,
          price: 22.66,
          tag:
            "Re-inventing the classic, boring, clear gin, the hibiscus infused with this gin lends it a vivid red/pink color with tart berry and citrus flavors. Initially met with a lot of skepticism, this spirit quickly endears itself to the drinker after the first sip or two. Due to the color, this spirit makes a brilliantly colorful substitute for normal gin in almost any gin cocktail. For extra fun, try making a gin and tonic upside down (add the gin to the glass last) and watch as it works its way down through the ice."
        },
        {
          id: 4,
          spirit: "gin",
          product: "Purple Daze",
          retail: 59.99,
          price: 22.66,
          tag:
            "Our Purple Daze gin is our Alpine gin infused with violet flowers. After the flowers soak, the gin turns a deep midnight cobalt blue. Makes for a beautiful Gin and Tonic!"
        },
        {
          id: 5,
          spirit: "rum",
          product: "Rocky Mountain Silver Rum",
          retail: 59.99,
          price: 19.99,
          tag:
            "Striving for more of a full flavored Caribbean-style rum, we distill our rum from pure molasses brought in fresh and strait from a plantation in Louisiana. The silver rum is proofed down, bottled and served at 40% alcohol."
        },
        {
          id: 6,
          spirit: "rum",
          product: "Rocky Mountain Gold Rum",
          retail: 59.99,
          price: 23.33,
          tag:
            "The rich, silky flavor of Rocky Mountain Gold Rum will destroy everything you know about rum. Made with a much higher percentage of molasses (proudly mashed, fermented, and distilled in Winter Park, CO) than most rums, a lot of that flavor carries through the still, imbuing our rum with a much bolder, more full-bodied flavor than most. To top it off, it is briefly rested in used barrels to let it mellow and the depth of its flavors truly develop. Who cares if it wasn’t made in the Caribbean, it is still one of the best rums you’ve tasted!"
        },
        {
          id: 7,
          spirit: "whiskey",
          product: "White Whiskey",
          retail: 59.99,
          price: 19.99,
          tag:
            "Our white whiskey is essentially unaged bourbon (never been inside a barrel), pulled off the still and proofed down, bottled and served at 40% alcohol."
        },
        {
          id: 8,
          spirit: "whiskey",
          product: "Woodcutters Whiskey",
          retail: 59.99,
          price: 26.99,
          tag:
            "As a traditional bourbon whiskey, this whiskey is aged in new charred oak barrels for a smooth, full bodied oak experience. However, unlike most bourbons, our signature bourbon whiskey recipe (proudly mashed, fermented, and distilled in Winter Park, CO), is aged with three different types of wood for an incredible complexity and delightful marriage of flavors. Additionally, the fresh grains that we source from a local Colorado farm, gives the spirit an incredibly deep grain flavor that makes this whiskey truly unique."
        },
        {
          id: 9,
          spirit: "whiskey",
          product: "Colorado Single Malt Whiskey",
          retail: 59.99,
          price: 39.33,
          tag:
            "Colorado Single Malt Whiskey is a full-bodied single malt whiskey, with power aromas of caramel and chocolate from several specialty malts that are used in our “quadruple malt” recipe (proudly mashed, fermented, and distilled in Winter Park, CO) and a pleasant vanilla oakiness from the charred oak barrels it is aged in. This is your sitting-by-the-fire, feet-on-the-table sippin’ whiskey."
        },
        {
          id: 10,
          spirit: "whiskey",
          product: "Rye Whiskey",
          retail: 59.99,
          price: 30.66,
          tag:
            " We use 93% rye to produce this aged spirit, with 7% malted barley to help convert all the starches into fermentible sugars."
        },
        {
          id: 11,
          spirit: "vodka",
          product: "Vanilla Vodka",
          retail: 59.99,
          price: 19.99,
          tag: "//Vanilla Vodka Discript Goes in here"
        },
        {
          id: 12,
          spirit: "vodka",
          product: "Lemon Vodka",
          retail: 59.99,
          price: 19.99,
          tag: "//Lemon Vodka Descript goes in here"
        },
        {
          id: 13,
          spirit: "tequila",
          product: "Hand Crafted Tequila",
          retail: 59.99,
          price: 19.99,
          tag: "//Tequila Descript goes in here"
        }
      ]);
    });
};
