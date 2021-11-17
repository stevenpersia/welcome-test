import { Box } from "@welcome-ui/box";
import { Emoji } from "@welcome-ui/emoji";
import { NegativeOutlineIcon } from "@welcome-ui/icons";
import { Text } from "@welcome-ui/text";

const NoResult = () => {
  return (
    <Box
      bg="light.900"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
      p="xl"
    >
      <NegativeOutlineIcon size={96} />
      <Text color="dark.700" variant="h3">
        0 jobs for your search, YET !
      </Text>
      <Text color="dark.700" variant="body2">
        Don't give up hope, we're sure a job offer is waiting for you somewhere.{" "}
        <Emoji emoji="heart" height={14} width={14} />
      </Text>
      <Text color="dark.700" m={0} variant="body2">
        For now, try resetting your search.
      </Text>
    </Box>
  );
};

export default NoResult;
