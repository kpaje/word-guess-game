import React from "react";

export default function RenderObject(props) {
	return Object.entries(props.object).map(([key, value]) => {
		return (
			<tr key={key}>
				<td>{value.answer}</td>
				<td>{value.hidden}</td>
				<td>{String(value.reveal)}</td>
			</tr>
		);
	});
}
