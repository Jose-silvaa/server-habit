import { FastifyReply, FastifyRequest } from "fastify";
import { habitService } from "../../services/habit/habitService";

interface ParamsBody {
  id: string;
}

interface CreateHabitBody {
  name: string;
  userId: string;
  cue: string;
  routine: string;
  craving: string;
  reward: string;
  selectedDays: number[];
}

interface MarkHabit {
  habitId: string;
  weekday: number;
}

export async function createHabit(req: FastifyRequest<{ Body: CreateHabitBody }>, res: FastifyReply) {
  try {
    const { name, userId, cue, routine, craving, reward, selectedDays } = req.body;

    if (!name || !userId || !cue || !routine || !craving || !reward) {
      return res.code(400).send({ message: "All fields are mandatory" });
    }

    const habitExist = await habitService.getHabitByNameService(name)

    if (habitExist) {
      res.code(409).send({ message: "Habit Already Exist" })
    }

    const habit = await habitService.createHabitService(name, userId, cue, routine, craving, reward, selectedDays);
    return res.code(201).send(habit);

  } catch (error: any) {

    return res.code(500).send({
      message: "Internal Server Error",
      error: error.message || "An unexpected error occurred",
    });
  }
}


export async function getAllHabitsController(req: FastifyRequest, res: FastifyReply) {

  try {
    const habitExist = await habitService.getAllHabitsService();

    if (habitExist.length == 0) {
      res.code(404).send({ message: "There's no habit registred" })
    }

    res.code(200).send(habitExist);
  } catch (error: any) {

    return res.code(500).send({ message: "Internal Server Error", error: error.message || "An unexpected error occurred" });
  }
}

export async function getHabitByIdController(req: FastifyRequest<{ Params: ParamsBody }>, res: FastifyReply) {

  const { id } = req.params

  if (!id) {
    res.code(400).send({ message: "ID Can't be empty" })
  }

  try {

    const habitExist = await habitService.getHabitByIdService(id);

    if (!habitExist) {
      res.code(404).send({ message: "Habit wasn't found" })
    }

    res.code(200).send(habitExist)

  } catch (error: any) {
    res.code(500).send({ message: "Internal Server Error", error: error.message || "An unexpected error occurred" });

  }
}

export async function markHabitAsCompletedController(req: FastifyRequest<{ Body: MarkHabit }>, res: FastifyReply) {

  const { habitId, weekday } = req.body

  try {
    const habitExist = await habitService.getHabitByIdService(habitId);

    if (!habitExist) {
      res.code(404).send({ message: "Habit not found" })
    }

    const markAsCompleted = await habitService.markHabitAsCompletedService(habitId, weekday);

    res.code(200).send(markAsCompleted);

  } catch (error: any) {
    res.code(500).send({ message: "Internal Server Error", error: error.message || "An unexpected error occurred" });

  }

}
