import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Context from "../utils/context";

const SingUp = (props) => {
  const context = useContext(Context);
  return (
    <div className="FlexRowMain">
      <div>
        <h1>SingUp Create an Account</h1>
        <Button
          color="primary"
          size="large"
          variant="contained"
          onClick={() => context.authObj.login()}
        >
          SingUp
        </Button>
      </div>
    </div>
  );
};

export default SingUp;
