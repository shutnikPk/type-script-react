import  React,{FC} from 'react';
import {IToDo} from '../types/types';

export interface ToDoItemProps {
    toDo:IToDo
}
 
const ToDoItem: FC<ToDoItemProps> = ({toDo}) => {
    return ( 
        <div>
          {toDo.id} {toDo.title} <input type="checkbox" checked={toDo.completed}></input>
        </div>
     );
}
 
export default ToDoItem;