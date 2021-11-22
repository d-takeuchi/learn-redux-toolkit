import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncGet, selectUsers } from "./fetchSlice";

const Fetch = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncGet());
  }, [dispatch]);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.email}</div>
      ))}
    </div>
  );
};

export default Fetch;
