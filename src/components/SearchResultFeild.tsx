import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { Query } from "../@types/types";
import { searchPokemon } from "../graphql/queries";

type Props = {
  inputValue: string;
};

export const SearchResultField = ({ inputValue }: Props) => {
  const { loading, error, data } = useQuery<Query>(searchPokemon, {
    variables: { name: inputValue },
  });

  if (loading)
    return (
      <Box maxWidth={"3xl"} mx={"auto"}>
        Loading...
      </Box>
    );
  if (error)
    return (
      <Box maxWidth={"3xl"} mx={"auto"}>
        `Error! ${error.message}`
      </Box>
    );

  return (
    <Box maxWidth={"3xl"} mx={"auto"} my={10}>
      <div>No: {data?.pokemon?.number}</div>
      <div>Name: {data?.pokemon?.name}</div>
      {data?.pokemon?.image ? (
        <Image
          src={data?.pokemon?.image}
          alt={data?.pokemon?.name ?? ""}
          width="500"
          height="500"
        />
      ) : (
        <div>no image.</div>
      )}
    </Box>
  );
};
