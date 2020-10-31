import React from "react";
import { Heading, Text, Box, SimpleGrid } from "@chakra-ui/core";
import DefaultNav from "../components/nav/DefaultNav";
import VerifiedNav from "../components/nav/VerifiedNav";
import firebase from "firebase";
import adityaverma from "../images/team/adityaverma.png";

import About from "../components/About";

export class AboutUs extends React.Component {
  state = {
    currentNav: <DefaultNav />,
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          currentNav: <VerifiedNav />,
        });
      } else {
        this.setState({
          currentNav: <DefaultNav />,
        });
      }
    });
  };

  render() {
    return (
      <div>
        {this.state.currentNav}
        <Box mb={20} overflow="hidden">
          <Box as="section" mt="3rem">
            <Box maxW="760px" mx="auto" textAlign="center">
              <Heading
                fontSize="5rem"
                letterSpacing="tight"
                fontWeight="bold"
                mb="16px"
                lineHeight="1.2"
              >
                We Are OnPoint
              </Heading>
              <Heading
                fontSize="3.5rem"
                letterSpacing="tight"
                fontWeight="bold"
                mb="16px"
                lineHeight="1.2"
              >
                <Box as="span" color="teal.500">
                  We're Changing The Way You See Media Forever
                </Box>
              </Heading>

              <Heading
                fontSize="2rem"
                letterSpacing="tight"
                fontWeight="bold"
                mt="3rem"
                lineHeight="1.2"
                textAlign="center"
              >
                Our Mission
              </Heading>
              <Text fontSize="1.5rem" mt="6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Box>
          </Box>
          <Box
            width="100%"
            height="100%"
            mt={"50px"}
            ml={"50px"}
            justifyContent="center"
          >
            <SimpleGrid columns={[2, null, 3]} spacing="40px">
              <About
                name="Aditya Verma"
                jobs={["CEO", "Founder"]}
                bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua"
                img={adityaverma}
              />
              <About
                name="Aditya Verma"
                jobs={["CEO", "Founder"]}
                bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua"
                img={adityaverma}
              />
              <About
                name="Aditya Verma"
                jobs={["CEO", "Founder"]}
                bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua"
                img={adityaverma}
              />
              <About
                name="Aditya Verma"
                jobs={["CEO", "Founder"]}
                bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua"
                img={adityaverma}
              />
              <About
                name="Aditya Verma"
                jobs={["CEO", "Founder"]}
                bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua"
                img={adityaverma}
              />
              <About
                name="Aditya Verma"
                jobs={["CEO", "Founder"]}
                bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua"
                img={adityaverma}
              />
            </SimpleGrid>
          </Box>
        </Box>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default AboutUs;
