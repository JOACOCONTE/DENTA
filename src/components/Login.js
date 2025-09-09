import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	const handleEnter = () => {
		navigate("/app");
	};

	return (
		<div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "#fafdff" }}>
			<h2 style={{ marginBottom: 32, color: "#4fb7b8" }}>Ruben Badia</h2>
			<button onClick={handleEnter} style={{ padding: "16px 32px", marginBottom: 16, fontSize: 18, background: "#4fb7b8", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer" }}>
				Entrar a Arte en Joyas
			</button>
			<button onClick={handleEnter} style={{ padding: "16px 32px", fontSize: 18, background: "#4fb7b8", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer" }}>
				Entrar a La Capataza
			</button>
		</div>
	);
};

export default Login;
