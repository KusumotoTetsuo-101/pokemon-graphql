import React, { useState } from "react";
import { FormControl, Input, Flex, Button, Box } from "@chakra-ui/react";

type Props = {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm: React.FC<Props> = ({ setInputValue }) => {
  const [localInput, setLocalInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalInput(e.target.value);
  };

  const handleButtonClick = () => {
    setInputValue(localInput);
  };

  return (
    <Box maxWidth={"3xl"} mx={"auto"} my={10}>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormControl>
          <Flex>
            <Input
              placeholder="Enter your Pokemon name in English"
              value={localInput}
              onChange={handleInputChange}
            />
            <Button onClick={handleButtonClick}>Search</Button>
          </Flex>
        </FormControl>
      </form>
    </Box>
  );
};

export default SearchForm;
