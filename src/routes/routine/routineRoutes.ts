
import { createRoutineController, deleteRoutineController, readAllRoutinesController } from "../../controllers/routine/routineController";

export const routineRoutes = (fastify: any) =>{

    fastify.get("/routine/all", readAllRoutinesController)
    fastify.post("/routine", createRoutineController);
    fastify.delete("/routine/:id", deleteRoutineController)
}