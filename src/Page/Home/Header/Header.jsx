import styled from "styled-components";
import home from "../../../assets/images/home-logo.svg";
import search from "../../../assets/images/search-icon.svg";
import navHome from "../../../assets/images/nav-home.svg";
import navNetworks from "../../../assets/images/nav-network.svg";
import navJobs from "../../../assets/images/nav-jobs.svg";
import navMessage from "../../../assets/images/nav-messaging.svg";
import navNotification from "../../../assets/images/nav-notifications.svg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import down from "../../../assets/images/down-icon.svg";
import navWork from "../../../assets/images/nav-work.svg";
import { Avatar, AvatarBadge, AvatarGroup, Stack } from "@chakra-ui/react";
import { useStateValue } from "../../../context/StateProvider";
import { Button } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/setup";
import { actionTypes } from "../../../context/reducer";
const Header = (props) => {
  const [state, dispatch] = useStateValue();
  const signout = async () => {
    await signOut(auth);
    dispatch({
      type: actionTypes.SET_USER,
      user: null,
    });
  };
  const [{ user }] = useStateValue();
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src={home} alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src={search} alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a>
                <img src={navHome} alt="" />
                <span>Home</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src={navNetworks} alt="" />
                <span>My Network</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src={navJobs} alt="" />
                <span>Jobs</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src={navMessage} alt="" />
                <span>Messaging</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src={navNotification} alt="" />
                <span>Notifications</span>
              </a>
            </NavList>

            <User>
              <Stack
                direction="row"
                spacing={4}
                paddingInline="5px"
                position="relative"
                top="-9px"
              >
                <AvatarGroup>
                  <Avatar size="sm" name="Ryan Florence" src={user?.photoURL}>
                    <AvatarBadge paddingTop="10px" border="0" bottom="-10px">
                      <span
                        style={{
                          fontSize: "13px",
                          textTransform: "none",
                          color: "gray",
                        }}
                      >
                        Me
                      </span>
                      <ArrowDropDownIcon />
                    </AvatarBadge>
                  </Avatar>
                </AvatarGroup>
              </Stack>
              <SignOut>
                <Popover>
                  <PopoverTrigger>
                    <Button backgroundColor="red.400 !important">
                      Sign Out
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader
                      backgroundColor="blue.100 !important"
                      border="none"
                    >
                      Confirmation!
                    </PopoverHeader>
                    <PopoverBody>
                      <Button
                        backgroundColor="red.300 !important"
                        onClick={signout}
                      >
                        Sign Out
                      </Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </SignOut>
            </User>

            <Work>
              <a>
                <img src={navWork} alt="" />
                <span>
                  Work
                  <img src={down} alt="" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

export default Header;
