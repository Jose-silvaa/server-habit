import prisma from "../../db/client";


export const createHabitTransaction = async (
  name: string,
  userId: string,
  cue: string,
  routine: string,
  craving: string,
  reward: string,
  selectedDays : number[]
) => {
  return await prisma.$transaction(async (tx) => {
    // Criar a cue
    const cueEntry = await tx.cue.create({
      data: { description: cue },
    });

    // Criar a rotina
    const routineEntry = await tx.routine.create({
      data: { description: routine },
    });

    // Criar o craving
    const cravingEntry = await tx.craving.create({
      data: { description: craving },
    });

    // Criar a recompensa
    const rewardEntry = await tx.reward.create({
      data: { description: reward },
    });

    // Criar o hábito e relacioná-lo às entidades criadas
    const habit = await tx.habit.create({
      data: {
        name,
        userId,
        selectedDays,
        cueId: cueEntry.id,
        routineId: routineEntry.id,
        cravingId: cravingEntry.id,
        rewardId: rewardEntry.id,
      },
    });

    if(selectedDays.length > 0){
      const scheduleDays = selectedDays.map((weekday) => ({
        habitId : habit.id,
        weekday,
        completed : false,
      }))

      await tx.scheduledDay.createMany({
        data : scheduleDays,
        skipDuplicates : true,
      })
    }

    return habit; // Retorna o hábito criado
  });
};

export const getAllHabits = async () =>{
  return await prisma.habit.findMany();
}

export const getHabitById = async (id : string) =>{
  return await prisma.habit.findUnique({
    where : {id}
  })
}

export const getHabitByName = async (name : string) =>{
  return await prisma.habit.findUnique({
    where : {name}
  })
}

export const markHabitAsCompleted = async(habitId : string, weekday : number) =>{
  return await prisma.$transaction(async (tx) => {
    
    const habit = await tx.habit.findUnique({
      where : { id : habitId},
      include : { scheduledDays : true}
    })

    if(!habit){
      throw new Error("Habit not found")
    }

    let scheduleDay = await tx.scheduledDay.findFirst({
      where : {
        habitId,
        weekday, 
      }
    })

    if(!scheduleDay){
      scheduleDay = await tx.scheduledDay.create({
        data : {
          habitId,
          weekday,
          completed : false,
        }
      })
    }

    const existingSchedule = await tx.scheduledDay.findUnique({
      where: { id: scheduleDay.id },
    });

    if(!existingSchedule){
      throw new Error("Schedule doesn't exists")
    }
    
    
    await tx.scheduledDay.update({
      where : {id : scheduleDay.id},
      data : { completed : !existingSchedule.completed}
    })

    const previousWeekDay = (weekday === 0) ? 6 : weekday - 1;

    const previousScheduleDay = await tx.scheduledDay.findFirst({
      where : {
        habitId,
        weekday : previousWeekDay, 
        completed : true,
      }
    })

    const newStreak = previousScheduleDay ? habit.streak + 1 : 1;

    await tx.habit.update({
      where : { id : habitId},
      data : { streak : newStreak},
    })

    return { habitId, streak : newStreak}
  })
}
