import React from "react";

export const Table = ({ entryList, switchTask, handOnDelete }) => {
  console.log(entryList);

  const entries = entryList.filter((item) => item.type === "entry");
  const badList = entryList.filter((item) => item.type === "bad");
  return (
    <div className="row mt-5 pt-2">
      {/* <!-- 1. entry list --> */}
      <div className="col-md">
        <h3 className="text-center">Task Entry List</h3>
        <hr />
        <table className="table table-striped table-hover border opacity">
          <tbody id="entry">
            {entries.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.task}</td>
                <td>{item.hr}hrs</td>
                <td className="text-end">
                  <button
                    onClick={() => handOnDelete(item.id)}
                    className="btn btn-danger btn-sm"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button
                    onClick={() => switchTask(item.id, "bad")}
                    className="btn btn-success btn-sm"
                  >
                    <i className="fa-sharp fa-solid fa-arrow-right-long"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <!-- 2. bad list  --> */}
      <div className="col-md">
        <h3 className="text-center">Bad List</h3>
        <hr />
        <table className="table table-striped table-hover border opacity">
          <tbody id="bad">
            {badList.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.task}</td>
                <td>{item.hr}hrs</td>
                <td className="text-end">
                  <button
                    onClick={() => switchTask(item.id, "entry")}
                    className="btn btn-warning btn-sm"
                  >
                    <i className="fa-sharp fa-solid fa-arrow-left-long"></i>
                  </button>
                  <button
                    onClick={() => handOnDelete(item.id)}
                    className="btn btn-danger btn-sm"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="alert alert-info">
          You could have save ={" "}
          <span id="badHr">
            {badList.reduce((acc, item) => acc + item.hr, 0)}
          </span>
          hr
        </div>
      </div>
    </div>
  );
};
