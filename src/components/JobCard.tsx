import { useState } from "react";
import { Badge } from "@welcome-ui/badge";
import { Box } from "@welcome-ui/box";
import { CompassIcon, LocationIcon } from "@welcome-ui/icons";
import { Stack } from "@welcome-ui/stack";

import { Text } from "@welcome-ui/text";
import { IJob } from "../utils/interfaces";

const JobCard = ({ data, name }: { data: IJob; name: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      backgroundColor="light.900"
      cursor="pointer"
      display="flex"
      my="xl"
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setTimeout(() => setIsHovered(false), 300)}
    >
      <Box
        backgroundColor={isHovered ? "primary.800" : "primary.500"}
        display="flex"
        alignItems="center"
        textAlign="center"
        padding={isHovered ? "lg" : "xl"}
        h={112}
        w={112}
      >
        <Text variant="h3" color="light.900">
          {isHovered ? "SEE MORE" : name}
        </Text>
      </Box>

      <Box padding="xl">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Text color="dark.100" my="0" variant="body3">
            Already seen
          </Text>
        </Box>

        <Badge position="absolute" right={16} top={16} variant="primary">
          New
        </Badge>

        <Text color="dark.700" lines={1} mb={8} mt={4} variant="h4">
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
};

export default JobCard;
