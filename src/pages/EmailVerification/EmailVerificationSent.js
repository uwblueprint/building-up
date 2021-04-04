import React from 'react';
import { useMutation } from '@apollo/client';
import { useSelector } from 'react-redux';
import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';

import { SEND_VERIFICATION_EMAIL } from 'data/gql/user';
import logo from 'assets/images/logo-black.png';

const EmailVerificationSent = props => {
  const {
    user: { userId, email },
  } = useSelector(state => state.auth);

  const [sendVerificationEmail] = useMutation(SEND_VERIFICATION_EMAIL);

  const handleResendEmail = e => {
    sendVerificationEmail({
      variables: { id: userId },
    })
      .then(data => {
        console.log(data);
        // Create a toast or alert to indicate emails have been sent
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <Box w="100%" justify="center" align="center">
      <Flex justify="center" mt="54px">
        <Image src={logo} w="350px" />
      </Flex>
      <Text fontSize="3xl" height="52px" mt="42px">
        Verify your email
      </Text>
      <Text fontSize="xl" w="50%" line-height="35px" mt="16px">
        You will need to verify your email to access your dashboard.
      </Text>
      <Flex justify="center" mt="35px">
        <Image src={logo} h="250px" w="250px" />
      </Flex>
      <Text fontSize="xl" w="50%" line-height="35px" mt="33px">
        An email has been sent to {email} with a link to verify your account. If you have not received the email after a
        few minutes, please check your spam folder.
      </Text>
      <Button size="lg" _focus={{ boxShadow: 'white' }} mt="43px" onClick={handleResendEmail}>
        Resend Email
      </Button>
    </Box>
  );
};

export default EmailVerificationSent;
