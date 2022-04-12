import { Outlet } from "remix";
import UserAuthorisedComponent from "~/components/UserAuthorisedComponent";
import { motion } from "framer-motion";
export default function NewWorkoutRoute() {
  return (
    <>
      <UserAuthorisedComponent>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, rotate: 10 }}
          transition={{ duration: 0.2 }}
        >
          <Outlet />
        </motion.div>
      </UserAuthorisedComponent>
    </>
  );
}
