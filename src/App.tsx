import axios from "axios";
import React, { useState, useEffect } from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser, IToDo } from "./types/types";
import List from "./components/List";
import UserItem from "./components/UserItem";
import ToDoItem from "./components/ToDoItem";
import EventsExample from "./components/EventsExample";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  const [toDos, setToDos] = useState<IToDo[]>([]);

  useEffect(() => {
    // fetchUsers()
    fetchToDos();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/todos?_ilmit=10"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  async function fetchToDos() {
    try {
      const response = await axios.get<IToDo[]>(
        "https://jsonplaceholder.typicode.com/todos?_ilmit=10"
      );
      setToDos(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      {/* <List items={users} renderItem={(user:IUser)=><UserItem user={user} key={user.id} />}/> */}
      {/* <List items={toDos} renderItem={(toDo:IToDo)=><ToDoItem toDo={toDo} key={toDo.id} />}/> */}
      <EventsExample />
    </div>
  );
}

export default App;
