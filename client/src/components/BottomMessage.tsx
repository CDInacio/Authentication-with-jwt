import React from "react";

import { Button, Typography } from "@mui/material";

interface IBottomMessage {
  text: string;
  subtext: string;
  handleNavigate: (path: string) => void;
  path: string;
}

const BottomMessage = ({
  text,
  subtext,
  handleNavigate,
  path,
}: IBottomMessage) => {
  return (
    <Typography
      sx={{
        display: "flex",
        fontSize: 15,
        justifyContent: "center",
        alignItems: "center",
      }}
      variant="caption"
      className="text-center"
    >
      {text}
      <Button
        variant="text"
        onClick={() => handleNavigate(path)}
        className="ml-1 font-bold cursor-pointer"
      >
        {subtext}
      </Button>
    </Typography>
  );
};

export default BottomMessage;
