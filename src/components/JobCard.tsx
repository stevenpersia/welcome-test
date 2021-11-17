import { useState } from "react";
import { Badge } from "@welcome-ui/badge";
import { Box } from "@welcome-ui/box";
import { OfferStatusIcon, LocationIcon, OfficeIcon } from "@welcome-ui/icons";
import { Stack } from "@welcome-ui/stack";
import { Text } from "@welcome-ui/text";

import { useApp } from "../store";
import { IJobCardProps } from "../utils/interfaces";
import isNewerThanSevenDays from "../utils/isNewerThanSevenDays";

const JobCard = ({ cookie, data, name, updateCookie }: IJobCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { dispatch } = useApp();
  const isNew = isNewerThanSevenDays(data.published_at);
  const hasAlreadySeen = cookie.find((el) => el === data.id.toString());

  const onOpenJob = async () => {
    await dispatch({ type: "SELECT_JOB", payload: data });
    dispatch({ type: "TOGGLE_MODAL", payload: true });
    updateCookie(data.id);
  };

  return (
    <Box
      backgroundColor="light.900"
      cursor="pointer"
      display="flex"
      my="xl"
      position="relative"
      onClick={onOpenJob}
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
        <Text color="light.900" variant="h3">
          {isHovered ? "SEE MORE" : name}
        </Text>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        padding="xl"
      >
        {hasAlreadySeen && (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={4}
          >
            <Text color="dark.100" my="0" variant="body3">
              Already seen
            </Text>
          </Box>
        )}

        {isNew && (
          <Badge position="absolute" right={8} top={8} variant="primary">
            New
          </Badge>
        )}

        <Text color="dark.700" lines={1} mb={8} mt={0} variant="h4">
          {data.name}
        </Text>

        <Stack direction="row" spacing="xl">
          <Box display="flex" alignItems="center">
            <OfferStatusIcon color="primary.500" title="Type" />
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

          <Box display="flex" alignItems="center">
            <OfficeIcon color="primary.500" title="Location" />
            <Text color="dark.200" my={0} variant="body3">
              {data.department.name}
            </Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default JobCard;
