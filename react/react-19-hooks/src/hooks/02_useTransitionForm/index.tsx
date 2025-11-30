import { useState, useTransition } from "react";
import { API_ENDPOINT } from "../../api";
import Spinner from "../../Spinner";

export function UseTransitionWithForm() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      const res = await fetch(`${API_ENDPOINT}/photos`);
      const json = await res.json();

      if (res.ok) {
        setData(json);
      } else {
        setError("Something went wrong!!");
      }
    });
  };

  return (
    <div>
      <form action={handleSubmit}>
        <button disabled={isPending}>Fetch Data</button>
      </form>

      {/* We can also do like this
      <form>
        <button formAction={handleSubmit} disabled={isPending}>
          Fetch Data
        </button>
      </form> */}

      {error && <p>{error}</p>}

      {isPending ? (
        <Spinner />
      ) : (
        <>
          {data?.map((item: { id: number; title: string }) => (
            <ol key={item?.id}>{item?.title}</ol>
          ))}
        </>
      )}
    </div>
  );
}
