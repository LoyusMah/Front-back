import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Table } from "./components/Table";
import { Title } from "./components/Title";

const ttHrPerWk = 24 * 7;
function App() {
  const [entryList, setEntryList] = useState([]);

  const addNewTask = (taskObj) => {
    if (ttlHr + taskObj.hr > ttHrPerWk) {
      return alert("sorry Boss not enough hours left to fit this task");
    }
    setEntryList([...entryList, taskObj]);
  };

  const switchTask = (id, type) => {
    const tempArg = entryList.map((item) => {
      if (item.id === id) item.type = type;

      return item;
    });
    setEntryList(tempArg);
  };

  const handOnDelete = (id) => {
    if (window.confirm("Are you sure, you want to delete the item?")) {
      setEntryList(entryList.filter((item) => item.id !== id));
    }
  };
  const ttlHr = entryList.reduce((acc, item) => {
    return acc + item.hr;
  }, 0);

  return (
    <div className="wrapper">
      <div className="container">
        <Title />

        <Form addNewTask={addNewTask} />

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
