import axios from "axios";
import type { ReqResUserList, User } from "../interfaces";
import { useEffect, useRef, useState } from "react";


const loadUsers = async(page: number = 1): Promise<User[]> => {
  try {
    const {data} = await axios.get<ReqResUserList>("https://reqres.in/api/users", {
        headers: { "x-api-key": "reqres-free-v1" },
        params: {
          page: page
        }
      })
      return data.data;
    console.log(data.data[0]);
  } catch (error) {
    console.log(error);
    return [];
  };
        // useEffect(()=> {
//   fetch("https://reqres.in/api/users?page=2", {
//     headers: { "x-api-key": "reqres-free-v1" }
//   })
//   .then((res) => res.json())
//   .then((resp) => console.log(resp.total));
// })
};

export const useUsers = () => {
  
  
   const [users, setUsers] = useState<User[]>([]);
   const currentPageRef = useRef(1);
   
   
    useEffect(()=>{
     loadUsers(currentPageRef.current)
       .then( users => setUsers(users))
   });
   const nexPage = async() =>{
     currentPageRef.current++;
     const users = await loadUsers(currentPageRef.current);
     if (users.length > 0){
       setUsers (users);
     }else{
       currentPageRef.current--;
     }
   }
   const prevPage = async() =>{
   if (currentPageRef.current < 1) return;
   
     currentPageRef.current--;
     const users = await loadUsers(currentPageRef.current)
     setUsers(users);
   }

   return {
//Properties
users,

//Methods
nexPage, 
prevPage,

   }
}
