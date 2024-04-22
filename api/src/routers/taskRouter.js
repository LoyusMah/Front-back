import express from "express";
import { idGenerator } from "../utils.js";
import {
  delteTask,
  getTasks,
  insertTask,
  updateTask,
} from "../models/task/TaskModel.js";
const router = express.Router();

let fakeDb = [];

//controllers

//get data
router.get("/", async (req, res) => {
  //db query to get the data
  const tasks = await getTasks();
  console.log(tasks);
  res.json({
    message: "Here are the tasks",
    tasks,
  });
});

//Post data
router.post("/", async (req, res) => {
  try {
    const result = await insertTask(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "New task has been added",
        })
      : res.json({
          status: "error",
          message: "Failed to add new data",
        });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
  // const id = idGenerator()
  // fakeDb.push({ ...req.body, id });
});

//update task
router.patch("/", async (req, res) => {
  try {
    const result = await updateTask(req.body);

    console.log(result);

    result?._id
      ? res.json({
          messaeg: "Your task has been updated",
        })
      : res.json({
          messaeg: "No change made in the db, may be invalid data request",
        });
  } catch (error) {
    // console.log(error);
    res.status(500).json({
      message: "something went wrong, try again later.",
    });
  }
});
//delete task
router.delete("/:_id?", async (req, res) => {
  try {
    const { _id } = req.body;

    console.log(req.params);

    const result = await delteTask(_id);

    result?._id
      ? res.json({
          messaeg: "Your task has been Deleted",
        })
      : res.json({
          messaeg: "Unable to delete, try again later",
        });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong, try again later.",
    });
  }
});

export default router;
