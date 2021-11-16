import { Box } from "@welcome-ui/box";
import { Modal as WuiModal } from "@welcome-ui/modal";
import { Text } from "@welcome-ui/text";

import { useApp } from "../store";

const Modal = ({ data, modal }: any) => {
  const { state } = useApp();

  return (
    <WuiModal ariaLabel={`job-${data?.job?.id}`} {...modal}>
      <WuiModal.Cover h={130}>
        <Box
          backgroundColor="primary.500"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
          padding="xl"
          h="100%"
          w="100%"
        >
          <Text color="light.800" my={0} pb={8} variant="h5">
            {state.name}
          </Text>
          <Text color="light.900" my={0} variant="h3">
            {data?.name}
          </Text>
        </Box>
      </WuiModal.Cover>

      <WuiModal.Content overflowY="scroll">
        <Box>
          <Text color="dark.900" mt={0} variant="h4">
            Description
          </Text>
          <Text color="dark.900" my={0} variant="body2">
            <div dangerouslySetInnerHTML={{ __html: data?.description }} />
          </Text>

          <Text color="dark.900" mt={0} variant="h4">
            Recruitment process
          </Text>
          <Text color="dark.900" my={0} variant="body2">
            <div
              dangerouslySetInnerHTML={{ __html: data?.recruitment_process }}
            />
          </Text>
        </Box>
      </WuiModal.Content>
    </WuiModal>
  );
};

export default Modal;
