import { Button } from "@mui/material";
import React from "react";

interface NavbarButtonProps {
  sx?: {};
  onClick?: (e: any) => void;
  variant: "login" | "menu";
  children?: React.ReactNode;
}
export function NavbarButton({
  sx,
  onClick,
  variant,
  children,
}: NavbarButtonProps) {
  return (
    <Button sx={sx} onClick={onClick}>
      {children}
    </Button>
  );
}
