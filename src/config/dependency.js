export const dependencyStatusConditions = [
    {
        condition: "birth_date",
        description: "The student was born before January 1, 1994.",
        checked: false,
    },
    {
        condition: "married_but_not_divorced",
        description: "The student is married or separated (but not divorced) as of the date of the application.",
        checked: false,
    },
    {
        condition: "enrolled_in_graduate_degree",
        description: "At the beginning of the 2017–2018 school year, the student will be enrolled in a master’s or doctoral degree program (such as MA, MBA, MD, JD, PhD, EdD, or graduate certificate, etc.).",
        checked: false
    },
    {
        condition: "on_active_duty",
        description: "The student is currently serving on active duty in the U.S. Armed Forces or is a National Guard or Reserves enlistee called into federal active duty for purposes other than training.",
        checked: false
    },
    {
        condition: "is_veteran",
        description: "The student is a veteran of the U.S. Armed Forces.",
        checked: false
    },

];