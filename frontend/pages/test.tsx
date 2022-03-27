import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import ContractService from "../services/contractService";

export default function Test() {
	const { user } = useContext(AuthContext);

	return (
		<div>
			<h1>Test</h1>
			<button
				onClick={() => ContractService.createReport(user.provider)}
			>
				Test contract now
			</button>
		</div>
	);
}
