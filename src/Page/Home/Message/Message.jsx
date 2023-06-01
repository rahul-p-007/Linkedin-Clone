import React, { forwardRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  Image,
} from "@chakra-ui/react";

import ShareIcon from "@mui/icons-material/Share";
import MessageIcon from "@mui/icons-material/Message";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Message = forwardRef(
  ({ username, displayName, text, image, avatar, para }, ref) => {
    return (
      <>
        <div ref={ref}>
          <Card
            maxW="100vw"
            marginTop="1rem"
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          >
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar name={username} src={avatar} />

                  <Box>
                    <Heading size="sm">{displayName}</Heading>
                    <Text>{text}</Text>
                  </Box>
                </Flex>
                <IconButton
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="See menu"
                  icon={<MoreHorizIcon />}
                />
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>{para}</Text>
            </CardBody>
            <Image objectFit="cover" src={image} alt="Chakra UI" />

            <CardFooter
              justify="space-between"
              flexWrap="wrap"
              sx={{
                "& > button": {
                  minW: "136px",
                },
              }}
            >
              <Button flex="1" variant="ghost" leftIcon={<ThumbUpIcon />}>
                Like
              </Button>
              <Button flex="1" variant="ghost" leftIcon={<MessageIcon />}>
                Comment
              </Button>
              <Button flex="1" variant="ghost" leftIcon={<ShareIcon />}>
                Share
              </Button>
            </CardFooter>
          </Card>
        </div>
      </>
    );
  }
);

export default Message;
