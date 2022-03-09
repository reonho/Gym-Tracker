import { Outlet } from "remix";
import UserAuthorisedComponent from "~/components/UserAuthorisedComponent";
export default function NewWorkoutRoute() {
  return (
    <>
      <UserAuthorisedComponent>
        <Outlet />
      </UserAuthorisedComponent>
    </>
  );
}
