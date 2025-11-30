/* eslint-disable @typescript-eslint/no-explicit-any */
import { useActionState } from "react";
import Spinner from "../../Spinner";
import { API_ENDPOINT } from "../../api";

export function UseActionStateDemo() {
  const [error, submitAction, isPending] = useActionState(
    async (previousState: any, formData: any) => {
      console.log(previousState, "previousState");
      console.log(formData, "formData");

      const res = await fetch(`${API_ENDPOINT}/posts`, {
        method: "POST",
        body: JSON.stringify({
          title: formData.get("name"),
          body: "bar",
          userId: 1,
        }),
      });
      const json = res.json();
      console.log(json, "json");

      if (res.ok) {
        return "Update Successfully";
      } else {
        return "Something went wrong";
      }
    },
    ""
  );

  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      <button type="submit" disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
      {isPending ? <Spinner /> : <></>}
    </form>
  );
}
