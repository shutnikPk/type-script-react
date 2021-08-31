import React, { useState, FC } from "react";
import { useRef } from "react";

export interface EventsExampleProps {}

const EventsExample: FC<EventsExampleProps> = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("dragin");
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  return (
    <div>
      <input
        value={value}
        onChange={changeHandler}
        type="text"
        placeholder="управляемый"
      />
      <input ref={inputRef} type="text" placeholder="неуправляемый" />
      <button onClick={clickHandler}>Button</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 150, margin: 5, background: "gray" }}
      ></div>
      <div
        onDragOver={dragWithPreventHandler}
        onDragLeave={leaveHandler}
        onDrop={dropHandler}
        style={{
          width: 200,
          height: 150,
          margin: 5,
          background: isDrag ? "gray" : "red",
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
