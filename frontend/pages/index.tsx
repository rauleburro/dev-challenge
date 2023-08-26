import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";

const GET_USERS = gql`
  query Users {
    users {
      id
      name
      email
    }
  }`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_USERS);

  return (
    <div>
      <h1>Users</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data &&
        data.users.map((user: any) => <div key={user.id}>{user.name}</div>)}
    </div>
  );
}
