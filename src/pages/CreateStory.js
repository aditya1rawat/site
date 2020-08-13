import React, { Component } from "react";
import {
  ThemeProvider,
  theme,
  Box,
  Flex,
  Button,
  Checkbox,
  Link as ChakraLink,
  Text,
  Stack,
  Icon,
  Input,
  InputLeftElement,
  FormControl,
  FormLabel,
  Heading,
  Link,
  InputGroup,
  SimpleGrid,
} from "@chakra-ui/core";
import DefaultNav from "../components/DefaultNav";
import Editor from '@stfy/react-editor.js'


const VARIANT_COLOR = "teal";

export class CreateStory extends Component {

  handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <DefaultNav />
        <Flex height="50%" width="100%" align="center" justifyContent="center">
          <Box>
            <Box p={4}>
              <Box textAlign="center">
                <Text>New Article</Text>
                <Heading>Share The Story</Heading>
              </Box>
              <Box mt={1} textAlign="left">
                <form onSubmit={this.handleSubmit}>
                  <SimpleGrid columns={2} spacing={10}>
                    <FormControl isRequired margin="25px" textAlign="center">
                      <FormLabel>Title</FormLabel>
                      <InputGroup>
                        <InputLeftElement children={<Icon name="edit" />} />
                        <Input
                          // onChange={this.handleChange}
                          width="100%"
                          id="title"
                          type="text"
                          placeholder="A Very Interesting Title"
                        // value={this.state.email}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired margin="25px" textAlign="center">
                      <FormLabel>Category</FormLabel>
                      <InputGroup>
                        <InputLeftElement children={<Icon name="edit" />} />
                        <Input
                          // onChange={this.handleChange}
                          width="100%"
                          id="title"
                          type="text"
                          placeholder="A Very Interesting Title"
                        // value={this.state.email}
                        />
                      </InputGroup>
                    </FormControl>
                  </SimpleGrid>
                  <FormControl isRequired margin="25px" textAlign="center">
                    <FormLabel>Title</FormLabel>
                    <InputGroup>
                      <InputLeftElement children={<Icon name="edit" />} />
                      <Input
                        // onChange={this.handleChange}
                        width="100%"
                        id="title"
                        type="text"
                        placeholder="A Very Interesting Title"
                      // value={this.state.email}
                      />
                    </InputGroup>
                  </FormControl>
                  <Editor
                    autofocus
                    holderId="editorjs-container"
                    onChange={(data) => console.log(data)}
                    onReady={() => console.log('Start!')}
                    data={{
                      "time": 1554920381017,
                      "blocks": [
                        {
                          "type": "header",
                          "data": {
                            "text": "Hello Editor.js",
                            "level": 2
                          }
                        },
                      ],
                      "version": "2.12.4"
                    }}
                  />
                  <SimpleGrid columns={3} spacing={10}>
                    <Box width="100%" />
                    <Box width="100%" />
                    <Button
                      leftIcon="check"
                      size="lg"
                      type="submit"
                      variantColor={VARIANT_COLOR}
                      variant="solid"
                      width="full"
                      mt={4}
                    >
                      Submit
                    </Button>
                  </SimpleGrid>
                </form>
              </Box>
            </Box>
          </Box>
        </Flex>
      </ThemeProvider>
    );
  }
}

export default CreateStory;
