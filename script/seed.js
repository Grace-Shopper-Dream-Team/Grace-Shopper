"use strict";

const { TokenExpiredError } = require("jsonwebtoken");
const {
  db,
  models: { User, Product },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({ username: "cody", password: "123" }),
    User.create({ username: "murphy", password: "123" }),
  ]);

  // Creating Products
  const products = await Promise.all([
    Product.create({
      name: "Aloe Vera",
      imageUrl:
        "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_488/at%2Farchive%2F8a1ff3f2d8ccbee3918ad01b75417e5b59f19686",
      price: 12.99,
      desc: `Having an aloe vera plant around (and using it, should the need arise), can make even the most modern and high-tech of us feel like herbalist apothecaries. Snipping off a piece of an aloe vera’s leaf and applying the clear, cool gel on burns, cuts, rashes, and sunburns offers instant relief and can speed the healing process. Here's how to care for an aloe vera of your own.`,
    }),
    Product.create({
      name: "Croton",
      imageUrl:
        "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/at%2Farchive%2F25614fda9b9b6b3bd941877096b16dd9ce9350ab",
      price: 34.89,
      desc: `People love the dramatic yellow, orange, silver, red, white —or even black — multi-colored leaves of croton plants, but don’t know they can also be quite challenging to grow. When I asked about them at a local plant shop, they said that they don’t even carry them because they tend to drop their leaves during transport, so you may need to hunt around to find them. Once you do, you have to really know what you’re doing to keep this diva of a plant happy. But, if you think you’re up to the challenge, here’s a croton cheatsheet.`,
    }),
    Product.create({
      name: "Ficus",
      imageUrl:
        "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_1095/at%2Fhouse%20tours%2Farchive%2FSean%2Fbbb7d7dfb0d64427e59ff6aa1e7cb9c0cc10b206",
      price: 258.78,
      desc: `Ficus plants have been making dramatic statements in homes for decades. These are the same plants that we saw in our grandparents’ homes; but, with the resurgence of large, dramatic plants in the design world, it’s not surprising that everyone and their cousin now has—or desperately wants—some kind of ficus in their living space. Like some other popular trendy plants, there’s often more than meets the eye. To be honest, a ficus can be a total beast to care for. Here’s what you need to know.`,
    }),
    Product.create({
      name: "Jade",
      imageUrl:
        "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/stock%2Fshutterstock_773040514",
      price: 23.45,
      desc: `We mean well, of course. We forgetful water-ers bring home a new plant and have every intention of finding the perfect watering schedule for it and nurturing it along to booming growth and good health. And then reality sets in and before you know it, it’s sagging in the corner, prompting us to realize that it might be a few days (or weeks!) overdue for a long, cool drink. Sound familiar? If so,we have the perfect new plant for you…`,
    }),
    Product.create({
      name: "Lavender",
      imageUrl:
        "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_488/at%2Fart%2Fphoto%2F2019-05%2Fgrowing-lavender-indoors%2Flead",
      price: 23.87,
      desc: `Looking for a houseplant that will give back? Why not try lavender (Lavandula angustifolia)? Lavender calms you when you’re stressed and provides a stellar flavor profile in desserts and cocktails. What do you have to lose?`,
    }),
    Product.create({
      name: "Lemon Button Fern",
      imageUrl:
        "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_974/stock%2Fshutterstock_1130282816",
      price: 15.98,
      desc: `Many people find that they can’t keep ferns alive, and there are many many fern varieties out there. If you haven’t been able to keep a fern alive in your home but haven’t tried a lemon button fern yet, this plant is for you. The lemon button fern (Nephrolepis cordifolia “Duffii”) is a beautiful plant, suited for both a novice and a professional collector.`,
    }),
    Product.create({
      name: "Lemon Tree",
      imageUrl:
        "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/stock%2FGettyImages-1205903300",
      price: 101.99,
      desc: `Walk into a botanical conservatory at any time of year and you’re going to stumble upon a plethora of citrus trees ready to bear fruit for the masses. Even more specifically, you’re going to see a lot of lemon trees. It’s possible that you’ve just noticed the beauty of a potted Meyer Lemon tree, but keeping citrus trees indoors is far from a new fad. For hundreds of years, lemon trees have been making waves in gardens and homes across the world. Their fragrant blooms and delicious fruits keep them in high demand, whether you have a chateau in the French countryside or a studio apartment in Brooklyn. `,
    }),
    Product.create({
      name: "Money Tree",
      imageUrl:
        "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_486/project%20prism%2Fcolor%20search%20archive%2F95356a0830788aa37fa166d9d8818fbada3ebb89",
      price: 65.77,
      desc: `If you’ve ever noticed a little potted tree with an unusual braided trunk (that’s one on the far left in the photo above), you’ve encountered a money tree. The trunk braid and leaves have symbolism for many people who believe that they bring good luck and financial success.`,
    }),
    Product.create({
      name: "Rubber Plant",
      imageUrl:
        "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/project%20prism%2Fcolor%20search%20archive%2F89f5a8844ff040228052e92b31ca867051e36b01",
      price: 88.99,
      desc: `In recent years, the ubiquitous fiddle leaf fig has dominated all other entrants in the competition for most popular in-house tree-like plants. But we think it’s time to give this understated but stately tree — with its large, deep green leaves — a second look and another chance. Here’s how to maintain a rubber plant as a striking part of your home decor for years to come.`,
    }),
    Product.create({
      name: "String of Pears",
      imageUrl:
        "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/project%20prism%2Fcolor%20search%20archive%2F5e06e150da339f84d1b4b795655e524f485c7679",
      price: 22.56,
      desc: `Not to throw shade at other succulents, but the string of pearls (Senecio rowleyanus) succulent is a show-stopper. With its overflowing vines and bubbly pearl-like leaves, it’s an eye catcher that looks beautiful trailing across a desk or bookshelf or even hanging in a sunny window, where the vines can trail down for interest. Although these plants look delicate, they’re part of the succulent family—a generally easy-to-care-for group of plants. This one in particular is a sure winner for a special space by your window. Read on for tips for growing and caring for this special plant.`,
    }),
  ]);

  // USER PRODUCTS (PRODUCTS PURCHASED & PRODUCTS IN CART ORGANIZED BY USER)
  const userProducts = await Promise.all([
    userProducts.create({
      productId: 5,
      orderId: 1,
      price: 12.99,
      qty: 1,
    }),
    userProducts.create({
      productId: 2,
      orderId: 2,
      price: 34.89,
      qty: 2,
    }),
    userProducts.create({
      productId: 6,
      orderId: 3,
      price: 15.98,
      qty: 8,
    }),
    userProducts.create({
      productId: 3,
      orderId: 4,
      price: 258.78,
      qty: 3,
    }),
    userProducts.create({
      productId: 9,
      orderId: 5,
      price: 88.99,
      qty: 1,
    }),
    userProducts.create({
      productId: 10,
      orderId: 6,
      price: 22.56,
      qty: 5,
    }),
  ]);

  // ALL ORDERS
  //~~~~> NADIA: Insert user email/shipping addresses when they have been created
  const order = await Promise.all([
    order.create({
      email,
      shippingAddress,
      status: "In Cart",
      orderDate: "11/3/22",
    }),
    order.create({
      email,
      shippingAddress,
      status: "In Cart",
      orderDate: "11/3/22",
    }),
    order.create({
      email,
      shippingAddress,
      status: "In Cart",
      orderDate: "11/2/22",
    }),
    order.create({
      email,
      shippingAddress,
      status: "In Cart",
      orderDate: "11/2/22",
    }),
    order.create({
      email,
      shippingAddress,
      status: "In Cart",
      orderDate: "11/2/22",
    }),
    order.create({
      email,
      shippingAddress,
      status: "In Cart",
      orderDate: "11/1/22",
    }),
    order.create({
      email,
      shippingAddress,
      status: "Purchased",
      orderDate: "10/31/22",
    }),
    order.create({
      email,
      shippingAddress,
      status: "Purchased",
      orderDate: "10/31/22",
    }),
    order.create({
      email,
      shippingAddress,
      status: "Purchased",
      orderDate: "10/31/22",
    }),
    order.create({
      email,
      shippingAddress,
      status: "Purchased",
      orderDate: "10/28/22",
    }),
    order.create({
      email,
      shippingAddress,
      status: "In Cart",
      orderDate: "10/27/22",
    }),
    order.create({
      email,
      shippingAddress,
      status: "In Cart",
      orderDate: "10/27/22",
    }),
    order.create({
      email,
      shippingAddress,
      status: "In Cart",
      orderDate: "10/27/22",
    }),
    order.create({
      email,
      shippingAddress,
      status: "In Cart",
      orderDate: "10/26/22",
    }),
    order.create({
      email,
      shippingAddress,
      status: "In Cart",
      orderDate: "10/25/22",
    }),
    order.create({
      email,
      shippingAddress,
      status: "In Cart",
      orderDate: "10/25/22",
    }),
    order.create({
      email,
      shippingAddress,
      status: "Purchased",
      orderDate: "10/25/22",
    }),
    order.create({
      email,
      shippingAddress,
      status: "Purchased",
      orderDate: "10/25/22",
    }),
    order.create({
      email,
      shippingAddress,
      status: "Purchased",
      orderDate: "10/13/22",
    }),
    order.create({
      email,
      shippingAddress,
      status: "Purchased",
      orderDate: "10/1/22",
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${products.length} users`);
  console.log(`seeded successfully`);

  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
    products: {
      aloe: products[0], //1
      croton: products[1], //2
      ficus: products[2], //3
      jade: products[3], //4
      lavender: products[4], //5
      lemonButtonFern: products[5], //6
      lemonTree: products[6], //7
      moneyTree: products[7], //8
      rubberPlant: products[8], //9
      stringOfPearls: products[9], //10
    },
    userProducts: {
      Ulavender: userProducts[0],
      Ucroton: userProducts[1],
      UlemonButtonFern: userProducts[2],
      Uficus: userProducts[3],
      UrubberPlant: userProducts[4],
      UstringOfPearls: userProducts[5],
    },
    order: {
      AOcody: order[0],
      AOmurphy: order[1],
      //~~~~> NADIA: Insert names of the rest of users when other names have been created.
      AOmurphy: order[2],
      AOmurphy: order[3],
      AOmurphy: order[4],
      AOmurphy: order[5],
      AOmurphy: order[6],
      AOmurphy: order[7],
      AOmurphy: order[8],
      AOmurphy: order[9],
      AOmurphy: order[10],
      AOmurphy: order[11],
      AOmurphy: order[12],
      AOmurphy: order[13],
      AOmurphy: order[14],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
