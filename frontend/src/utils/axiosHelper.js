import axios from "axios";
const apiEP = " http://localhost:8000/api/v1/tasks";

export const postNewTask = async (taskObj) => {
  try {
    const { data } = await axios.post(apiEP, taskObj);

    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getAllTasks = async () => {
  try {
    const { data } = await axios.get(apiEP);

    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const deleteTasks = async (ids) => {
  try {
    // const { data } = await axios.delete(apiEP + "/" + _id);
    const { data } = await axios.delete(apiEP, { data: ids });

    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const updateTask = async (obj) => {
  try {
    const { data } = await axios.patch(apiEP, obj);

    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};
