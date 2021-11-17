import { Box } from "@welcome-ui/box";
import { Button } from "@welcome-ui/button";
import { CrossIcon, SearchIcon } from "@welcome-ui/icons";
import { InputText } from "@welcome-ui/input-text";
import { Select } from "@welcome-ui/select";
import { Text } from "@welcome-ui/text";
import { Tag } from "@welcome-ui/tag";

import useForm from "../hooks/useForm";
import { useApp } from "../store";
import { ISearchFormValues } from "../utils/interfaces";

const initV = { text: "", groupBy: "" };

const SearchBar = () => {
  const { dispatch, state } = useApp();
  const { as, handleReset, handleSubmit } = useForm<ISearchFormValues>(initV);

  const onSubmit = (v: ISearchFormValues) => {
    dispatch({ type: "SEARCH", payload: v });
  };

  const onReset = async () => {
    await dispatch({ type: "SEARCH", payload: { groupBy: "", text: "" } });
    handleReset();
  };

  const renderGroupHeader = ({ label, options }: any) => (
    <Box p="xs">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Text m="0" variant="body3">
          {label}
        </Text>
        <Tag>{options.length}</Tag>
      </Box>
    </Box>
  );

  return (
    <Box mx="xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="grid"
          gap={4}
          style={{ grid: "auto / 1fr 1fr auto auto" }}
        >
          <InputText placeholder="Your dream job?" h={42} {...as("text")} />

          <Select
            h={42}
            options={state.searchGroupByAttributes}
            placeholder="Group By"
            groupsEnabled
            renderGroupHeader={renderGroupHeader}
            {...as("groupBy")}
          />

          <Button h={42} shape="square" type="submit">
            <SearchIcon />
          </Button>
          <Button h={42} shape="square" onClick={onReset} variant="secondary">
            <CrossIcon />
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default SearchBar;
