const express = require("express");
const {
  getAll,
  postTodo,
  getById,
  deleteById,
  updateById,
} = require("../controllers/todoController");
const router = express.Router();

router.route("/").get(getAll).post(postTodo);
router.route("/:id").get(getById).delete(deleteById).put(updateById);

module.exports = router;
