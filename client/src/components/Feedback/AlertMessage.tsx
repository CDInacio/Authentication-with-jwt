import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { Alert, IconButton, Collapse } from "@mui/material";

interface IAlert {
  message: string;
  color:
    | "inherit"
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  severity: "error" | "info" | "success" | "warning";
}

const AlertMessage = ({ message, color, severity }: IAlert) => {
  return (
    <Alert severity={severity} sx={{ mb: 2 }}>
      {message}
    </Alert>
  );
};

export default AlertMessage;
