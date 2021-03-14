import React from 'react';
import { Box, Text, Button, Input, Heading, HStack, VStack, Flex, FormControl } from '@chakra-ui/react';

const InviteTeamMembers = props => {
  const { inputList, setInputList } = props;
  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index] = value;
    setInputList(list);
  };

  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, '']);
  };

  return (
    <Box w="100%">
      <VStack align="flex-start">
        {inputList.map((x, i) => {
          return (
            <Flex key={i} mb="8px" w="100%">
              <FormControl w="80%">
                <Input
                  bg="white"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={x}
                  onChange={e => handleInputChange(e, i)}
                />
              </FormControl>
              {inputList.length !== 1 ? (
                <Button variant="ghost" onClick={() => handleRemoveClick(i)} maxW="15%">
                  x
                </Button>
              ) : null}
            </Flex>
          );
        })}
        <Button variant="link" mb="40px" fontSize="16px" onClick={handleAddClick}>
          + Add Another
        </Button>
      </VStack>
    </Box>
  );
};

const CreateTeamForm = props => {
  const {
    incrementPage,
    decrementPage,
    teamName,
    teamAffiliation,
    setTeamName,
    setTeamAffiliation,
    inputList,
    setInputList,
  } = props;

  const onChangeTeamName = e => {
    setTeamName(e.target.value);
  };

  const onChangeTeamAffiliation = e => {
    setTeamAffiliation(e.target.value);
  };

  return (
    <Box w="100%" h="100%" alignItems="flex-start">
      <Button bg="white" onClick={decrementPage} _focus={{ boxShadow: 'white' }}>
        {'< Back'}
      </Button>
      <Heading alignSelf="flex-start" size="h1" as="h1" marginTop={2} marginBottom={8}>
        Create a Team
      </Heading>
      <Box as="form" w="100%" h="84%" onSubmit={incrementPage}>
        <HStack h="100%" justifyContent="center" spacing={4}>
          <VStack bg="background.primary" w="90%" h="100%" borderRadius="4px" px={10} spacing={6} align="flex-start">
            <Heading as="h3" size="h3" marginTop={8}>
              Team Details
            </Heading>
            <FormControl id="teamCreation" isRequired>
              <Input bg="white" placeholder="Team Name" value={teamName} onChange={onChangeTeamName} />
            </FormControl>
            <Input
              bg="white"
              placeholder="Team Affiliation (Optional)"
              value={teamAffiliation}
              onChange={onChangeTeamAffiliation}
            />
          </VStack>
          <VStack bg="background.primary" w="90%" h="100%" borderRadius="4px" px={10} spacing={7} align="flex-start">
            <Heading as="h3" size="h3" marginTop={8}>
              Invite Team Members (optional)
            </Heading>
            <Text fontSize="xl" fontWeight="normal">
              Enter the emails of the people you want to add
            </Text>
            <InviteTeamMembers inputList={inputList} setInputList={setInputList} />
          </VStack>
        </HStack>
        <Flex justify="flex-end" marginTop={4}>
          <Button size="lg" _focus={{ boxShadow: 'white' }} type="submit">
            Next
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default CreateTeamForm;