const router = require("express").Router();

const {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
} = require("./accounts-model");

const {
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId,
} = require("./accounts-middleware");

router.get("/", (req, res, next) => {
  // DO YOUR MAGIC
  getAll().then((accounts) => {
    res.json(accounts);
  });
});

router.get("/:id", checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  getById(req.params.id).then(([account]) =>
    res.json({ name: account.name, budget: account.budget })
  );
});

router.post(
  "/",
  checkAccountPayload,
  checkAccountNameUnique,
  (req, res, next) => {
    // DO YOUR MAGIC
    create(req.body).then(([account]) => res.status(201).json(account));
  }
);

router.put(
  "/:id",
  checkAccountId,
  checkAccountPayload,
  checkAccountNameUnique,
  (req, res, next) => {
    // DO YOUR MAGIC
    updateById(req.params.id, req.body).then(([account]) => res.json(account));
  }
);

router.delete("/:id", checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  deleteById(req.params.id).then((account) => res.json(account));
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  // DO YOUR MAGIC
});

module.exports = router;
