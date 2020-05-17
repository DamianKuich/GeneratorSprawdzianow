import React from "react";
import {Link} from "react-router-dom";
function RegisterSuccess(props) {
  return (
    <div>
      <span>Pomyślnie utworzono konto użytkownika</span>
        {!!props.match.params.token && (
            <div>
                <Link to={"/activateaccount/"+props.match.params.token}>TOKEN: {props.match.params.token}</Link>
            </div>)}
    </div>
  );
}

export default RegisterSuccess;
