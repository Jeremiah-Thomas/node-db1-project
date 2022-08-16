const router = require("express").Router();

const {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
} = require("./accounts-model");

router.get("/", (req, res, next) => {
  // DO YOUR MAGIC
  getAll().then((accounts) => {
    res.json(accounts);
  });
});

router.get("/:id", (req, res, next) => {
  // DO YOUR MAGIC
  getById(req.params.id).then((account) => res.json(account));
});

router.post("/", (req, res, next) => {
  // DO YOUR MAGIC
  create(req.body).then((account) => res.json(account));
});

router.put("/:id", (req, res, next) => {
  // DO YOUR MAGIC
  updateById(req.params.id, req.body).then((account) => res.json(account));
});

router.delete("/:id", (req, res, next) => {
  // DO YOUR MAGIC
  deleteById(req.params.id).then((account) => res.json(account));
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  // DO YOUR MAGIC
});

module.exports = router;
