const router = require("express").Router();
const {
  models: { Product },
} = require("../db/index");

router.get("/:productId", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

module.exports = router;