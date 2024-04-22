import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Table } from "./components/Table";
import { Title } from "./components/Title";
import { getAllTasks, deleteTasks, updateTask } from "./utils/axiosHelper";

function App() {
  const [entryList, setEntryList] = useState([]);

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const switchTask = async (_id, type) => {
    const { status } = await updateTask({ _id, type });
    status === "success" && fetchAllTasks();
  };

  const handOnDelete = async (_id) => {
    if (window.confirm("Are you sure, you want to delete the item?")) {
      const { status, message } = await deleteTasks(_id);

      if (status === "success") {
        fetchAllTasks();
        alert(message);
      }
    }
  };

  const fetchAllTasks = async () => {
    const { status, tasks } = await getAllTasks();
    status === "success" && setEntryList(tasks);
  };

  const ttlHr = entryList.reduce((acc, item) => {
    return acc + item.hr;
  }, 0);

  return (
    <div className="wrapper">
      <div className="container">
        <Title />

        <Form fetchAllTasks={fetchAllTasks} ttlHr={ttlHr} />

        <Table
          entryList={entryList}
          switchTask={switchTask}
          handOnDelete={handOnDelete}
        />

        {/* <!-- toat time allocated --> */}
        <div className="alert alert-info">
          Total hrs per week allocated = <span id="totalHr">{ttlHr}</span>hr
        </div>
      </div>
    </div>
  );
}

export default App;
