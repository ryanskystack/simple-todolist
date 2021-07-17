import React, { useRef, useState } from "react";
import './App.css';

export default function TodoList() {
  const [totalNum, setTotalNum] = useState(0);
  const [remainingNum, setRemainingNum] = useState(0);
  const [itemInput, setItemInput] = useState("");
  const [quantityInput, setQuantityInput] = useState("");
  const [todoLists, setTodolists] = useState([]);

  let inputRefs = useRef([]);

  inputRefs.current = [0, 0].map(
    (ref, index) => inputRefs.current[index] = React.createRef()
  );

  const onClickHandler = (e) => {
    let itemValue = inputRefs.current[0].current.value;
    let quantityValue = parseInt(inputRefs.current[1].current.value.replace(/\D+/g, ''));
    if (itemValue !== "") {
      setTodolists((todoLists) =>
        todoLists.concat({ id: totalNum, title: itemValue, done: false, remove: false, quantity: quantityValue }),
      );
      setTotalNum(totalNum + 1);
      setRemainingNum(totalNum + 1);
      setItemInput("");
      setQuantityInput("");
    }
  };

  const handleItemInput = (e) => {
    setItemInput(e.target.value);
  };

  const handleQuantityInput = (e) => {
    if (!isNaN(e.target.value)) {
      setQuantityInput(`  ×  ${e.target.value}`)
    } else {
      setQuantityInput(e.target.value)
    }
  };

  const handleToggle = (e) => {
    const newTodolists = [...todoLists];
    let index = todoLists.map(x => x.id).indexOf(parseInt(e.currentTarget.dataset.id));
    todoLists[index].remove = true;
    if (!todoLists[index].done) {
      todoLists[index].done = true;
    } else {
      todoLists[index].done = false;
    }
    setTodolists(newTodolists);
    let doneNum = 0;
    for (let index = 0; index < newTodolists.length; index++) {
      const element = newTodolists[index];
      if (element.done) {
        doneNum += 1;
      }
    }
    setRemainingNum(totalNum - doneNum);
  };

  const onClickRemover = (e) => {

    let index = todoLists.map(x => x.id).indexOf(parseInt(e.currentTarget.dataset.id));
    todoLists[index].done = false;
    todoLists.splice(index, 1);
    setTodolists(todoLists);
    let doneNum = 0;
    for (let index = 0; index < todoLists.length; index++) {
      const element = todoLists[index];
      if (element.done) {
        doneNum += 1;
      }
    }
    setRemainingNum(todoLists.length - doneNum);
    setTotalNum(todoLists.length);
  };

  return (
    <div>
      <div className="container">
        <h1>
          Todo List
        </h1>
        <p>
          Get it done today
        </p>
        <p className="summary">
          <b>{remainingNum}</b> remaining out of <b>{totalNum}</b> tasks
        </p>
        <div className="inputContainer">
          <input
            type="text"
            id="itemInput"
            key="a"
            placeholder="Enter Items"
            ref={inputRefs.current[0]}
            value={itemInput}
            onChange={handleItemInput}
          />
          <input
            type="text"
            key="b"
            id="quantityInput"
            placeholder="Quantity"
            ref={inputRefs.current[1]}
            value={quantityInput}
            onChange={handleQuantityInput}
          />
          <button id="enter" onClick={onClickHandler}>
            Add
          </button>
        </div>
        <ul>
          {todoLists.map((item, index) => (
            <div className="list" key={index}>
              <li
                data-id={item.id}
                onClick={handleToggle}
                className={item.done ? "is-done " : ""}
              >
                {item.quantity && !isNaN(item.quantity) ? `${item.title}  ×  ${item.quantity}` : item.title}
              </li>
              {item.done ? <button className="deleteButton" data-id={item.id} onClick={onClickRemover}>Remove</button> : null}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
