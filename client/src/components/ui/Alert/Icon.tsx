import React from "react";

import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faCircleExclamation, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  intent: "success" | "danger" | null | undefined;
  className?: string;
}

const Icon = ({ intent, className }: Props) => {
  switch (intent) {
    case "success":
      return <FontAwesomeIcon className={className} icon={faCircleCheck} />;
    case "danger":
      return (
        <FontAwesomeIcon className={className} icon={faCircleExclamation} />
      );
  }
  return <div>Icon</div>;
};

export default Icon;
