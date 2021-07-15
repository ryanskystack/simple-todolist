import React, { useState } from "react";

export default function TodoList() {
  const [totalNum, setTotalNum] = useState(0);
  const [remainingNum, setRemainingNum] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [toDoLists, setTodolists] = useState([]);

  var textInput = React.createRef();

  const onClickHandler = (e) => {
    let userInput = textInput.current.value;
    console.log("Input: ", userInput);
    if (userInput !== "") {
      console.log("toDoLists prev: ", toDoLists);
      console.log("totalNum prev: ", totalNum);
      setTodolists((todolists) =>
        todolists.concat({ title: userInput, done: false })
      );
      console.log("toDoLists new: ", toDoLists);
      setTotalNum(totalNum + 1);
      setRemainingNum(totalNum + 1);
      console.log("totalNum new:", totalNum);
      setUserInput("");
    }
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleToggle = (e) => {
    const newTodolists = [...toDoLists];
    if (!toDoLists[e.currentTarget.dataset.id].done) {
      toDoLists[e.currentTarget.dataset.id].done = true;
    } else {
      toDoLists[e.currentTarget.dataset.id].done = false;
    }
    console.log("newTodolists: ", newTodolists);
    setTodolists(newTodolists);
    var doneNum = 0;
    for (let index = 0; index < newTodolists.length; index++) {
      const element = newTodolists[index];
      if (element.done) {
        doneNum += 1;
      }
    }
    setRemainingNum(totalNum - doneNum);
  };

  return (
    <>
      <div>
        <div>
          <div>
            <input
              type="text"
              ref={textInput}
              value={userInput}
              onChange={handleUserInput}
            />
            <button onClick={onClickHandler}>Add</button>
          </div>
          <div>
            <header>
              {remainingNum} remaining out of {totalNum} tasks
            </header>
          </div>
          <div>
            <ul>
              {toDoLists.map((item, index) => (
                <li
                  key={index}
                  data-id={index}
                  onClick={handleToggle}
                  className={item.done ? "is-done " : ""}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <style>{`
                      .is-done {
                          text-decoration: line-through;
                      }
                  `}</style>
      </div>
    </>
  );
}
