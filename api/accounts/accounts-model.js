const db = require("../../data/db-config");

const getAll = () => {
  // DO YOUR MAGIC
  return db("accounts");
};

const getById = (id) => {
  // DO YOUR MAGIC
  return db("accounts").where("id", id);
};

const create = async (account) => {
  // DO YOUR MAGIC
  const result = await db("accounts").insert(account);
  return getById(result);
};

const updateById = async (id, account) => {
  // DO YOUR MAGIC
  await db("accounts").where("id", id).update(account);
  return getById(id);
};

const deleteById = async (id) => {
  // DO YOUR MAGIC
  const account = await getById(id);
  await db("accounts").where("id", id).delete();
  return account;
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
