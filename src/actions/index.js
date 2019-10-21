/*
Two actions in this app:
1. ADD RECIPE - adds recipe to a particular meal for a particular day
2. REMOVE FROM CALENDAR - remove the recipe for a particular meal on  a particular day

to export anything use export keyword before the variable or function.

*/ 

export const ADD_RECIPE = 'ADD_RECIPE'
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

export function addRecipe({day, recipe, meal}){
    return {
        type: ADD_RECIPE,
        recipe,
        day,
        meal,
    }
}

export function removeFromCalendar({day, meal}){
    return {
        type: REMOVE_FROM_CALENDAR,
        day,
        meal,
    }
}