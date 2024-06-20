import { Freelance, Interim, Permanent, Temporary } from "../icons";

export const formItem = [
  {
    header: "JOB DESCRIPTION",
    option: [
      {
        mainTitle: "Write a headline for your job post",
        children: [
          {
            type: "text",
            label: "Job Title",
            name: "jobTitle",
            xs: 12,
            pattern: "notEmpty",
            value: "",
          },
        ],
      },
      {
        mainTitle: "Choose industry",
        children: [
          {
            type: "select",
            label: "INDUSTRY",
            name: "industry",
            pattern: "notEmpty",
            listItem: ["Nanotechnology", "Legislative Office"],
            xs: 12,
            value: "",
          },
        ],
      },
      {
        mainTitle: "Engagement",
        children: [
          {
            type: "radioButton",
            pattern: "notSelected",
            name: "engagement",
            radioButtonGroup: [
              {
                label: "Just for PSL",
                sm: 4,
                value: "PSL",
              },
              {
                label: "All agencies",
                sm: 4,
                value: "agencies",
              },
              {
                label: "All agencies except PSL",
                sm: 4,
                value: "agenciesExcept",
                disabled: true,
              },
            ],
          },
          {
            type: "radio",
            name: "selectAgencies",
            pattern: "notSelected",
            show: (values) => {
              return values?.engagement === "PSL";
            },
            radioGroup: [
              {
                value: "PSLAgencies",
                label: "Select all PSL agencies",
              },
              {
                value: "PSLAgency",
                label: "Select PSL agency",
              },
            ],
          },
          {
            type: "text",
            label: "PSL Agency",
            pattern: "notEmpty",
            name: "PSLAgency",
            xs: 12,
            value: "",
            show: (values) => {
              return (
                values?.selectAgencies === "PSLAgency" &&
                values?.engagement === "PSL"
              );
            },
          },
        ],
      },
      {
        mainTitle: "Specify location",
        children: [
          {
            type: "select",
            label: "City",
            name: "city",
            listItem: ["Kappl (Tirol)", "Wies (Tirol)"],
            sm: 6,
            pattern: "notEmpty",
            value: "",
          },
          {
            type: "text",
            label: "Country",
            name: "country",
            sm: 6,
            disabled: true,
          },
        ],
      },
      {
        mainTitle: "Workplace type",
        children: [
          {
            type: "radioButton",
            name: "workplaceType",
            pattern: "notSelected",
            radioButtonGroup: [
              {
                label: "Remote",
                sm: 4,
                value: "remote",
              },
              {
                type: "radioButton",
                label: "Onsite",
                sm: 4,
                value: "onsite",
              },
              {
                type: "radioButton",
                label: "Hybrid",
                sm: 4,
                value: "hybrid",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    header: "SKILLS",
    option: [
      {
        mainTitle: "Required seniority level",
        children: [
          {
            type: "select",
            label: "SENIORITY LEVEL",
            name: "level",
            listItem: ["Entry Level", "Junior", "Mid-Level"],
            pattern: "notEmpty",
            xs: 12,
            value: "",
          },
        ],
      },
      {
        mainTitle: "Required years of experience",
        children: [
          {
            type: "radioButton",
            pattern: "notSelected",
            name: "experiences",
            radioButtonGroup: [
              {
                label: "0 - 3",
                sm: 4,
                value: "0-3",
                name: "yearExperience",
              },
              {
                label: "4 - 7",
                sm: 4,
                value: "4-7",
                name: "yearExperience",
              },
              {
                label: "7 - 10",
                sm: 4,
                value: "7-10",
                name: "yearExperience",
              },
              {
                label: "10+",
                sm: 4,
                value: "10+",
                name: "yearExperience",
              },
              {
                label: "15+",
                sm: 4,
                value: "15+",
                name: "yearExperience",
              },
              {
                label: "20+",
                sm: 4,
                value: "20+",
                name: "yearExperience",
              },
            ],
          },
        ],
      },
      {
        mainTitle: "Management experience required",
        children: [
          {
            type: "radioButton",
            pattern: "notSelected",
            name: "experienceRequired",
            radioButtonGroup: [
              {
                label: "Yes",
                sm: 4,
                value: "yes",
              },
              {
                label: "No",
                sm: 4,
                value: "no",
              },
            ],
          },
        ],
      },
      {
        mainTitle: "Choose skills required for your project",
        children: [
          {
            type: "autocomplete",
            label: "SKILLS",
            name: "skills",
            listItem: [
              { title: "Programming languages" },
              { title: "Web development" },
              { title: "Coding Javascript" },
            ],
            xs: 12,
            pattern: "notEmpty",
            value: "",
          },
        ],
      },
    ],
  },
  {
    header: "CONTRACT TYPE",
    option: [
      {
        mainTitle: "Choose employment type",
        children: [
          {
            type: "radioButton",
            pattern: "notSelected",
            name: "employmentType",
            radioButtonGroup: [
              {
                label: "Permanent",
                sm: 4,
                value: "Permanent",
                icon: <Permanent />,
              },
              {
                label: "Freelance",
                sm: 4,
                value: "Freelance",
                icon: <Freelance />,
              },
              {
                label: "Temporary",
                sm: 4,
                value: "Temporary",
                icon: <Temporary />,
              },
              {
                label: "Interim",
                sm: 4,
                value: "Interim",
                icon: <Interim />,
              },
            ],
          },
        ],
      },
      {
        mainTitle: "What is a required time load",
        children: [
          {
            type: "radioButton",
            pattern: "notSelected",
            name: "timeLoad",
            radioButtonGroup: [
              {
                label: "Full Time",
                sm: 4,
                value: "FullTime",
              },
              {
                label: "Part Time",
                sm: 4,
                value: "PartTime",
              },
            ],
          },
        ],
      },
      {
        mainTitle: "Specify contract length",
        children: [
          {
            type: "select",
            label: "CONTRACT LENGTH",
            listItem: ["1 Month", "2 Month", "3 Month"],
            xs: 12,
            name: "contactLength",
            pattern: "notEmpty",
            value: "",
          },
        ],
      },
      {
        mainTitle: "Salary Type",
        children: [
          {
            type: "radioButton",
            pattern: "notSelected",
            name: "salaryType",
            radioButtonGroup: [
              {
                label: "Base Salary",
                sm: 4,
                value: "BaseSalary",
              },
              {
                label: "Salary Range",
                sm: 4,
                value: "SalaryRange",
              },
              {
                label: "Negotiable",
                sm: 4,
                value: "Negotiable",
              },
            ],
          },
        ],
      },
      {
        mainTitle: "Base Salary",
        show: (values) => {
          return values?.salaryType === "BaseSalary";
        },
        children: [
          {
            type: "select",
            label: "CURRENCY",
            name: "currency",
            pattern: "notEmpty",
            value: "",
            listItem: ["USD", "EUR", "CHF"],
            md: 4,
          },
          {
            type: "text",
            label: "SALARY",
            name: "salary",
            md: 8,
            value: "",
            pattern: "notEmpty",
          },
        ],
      },
      {
        mainTitle: "Salary Range",
        show: (values) => {
          return values?.salaryType === "SalaryRange";
        },
        children: [
          {
            type: "select",
            label: "CURRENCY",
            name: "currency",
            listItem: ["USD", "EUR", "CHF"],
            md: 4,
            value: "",
            pattern: "notEmpty",
          },
          {
            type: "text",
            label: "FROM",
            name: "from",
            md: 4,
            pattern: "notEmpty",
            value: "",
          },
          {
            type: "text",
            label: "TO",
            name: "to",
            md: 4,
            pattern: "notEmpty",
            value: "",
          },
        ],
      },
      {
        mainTitle: "Negotiable salary",
        show: (values) => {
          return values?.salaryType === "Negotiable";
        },
        children: [
          {
            type: "select",
            label: "CURRENCY",
            name: "currency",
            listItem: ["USD", "EUR", "CHF"],
            md: 4,
          },
        ],
      },
      {
        mainTitle: "Recruiter fee",
        children: [
          {
            type: "radio",
            sm: 12,
            name: "recruiterFeeApply",
            pattern: "notSelected",
            radioGroup: [
              {
                label: "Apply for all agencies",
                value: "Apply for all agencies",
              },
              {
                label: "Use default fee for PSL",
                value: "Use default fee for PSL",
              },
            ],
          },
          {
            type: "radioButton",
            pattern: "notSelected",
            name: "recruiterFee",
            radioButtonGroup: [
              {
                label: "Fixed",
                sm: 4,
                value: "Fixed",
              },
              {
                label: "Percentage",
                sm: 4,
                value: "Percentage",
              },
            ],
          },
          {
            type: "text",
            name: "fixedFee",
            show: (values) => {
              return values?.recruiterFee === "Fixed";
            },
            label: "FIXED FEE",
            sm: 4,
          },
          {
            type: "text",
            show: (values) => {
              return values?.recruiterFee === "Percentage";
            },
            label: "PERCENTAGE FEE",
            sm: 4,
            name: "percentage",
            pattern: "notEmpty",
          },
        ],
      },
      {
        mainTitle: "Rebate time",
        children: [
          {
            type: "radio",
            sm: 12,
            pattern: "notSelected",
            name: "recruiterFeeTime",
            radioGroup: [
              {
                label: "Apply for all agencies",
                value: "Apply for all agencies",
              },
              {
                label: "Use default for PSL",
                value: "Use default for PSL",
              },
            ],
          },
          {
            type: "multiAddTextField",
            label: "1ST MONTH",
            name: "month",
            pattern: "notEmpty",
            value: "",
          },
        ],
      },
    ],
  },
];
