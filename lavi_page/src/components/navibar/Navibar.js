import { Flex, Box, Divider } from "@chakra-ui/react";

export function Navibar() {
  return (
    <Flex bg="blue.500" justify="center" py="2">
      <Box as="a" href="#" px="4" color="white" fontWeight="bold" textDecor="none">
        People
      </Box>
      <Divider orientation="vertical" borderColor="white" mx="2" h="20px" />
      <Box as="a" href="#" px="4" color="white" fontWeight="bold" textDecor="none">
        Resources
      </Box>
      <Divider orientation="vertical" borderColor="white" mx="2" h="20px" />
      <Box as="a" href="#" px="4" color="white" fontWeight="bold" textDecor="none">
        Researches
      </Box>
      <Divider orientation="vertical" borderColor="white" mx="2" h="20px" />
      <Box as="a" href="#" px="4" color="white" fontWeight="bold" textDecor="none">
        Publications
      </Box>
      <Divider orientation="vertical" borderColor="white" mx="2" h="20px" />
      <Box as="a" href="#" px="4" color="white" fontWeight="bold" textDecor="none">
        Events
      </Box>
    </Flex>
  );
}
