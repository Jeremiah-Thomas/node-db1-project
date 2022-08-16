const { getAll, getById } = require("../accounts/accounts-model");

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  if (req.body.name == null || req.body.budget == null) {
    res.status(400).json({ message: "name and budget are required" });
  } else if (
    req.body.name.trim().length < 3 ||
    req.body.name.trim().length > 100
  ) {
    res
      .status(400)
      .json({ message: "name of account must be between 3 and 100" });
  } else if (typeof req.body.budget !== "number") {
    res.status(400).json({ message: "budget of account must be a number" });
  } else if (req.body.budget < 0 || req.body.budget > 1000000) {
    res
      .status(400)
      .json({ message: "budget of account is too large or too small" });
  } else {
    req.body.name = req.body.name.trim();
    next();
  }
};

exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  const accounts = await getAll();
  const filter = accounts.filter((account) => {
    return account.name === req.body.name;
  });
  if (filter.length > 0) {
    res.status(400).json({ message: "that name is taken" });
  } else {
    next();
  }
};

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  const [account] = await getById(req.params.id);
  if (account == null) {
    res.status(404).json({ message: "account not found" });
  } else {
    next();
  }
};
