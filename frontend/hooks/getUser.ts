import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      id
      email
      name
    }
  }
`;

const useGetUser = (userId: number) => {
  return useQuery(GET_USER, {
    variables: { userId },
  });
};

export default useGetUser;