import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const Friends = () => {
  const [friends, setFriends] = useState([]);

  const getFriends = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <div>
      <h2>My Friends List</h2>
      {friends.map(friend => (
        <div className="friend-card" key={friend.id}>
          <h3>{friend.name}</h3>
          <h4>Age: {friend.age}</h4>
          <h5>Email: {friend.email}</h5>
        </div>
      ))}
    </div>
  );
};
