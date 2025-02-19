import React from "react";

function ShowData({ data }: { data: { id: string; title: string } }) {
  return (
    <div>
      <h1>Home</h1>
      <div key={data.id}>
        <h1>{data.title}</h1>
      </div>
    </div>
  );
}

export default ShowData;
