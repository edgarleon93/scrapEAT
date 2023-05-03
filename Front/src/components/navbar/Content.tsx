import React, { useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemIcon,
} from "@mui/material";
import {
  Apple,
  BookmarkBorder,
  Facebook,
  Google,
  History,
  Logout,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import FacebookLogin, { ReactFacebookLoginInfo } from "react-facebook-login";
import { gql, useMutation } from "@apollo/client";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

const GOOGLE_LOGIN = gql`
  mutation GoogleLogin($code: String!) {
    googleLogin(code: $code) {
      token
      user {
        id
        email
        displayName
      }
    }
  }
`;

interface WindowWithFB extends Window {
  fbAsyncInit?: () => void;
  FB?: {
    init: (options: {
      appId: string;
      autoLogAppEvents: boolean;
      xfbml: boolean;
      version: string;
    }) => void;
  };
}

declare let window: WindowWithFB;

interface SimpleDialogProps {
  selectedValue: string;
  open: boolean;
  onClose: (value: string) => void;
  isConnected: boolean;
}

const menuOptions = [
  { label: "My recipes", icon: <BookmarkBorder /> },
  { label: "My history", icon: <History /> },
  { label: "Logout", icon: <Logout /> },
];

const Content: React.FC<SimpleDialogProps> = (props) => {
  const { onClose, selectedValue, open, isConnected } = props;
  const facebookAppId = import.meta.env.VITE_FACEBOOK_APP_ID as string;
  const [googleLogin] = useMutation(GOOGLE_LOGIN);

  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB?.init({
        appId: facebookAppId,
        autoLogAppEvents: true,
        xfbml: true,
        version: "v10.0",
      });
    };

    (function (d: Document, s: string, id: string) {
      let js: HTMLScriptElement | null,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode?.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  const responseFacebook = (response: ReactFacebookLoginInfo) => {
    console.log(response);
  };

  const handleClose = (): void => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };
  const navigate = useNavigate();

  const handleRedirect = (label: string) => {
    console.log(label);
    handleListItemClick(label);
    if (label === "My recipes") {
      navigate("/recipe");
    } else if (label === "My history") {
      navigate("/history");
    } else if (label === "Logout") {
      navigate("/");
    }
  };
  const handleGoogleLogin = async (
    code: string,
    navigate: any
  ): Promise<void> => {
    try {
      const { data } = (await googleLogin({ variables: { code } })) as {
        data: { googleLogin: { token: string } };
      };
      const token = data.googleLogin.token;
      localStorage.setItem("authToken", token);
      navigate("/recipe");
    } catch (error) {
      console.error("Error logging in with Google:", error);
    }
  };

  const facebookLoginInstance = useRef<any>(null);

  const handleClick = () => {
    facebookLoginInstance.current.handleClick();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box
        sx={{
          backgroundColor: "primary.main",
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DialogContent>
          <List>
            {!isConnected ? (
              <React.Fragment>
                <ListItem
                  sx={{
                    color: "secondary.main",
                    textAlign: "center",
                    gap: 2,
                  }}
                  button
                  onClick={handleClick}
                >
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignText: "center",
                    }}
                  >
                    <ListItemText primary="Connect with" />
                  </Box>
                  <ListItemIcon
                    sx={{
                      color: "secondary.main",
                      textAlign: "right",
                    }}
                  >
                    <Facebook />
                  </ListItemIcon>
                </ListItem>
                <FacebookLogin
                  appId={facebookAppId}
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  scope="ads_read,ads_management"
                  ref={facebookLoginInstance}
                />
                <GoogleLogin
                  clientId={
                    import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID || ""
                  }
                  responseType="code"
                  onSuccess={(response) => {
                    if (
                      "code" in response &&
                      typeof response.code === "string"
                    ) {
                      handleGoogleLogin(response.code, navigate);
                    }
                  }}
                  onFailure={(error: unknown) => {
                    console.error("Error logging in with Google:", error);
                  }}
                />
              </React.Fragment>
            ) : (
              menuOptions.map((option) => (
                <ListItem
                  sx={{
                    color: "secondary.main",
                    textAlign: "center",
                    gap: 2,
                  }}
                  button
                  onClick={() => handleRedirect(option.label)}
                  key={option.label}
                >
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignText: "center",
                    }}
                  >
                    <ListItemText primary={option.label} />
                  </Box>
                  <ListItemIcon
                    sx={{
                      color: "secondary.main",
                      textAlign: "right",
                    }}
                  >
                    {option.icon}
                  </ListItemIcon>
                </ListItem>
              ))
            )}
          </List>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default Content;
