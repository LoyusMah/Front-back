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
