import React from "react";

export default function RenderObject({ object }) {
  return Object.entries(object).map(([key, value]) => {
    const [answer, hidden, reveal] = value;
    return (
      <tr key={key}>
        <td>{answer}</td>
        <td>{hidden}</td>
        <td>{String(reveal)}</td>
      </tr>
    );
  });
}
