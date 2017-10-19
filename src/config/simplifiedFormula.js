export const simplifiedCalculationConditions = [
  {
      condition: "received_designated_benefits",
      description: "Anyone included in your parents’ household size (as defined on the FAFSA) received benefits during 2015 or 2016 from any of the designated means-tested federal benefit programs: the Medicaid Program, the Supplemental Security Income (SSI) Program, the Supplemental Nutrition Assistance Program (SNAP), the Free and Reduced Price School Lunch Program, the Temporary Assistance for Needy Families (TANF) Program, and the Special Supplemental Nutrition Program for Women, Infants, and Children (WIC)",
      checked: false,
  },
  {
      condition: "filed_2015_1040A",
      description: "Your parents filed or were eligible to file a 2015 IRS Form 1040A or 1040EZ.",
      checked: false,
  },
  {
      condition: "filed_1040_not_required",
      description: "Your parents filed a 2015 IRS Form 1040 but were not required to do so",
      checked: false
  },
  {
      condition: "not_required_to_file_tax_return",
      description: "Your parents were not required to file any income tax return.",
      checked: false
  },
  {
      condition: "is_dislocated_worker",
      description: "Your parent is a dislocated worker.",
      checked: false
  },
  {
    condition: "combined_income_under_threshold",
    description: "The combined 2015 income of your parents is $49,999 or less.",
    checked: false
  }
];