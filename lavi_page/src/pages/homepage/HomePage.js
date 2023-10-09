import {
    Button,
    Flex,
    Image,
    Input,
    StackDivider,
    Text,
    Textarea,
    VStack,
    useDisclosure,
  } from "@chakra-ui/react";
  import { Header } from "../../components/header/Header";
  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  export const HomePage = () => {
    const navigator = useNavigate()
  
    const currentPage = "feed";
  
    return (
      <Flex direction="column" justify="flex-start" height="100vh">
        <Header currentPage={currentPage} />
      </Flex>
    );
  };