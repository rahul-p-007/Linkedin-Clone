import React, { useState } from "react";
import "./Post.css";
import { useStateValue } from "../../../context/StateProvider";
import { Button } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import db from "../../../firebase/setup";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
} from "@chakra-ui/react";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArticleIcon from "@mui/icons-material/Article";
const Main = () => {
  const [{ user }] = useStateValue();
  const [sendMessage, setSendMessage] = useState("");
  const [sendImage, setSendImage] = useState("");

  const sentMessage = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Hope",
      username: "Rahul",
      text: "Linkedin Clone",
      para: sendMessage,
      image: sendImage,
      avatar: user.photoURL,
    });
    setSendMessage("");
    setSendImage("");
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <div className="tweetBox">
      <form className="form">
        <div className="tweetBox__input">
          <Avatar src={user?.photoURL} alt="" />
          <Button
            onClick={onOpen}
            width="500px"
            border="1px solid black"
            marginLeft="8px"
            borderRadius="25px"
            colorScheme="blue"
          >
            Start a Post
          </Button>

          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create Post</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <div className="messageInput">
                    <div className="messageInput__info">
                      <Avatar src={user?.photoURL} alt={user?.displayName} />
                      <p>{user?.displayName}</p>
                    </div>
                    <input
                      type="text"
                      value={sendMessage}
                      placeholder="What's happening"
                      onChange={(e) => setSendMessage(e.target.value)}
                    />
                  </div>
                </FormControl>

                <FormControl mt={4}>
                  <input
                    className="tweetBox__ImageInput"
                    value={sendImage}
                    onChange={(e) => setSendImage(e.target.value)}
                    type="text"
                    placeholder="Image URL"
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={sentMessage}
                  type="submit"
                  backgroundColor="blue.300 !important"
                  color="blackAlpha.500 !important
                  "
                >
                  Post
                </Button>
                <Button
                  onClick={onClose}
                  backgroundColor="red.500 !important"
                  color="white !important"
                >
                  Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
        <div className="message__icons">
          <div className="message__icons__1">
            <PhotoSizeSelectActualIcon className="photoIcon" />
            <p>Gallery</p>
          </div>
          <div className="message__icons__1">
            <OndemandVideoIcon className="videoIcon" />
            <p>Video</p>
          </div>
          <div className="message__icons__1">
            <CalendarMonthIcon className="eventIcon" />
            <p>Event</p>
          </div>
          <div className="message__icons__1">
            <ArticleIcon className="ArticleIcon" />
            <p>Artilce</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Main;
