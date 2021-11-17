import { Box } from "@welcome-ui/box";
import { Loader as WuiLoader } from "@welcome-ui/loader";

const Loader = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      m="xl"
      h={150}
    >
      <WuiLoader color="primary.500" size={32} />
    </Box>
  );
};

export default Loader;
