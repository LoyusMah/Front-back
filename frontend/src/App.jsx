import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Table } from "./components/Table";
import { Title } from "./components/Title";
import { getAllTasks, updateTask } from "./utils/axiosHelper";

function App() {
  const [entryList, setEntryList] = useState([]);

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const switchTask = async (_id, type) => {
    const { status } = await updateTask({ _id, type });
    status === "success" && fetchAllTasks();
  };

  const fetchAllTasks = async () => {
    const { status, tasks } = await getAllTasks();
    status === "success" && setEntryList(tasks);
  };

  const total = entryList.reduce((acc, item) => {
    return acc + item.hr;
  }, 0);
  console.log(entryList);
  return (
    <div className="wrapper">
      <div className="container">
        <Title />

        <Form fetchAllTasks={fetchAllTasks} ttlHr={total} />

        <Table
          entryList={entryList}
          switchTask={switchTask}
          fetchAllTasks={fetchAllTasks}
        />

        {/* <!-- toat time allocated --> */}
        <div className="alert alert-info">
          Total hrs per week allocated = <span id="totalHr">{total}</span>hr
        </div>
      </div>
    </div>
  );
}

export default App;
