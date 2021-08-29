import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUsers } from './types/types';

function App() {
const users:IUsers[] = [
  {
    id:1,
    name:'Evgen',
    email:'shutnik-pk@mail.com',
    address:{
      city:"Minsk",
      street:"Rusanova",
      zipcode:'sacd'
    }
  },
  {
    id:2,
    name:'Marina',
    email:'bonBon.com',
    address:{
      city:"Minsk",
      street:"Rusanova",
      zipcode:'sacd'
    }
  }
]
  return (
    <div>
      <Card onClick={(someNumber)=>console.log('click',someNumber)} width="200px" height="200px" variant={CardVariant.primary}>
        <button>HelloWorld</button>
      </Card>
      <UserList users={users}/>
    </div>
  );
}

export default App;
