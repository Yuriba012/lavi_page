import { Flex, VStack, Box, Text, Link, Icon } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <Flex
      align="center"
      justify="center"
      bg="gray.800"
      py="4"
      color="white"
    >
      <Box maxW="800px" textAlign="center">
        <VStack spacing="4">
          <Text>Contact:</Text>
          <Text>
            Email: <Link href="lavi@mecanica.ufrj.br">lavi@mecanica.ufrj.br</Link>
          </Text>
          <Text>
            Phone Number: <Link href="tel:+1234567890">+55 (21) 3938-8239</Link>
          </Text>
          <Text>
            Address:  Av. Horacio Macedo, 2030, Bloco i, sala 130 / 230, Centro de tecnologia Cidade Universitária - Ilha do Fundão, Rio de Janeiro - RJ, 21941-914
          </Text>
          <Text>
            <Link href="https://web.facebook.com/lavi.ufrj.br/?locale=pt_BR&_rdc=1&_rdr" isExternal>
              <Icon as={FaFacebook} mr="2" boxSize={8} />
            </Link>
          </Text>
          <Text>Copyright © 2023</Text>
        </VStack>
      </Box>
    </Flex>
  );
}
