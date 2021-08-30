import axios from 'axios';
import React,{useState, useEffect} from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUsers } from './types/types';

function App() {

  const [users,setUsers] = useState<IUsers[]>([])

  useEffect(()=>{
    fetchUsers()
  },[])

  async function fetchUsers (){
    try{
      const response = await axios.get<IUsers[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    }catch (e){
      alert(e)
    }
  }

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
