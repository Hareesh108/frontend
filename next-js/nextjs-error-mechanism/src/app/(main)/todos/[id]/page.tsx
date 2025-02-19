import BackButton from "@/components/back-list/back-button";
import axios from "axios";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    console.log("response:", response.data);

    return (
      <div className="text-center h-lvh flex flex-col justify-center items-center">
        <h1>Get By ID</h1>
        {/* <ShowData data={response.data} /> */}
        <div key={response.data.id}>
          <h1>{response.data.id}</h1>
          <h1>{response.data.title}</h1>
        </div>

        <BackButton />
      </div>
    );
  } catch (error) {
    console.log("///////////////////////////////////////////////////");

    if (axios.isAxiosError(error) && error.response) {
      console.error(error.response.status);
    } else {
      console.error(error);
    }
    notFound();
  }
}
