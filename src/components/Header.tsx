import { Box } from "@welcome-ui/box";
import { Shape } from "@welcome-ui/shape";

import LOGO from "../assets/images/logo.png";

const Header = () => (
  <Box display="flex" alignItems="center" justifyContent="center" mt={32}>
    <Shape bg="primary.500" w={140} h={140} shape="circle">
      <img alt="Logo WTTJ" src={LOGO} style={{ height: "auto", width: 80 }} />
    </Shape>
  </Box>
);

export default Header;
