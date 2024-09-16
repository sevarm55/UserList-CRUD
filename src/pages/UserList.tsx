import { useEffect, useState } from "react";

import { deleteUser, getUsers } from "../lib/api";
import { IUsers } from "../lib/types";
import { UserItem } from "../components/UserItem";

export const UserList = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res);
    });
  }, []);

  const handleDelete = (id: string) => {
    deleteUser(id)
    .then(res => {
      setUsers(users.filter((user) => user.id !== res.id));
    });
  };

  return (
    <div className="userList">
        <h1 style={{color:"red"}}>Users</h1>
      {users.map((user, index) => (
        <UserItem
          key={user.id}
          user={user}
          index={index}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};
