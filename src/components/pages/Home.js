import  React, {useState , useEffect}  from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
loadUsers();
 },[]);

 const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    console.log()
    setUser(result.data);
 };

 const deleteUser = async id => {
 await axios.delete(`http://localhost:3003/users/${id}`);
loadUsers();

 }
    return (
        <div className="container">
<div className="py-4">
<h1>Home Page</h1>
<table class="table border shadow ">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {users?.reverse().map((users, index) => (
<tr>
    <th scope="row">{index + 1}</th>
    <td>{users.name}</td>
    <td>{users.username}</td>
    <td>{users.email}</td>
    <td>
        <Link className="btn btn-primary mr-2" to={`/user/${users.id}`} style={{marginRight:'10px'}}>View</Link>
        <Link className="btn btn-outline-primary mr-2"style={{marginRight:'10px'}} to={`user/edit/${users.id}`}>Edit</Link>
        <Link className="btn btn-danger" onClick={() => deleteUser(users.id)}>Delete</Link>
        
    </td>
</tr>
    )

    )

    }

  </tbody>
</table>
</div>

        </div>
    );
};
export default Home;