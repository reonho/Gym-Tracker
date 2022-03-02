import { redirect } from "remix";

export let loader = async () => {
  return redirect("/home");
};
export default function Index() {
  return <></>;
}
