import * as habitModel from "../../models/habit/habitModel"

export const habitService = {
  createHabitService: async ( name: string, userId: string, cue: string, routine: string, craving: string, reward: string, selectedDays : number[]) => {
    
    return await habitModel.createHabitTransaction(name, userId, cue, routine, craving, reward, selectedDays)
  },

  getAllHabitsService : async ()=>{
     return await habitModel.getAllHabits();
  },

  getHabitByIdService : async (id : string) =>{
    return await habitModel.getHabitById(id);
  },

  getHabitByNameService : async (name : string) =>{
      return await habitModel.getHabitByName(name);
  },

  markHabitAsCompletedService : async (habitId: string, weekday : number)=>{
    return await habitModel.markHabitAsCompleted(habitId, weekday);
  }
};


