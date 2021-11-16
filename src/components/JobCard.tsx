import { Badge } from "@welcome-ui/badge";
import { Box } from "@welcome-ui/box";
import { CompassIcon, LocationIcon } from "@welcome-ui/icons";
import { Stack } from "@welcome-ui/stack";
import { Text } from "@welcome-ui/text";

import { IJob } from "../utils/interfaces";

const JobCard = ({ data, name }: { data: IJob; name: string }) => (
  <Box
    backgroundColor="light.900"
    display="flex"
    margin="xl"
    position="relative"
  >
    <Box
      backgroundColor="primary.500"
      display="flex"
      alignItems="center"
      padding="xl"
    >
      <Text variant="h3" color="light.900">
        {name}
      </Text>
    </Box>

    <Box padding="xl">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Text my="0" variant="body3" color="dark.100">
          Déjà vu
        </Text>
      </Box>

      <Badge position="absolute" right={16} top={16} variant="primary">
        New
      </Badge>

      <Text variant="h4" mb={8} mt={4} lines={1}>
        {data.name}
      </Text>

      <Stack direction="row" spacing="xl">
        <Box display="flex" alignItems="center">
          <CompassIcon color="primary.500" title="Type" />
          <Text color="dark.200" my={0} variant="body3">
            {data.contract_type.en}
          </Text>
        </Box>

        <Box display="flex" alignItems="center">
          <LocationIcon color="primary.500" title="Location" />
          <Text color="dark.200" my={0} variant="body3">
            {data.office.name}
          </Text>
        </Box>
      </Stack>
    </Box>
  </Box>
);

export default JobCard;
