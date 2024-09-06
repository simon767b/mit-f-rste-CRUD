import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import User from "../components/User";

export default function UpdatePage() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("users"); //get data from local storage
    const usersData = JSON.parse(data) || []; //parse the data from sring to jacascript array
    const user = usersData.find((user) => user.id === id); // find the user with the id from the params
    console.log(user);
    setUser(user); //set the user state with data from local storage
  }, [id]); // <---- "[id]" VERY IMPORTANT!!

  function showDeleteDialog() {
    const shouldDelete = window.confirm(
      `Do you want to delete "${user.name}"?`
    );
    if (shouldDelete) {
      deleteUser();
    }
  }

  async function deleteUser() {
    const data = localStorage.getItem("users"); //get data from local storage
    const userData = JSON.parse(data) || []; //parse the data from string to javascript array
    const updatedUsers = userData.filter((user) => user.id !== id); //filter out the user with the id from
    localStorage.setItem("users", JSON.stringify(updatedUsers)); // save the users state to local storage
    navigate("/"); // navigate to the home page
  }

  function showUpdate() {
    navigate(`/users/${id}/update`);
  }

  return (
    <div id="user-page" className="page">
      <div className="container">
        <h1>{user.name}</h1>
        <User user={user} />
        <div className="btns">
          <button className="btn-cancel" onClick={showDeleteDialog}>
            Delete user
          </button>
          <button onClick={showUpdate}>Update user</button>
        </div>
        {/* Display user details here */}
      </div>
    </div>
  );
}
