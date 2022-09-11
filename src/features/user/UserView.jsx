import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice.js";

export const UserView = () => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      {users.loading ? (
        "Loading..."
      ) : users.error ? (
        `Error ${user.error}`
      ) : users.users.length ? (
        <ul>
          {users.users.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
