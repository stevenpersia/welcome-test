import { Box } from "@welcome-ui/box";
import { Button } from "@welcome-ui/button";
import { Modal as WuiModal } from "@welcome-ui/modal";
import { Text } from "@welcome-ui/text";

import { useApp } from "../store";

const Modal = () => {
  const { dispatch, modal, state } = useApp();
  const job = state.selectedJob;

  const applyWebsite = job?.websites_urls.find(
    (w) => w.website_reference === "wttj_fr"
  );

  const onClose = async () => {
    await dispatch({ type: "SELECT_JOB", payload: undefined });
    dispatch({ type: "TOGGLE_MODAL", payload: false });
  };

  return (
    <WuiModal
      ariaLabel={`job-${job?.id}`}
      closeElement={() => null}
      style={{ height: "100%" }}
      {...modal}
      onClose={onClose}
      visible={state.isModalVisible}
    >
      <WuiModal.Cover h="auto">
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
          <Text color="light.800" my={0} variant="h5">
            {state.name}
          </Text>
          <Text color="light.900" my={8} variant="h3">
            {job?.name}
          </Text>
          <Text color="light.800" my={0} variant="body3">
            {job?.contract_type?.en} - {job?.office?.name}
          </Text>
        </Box>
      </WuiModal.Cover>

      <WuiModal.Content textAlign="justify">
        <Text color="dark.700" mt={0} variant="h4">
          Description
        </Text>
        <Text color="dark.700" my={0} variant="body2">
          <div dangerouslySetInnerHTML={{ __html: job?.description || "" }} />
        </Text>

        <Text color="dark.700" mt={36} variant="h4">
          Profile
        </Text>
        <Text color="dark.700" my={0} variant="body2">
          <div dangerouslySetInnerHTML={{ __html: job?.profile || "" }} />
        </Text>

        <Text color="dark.700" mt={36} variant="h4">
          Recruitment process
        </Text>
        <Text color="dark.700" my={0} variant="body2">
          <div
            dangerouslySetInnerHTML={{ __html: job?.recruitment_process || "" }}
          />
        </Text>
      </WuiModal.Content>

      <WuiModal.Footer>
        <Box w={1} display="flex" justifyContent="space-between">
          <Button onClick={onClose} variant="secondary">
            Close
          </Button>
          <Button onClick={() => window.open(applyWebsite?.url, "_blank")}>
            Apply
          </Button>
        </Box>
      </WuiModal.Footer>
    </WuiModal>
  );
};

export default Modal;
