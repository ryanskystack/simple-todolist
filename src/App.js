import React, { useState } from "react";
import './App.css';

export default function TodoList() {
  const [totalNum, setTotalNum] = useState(0);
  const [remainingNum, setRemainingNum] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [toDoLists, setTodolists] = useState([]);

  var textInput = React.createRef();

  const onClickHandler = (e) => {
    let userInput = textInput.current.value;
    if (userInput !== "") {
      setTodolists((todolists) =>
        todolists.concat({ title: userInput, done: false })
      );
      setTotalNum(totalNum + 1);
      setRemainingNum(totalNum + 1);
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
    <div className="container">
      <div className="list">
        <h1>
          Todo List
        </h1>
        <p>
          Get it done today
        </p>
        <p className="summary">
          <b>{remainingNum}</b> remaining out of <b>{totalNum}</b> tasks
        </p>
        <input
          type="text"
          id="userinput"
          placeholder="enter items"
          ref={textInput}
          value={userInput}
          onChange={handleUserInput}
        />
        <button id="enter" onClick={onClickHandler}>
          Add
        </button>

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
        <style>
          {`   
         .is-done {
             text-decoration: line-through;
         }
       `}
        </style>
      </div>


    </div>
  );
}
