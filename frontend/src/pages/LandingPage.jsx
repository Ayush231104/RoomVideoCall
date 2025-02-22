import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

export default function LandingPage() {
	const router = useNavigate();
  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
			<h2>Room Video Call</h2>
		</div>
        <div className="navList">
			<p onClick={() => {
				router("/Guest");
			}}>Join as Guest</p>
			<p onClick={() => {
				router("/auth");
			}}>Register</p>
			<div onClick={() => {
				router("/auth");
			}} role="button">
				<p>Login</p>
			</div>
		</div>
      </nav>
	  <div className="landingMainContainer">
		<div>
			<h1><span style={{color: "#ff9839"}}>Connect</span> with your Loved Ones</h1>
			<p>Cover a distance by Room video call</p>
			<div role="button">
				<Link to={"/auth"}>Get Started</Link>
			</div>
		</div>
		<div>
			<img src="\public\abc.png" alt="" />
		</div>
	  </div>
    </div>
  );
}
