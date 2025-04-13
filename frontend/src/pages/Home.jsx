import React, { useContext, useState } from "react";
import withAuth from "../utils/WithAuth";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../styles/home.css";
import { Button, IconButton, TextField } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { AuthContext } from "../context/AuthContext";

function Home() {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");

  const { addToUserHistory } = useContext(AuthContext);
  let handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <>
      <div className="navBar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={() => {
              navigate("/");
            }}
          >
            <h2>Room Video Call</h2>
          </IconButton>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            style={{ color: "#d3d3d3" }}
            onClick={() => {
              navigate("/history");
            }}
          >
            <RestoreIcon />
          </IconButton>
          <p
            style={{ color: "#d3d3d3" }}
            onClick={() => {
              navigate("/history");
            }}
          >
            History
          </p>

          <Button
            className="styledButton"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
          >
            Logout
          </Button>
        </div>
      </div>

      <div className="meetContainer">
        <div className="leftPanel">
          <div style={{ justifyItems: "center" }}>
            <h2>Providing Quality Video Call Just Like Quality Education</h2>
            <div style={{ display: "flex", gap: "10px" }}>
              <TextField
                style={{ backgroundColor: "white", borderRadius: "5px" }}
                onChange={(e) => setMeetingCode(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleJoinVideoCall();
                    }
                }}
                id="outlined-basic"
                label="Meeting Code"
                variant="outlined"
              />
              <Button
                className="styledButton"
                onClick={handleJoinVideoCall}
                variant="contained"
              >
                Join
              </Button>
            </div>
          </div>
        </div>

        <div className="rightPanel">
          <img srcSet="/logo3.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default withAuth(Home);
