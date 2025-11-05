import { useEffect } from "react"
import axios from "axios";
import type { ReqResUserList } from "../interfaces/reqres.response";

 const loadUsers = async() => {
  try {
    const {data} = await axios.get<ReqResUserList>("https://reqres.in/api/users?page=2", {
        headers: { "x-api-key": "reqres-free-v1" }
      })
      return data.data;
    console.log(data.data[0]);
  } catch (error) {
    console.log(error);
    return [];
  }
    
      
      // useEffect(()=> {
//   fetch("https://reqres.in/api/users?page=2", {
//     headers: { "x-api-key": "reqres-free-v1" }
//   })
//   .then((res) => res.json())
//   .then((resp) => console.log(resp.total));
// })
};


export const UsersPage = () => {

 useEffect(()=>{
  loadUsers().then( users => console.log(users))
 })



  return (
    <>
    <h3>Usuarios:</h3>
    <table>
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>avatar</td>
          <td>nonbre</td>
          <td>email</td>
        </tr>
      </tbody>

    </table>
    </>
  )
}
