import React from 'react';
import {
   Badge,
   Box,
   Flex,
   Stack,
   Text,
   Icon,
   PseudoBox,
   Heading,
   Button
} from '@chakra-ui/core';

import { Link } from 'react-router-dom';
import { FaChartLine, FaMoon, FaThumbsUp } from 'react-icons/fa';
import { WiSunrise } from 'react-icons/wi';

import TrendingGrid from './TrendingGrid';

import firebase from 'firebase';

let todIcon = <WiSunrise size="4rem" />;

const tod = () => {
   const today = new Date();
   const hr = today.getHours();

   if (hr < 12) {
      return 'Morning';
   } else if (hr < 18) {
      todIcon = <Icon name="sun" size="3rem" />;
      return 'Afternoon';
   } else {
      todIcon = <FaMoon size="2rem" />;
      return 'Evening';
   }
};

export class ExplorePage extends React.Component {
   state = {
      user: ''
   };
   componentDidMount = () => {
      firebase.auth().onAuthStateChanged((firebaseUser) => {
         if (firebaseUser) {
            this.setState({
               user: firebaseUser.displayName.split(' ')[0]
            });
         }
      });
   };
   render() {
      return (
         <Box direction="column" overflowX="hidden" bg="#81e6d91c">
            <Flex direction="column" padding="2rem 4rem">
               <Flex align="center">
                  <Text fontSize="3rem" color="teal" as="b" marginRight="10px">
                     Good {tod()}, {this.state.user}!
                  </Text>
                  {todIcon}
               </Flex>
            </Flex>
            <Box w="95%" align="center" display="block" mx="auto">
               <PseudoBox
                  transition="transform 0.5s"
                  _hover={{
                     transform: 'scale(1.01)',
                     transition: '0.5s ease-in-out'
                  }}
                  backgroundImage={
                     'url(https://firebasestorage.googleapis.com/v0/b/onpointnewsorg.appspot.com/o/BlogThumbnail%2Fales-nesetril-Im7lZjxeLhg-unsplash.jpg?alt=media&token=de296acd-f57e-4108-8f52-fb3dfa9ee966)'
                  }
                  h="30rem"
                  style={{
                     backgroundSize: 'cover',
                     backgroundPosition: 'center center'
                  }}
                  justifyContent="center"
                  padding="3rem"
                  direction="column"
                  borderRadius="1.5rem"
               >
                  <Text color="rgba(255, 255, 255, 0.61);" fontSize="0.75rem">
                     Featured Article Of The Week
                  </Text>
                  <Text fontSize="3rem" as="b" color="red.50">
                     Article Title
                  </Text>
                  <Text fontSize="1.5rem" color="red.50">
                     Article Description
                  </Text>
                  <Flex marginTop="auto">
                     <Badge
                        variant="solid"
                        padding="0.2rem 0.6rem"
                        borderRadius="999px"
                        style={{ textTransform: 'lowercase' }}
                        marginRight="10px"
                     >
                        #sealife
                     </Badge>
                     <Badge
                        variant="solid"
                        padding="0.2rem 0.6rem"
                        borderRadius="999px"
                        style={{ textTransform: 'lowercase' }}
                        marginRight="10px"
                     >
                        #abstract
                     </Badge>
                     <Badge
                        variant="solid"
                        padding="0.2rem 0.6rem"
                        borderRadius="999px"
                        bg="rgba(252, 129, 129, 0.41);"
                        style={{ textTransform: 'lowercase' }}
                        marginRight="10px"
                     >
                        <Flex align="center" justify="center">
                           <Box marginRight="2.5px">{/* Icon */}</Box>
                           featured
                        </Flex>
                     </Badge>
                  </Flex>
               </PseudoBox>
            </Box>
            <Stack
               w="90%"
               padding="2rem 4rem"
               direction="row"
               align="center"
               mt="2.5rem"
               mx="auto"
            >
               <Flex direction="column" w="100%" marginRight="47px">
                  <Flex align="center">
                     <Text fontSize="2.25rem" as="b" marginRight="15px">
                        Trending
                     </Text>
                     <FaChartLine size="2.3rem" />
                  </Flex>
                  <Text
                     fontSize="1.125rem"
                     color="red.300"
                     marginRight="7px"
                     marginBottom="10px"
                  >
                     What's going viral!
                  </Text>
                  <TrendingGrid />
               </Flex>
               <Flex direction="column" w="100%" marginLeft="47px">
                  <Flex align="center">
                     <Text fontSize="2.25rem" as="b" marginRight="15px">
                        Recommended
                     </Text>
                     <FaThumbsUp size="2.3rem" />
                  </Flex>
                  <Text
                     fontSize="1.125rem"
                     color="red.300"
                     marginRight="7px"
                     marginBottom="10px"
                  >
                     Read and discover the next big thing!
                  </Text>
                  <TrendingGrid />
               </Flex>
            </Stack>
            {/* <Box bg="black" padding="50px" mt="25px">
               <Heading
                  fontSize="3rem"
                  letterSpacing="tight"
                  fontWeight="bold"
                  lineHeight="1.2"
                  textAlign="center"
               >
                  Our Mission
               </Heading>
               <Text
                  fontSize="1.5rem"
                  mt="6"
                  width="75%"
                  textAlign="center"
                  display="block"
                  mx="auto"
               >
                  Our mission is to provide a platform for teenagers to create
                  quality media about various topics in the modern world to
                  educate and inform the public.
               </Text>
            </Box> */}
            <Box bg="#7289DA">
               <Box py="10" px="10" h="150px">
                  <Flex align="center" justify="space-between">
                     <Flex color="white">
                        <Box>
                           <Heading size="md" lineHeight="1.2" mb="1">
                              Start Reading More
                           </Heading>
                           <Text opacity={0.7}>
                              There are more articles waiting for you to read!
                              So get going!
                           </Text>
                        </Box>
                     </Flex>
                     <Link to="/articles">
                        <Button
                           my="auto"
                           as="a"
                           justifyContent="center"
                           alignItems="center"
                           fontWeight="bold"
                           shadow="md"
                           variantColor="teal"
                           px="24px"
                           h="56px"
                           rounded="lg"
                           fontSize="md"
                        >
                           Go To Articles
                        </Button>
                     </Link>
                  </Flex>
               </Box>
            </Box>
         </Box>
      );
   }
}

export default ExplorePage;
