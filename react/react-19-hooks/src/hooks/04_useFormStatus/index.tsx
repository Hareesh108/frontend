/* eslint-disable @typescript-eslint/no-explicit-any */
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Spinner from "../../Spinner";
import { API_ENDPOINT } from "../../api";

export function UseFormStatusDemo() {
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
      <input type="text" name="name" /> <br />
      <MyFormStatus />
      {error && <p>{error}</p>}
      {isPending ? <Spinner /> : <></>}
    </form>
  );
}

const MyFormStatus = () => {
  const { data, pending, action, method } = useFormStatus();

  console.log(data, "data");
  console.log(pending, "pending");
  console.log(action, "action");
  console.log(method, "method");

  return (
    <button style={{ marginTop: "10px" }}>
      {pending ? "Updating..." : "Update"}
    </button>
  );
};
