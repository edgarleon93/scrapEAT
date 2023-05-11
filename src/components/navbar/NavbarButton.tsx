import { Button } from "@mui/material";
import React from "react";
import Content from "./Content";

interface NavbarButtonProps {
  sx?: {};
  onClick?: (e: any) => void;
  variant: "login" | "menu";
  children?: React.ReactNode;
  open?: boolean;
  onOpen?: () => void;
  onClose?: (value: string) => void;
  isConnected?: boolean;
}

export function NavbarButton({
  sx,
  onClick,
  variant,
  children,
  open,
  onOpen,
  onClose,
  isConnected,
}: NavbarButtonProps) {
  const handleClick = (e: any) => {
    if (onClick) {
      onClick(e);
    }
    if (onOpen) {
      onOpen();
    }
  };

  return (
    <>
      <Button sx={sx} onClick={handleClick}>
        {children}
      </Button>
      {variant === "menu" && (
        <Content
          selectedValue={"None"}
          open={open || false}
          onClose={onClose || (() => {})}
          isConnected={isConnected || false}
        />
      )}
    </>
  );
}
