// Organization and assignment mappings
export const ORGANIZATIONS = {
  "IT3049C-Fall25": {
    name: "IT3049C Fall25",
    owner: "IT3049C", // GitHub organization/owner name
    assignments: {

      "🧑‍💻Lab: Git Started - Your Profile": "git-started-with-you-profile",
      "🧑‍💻 Campus Portal (JS Exercises)": "js-exercise-campus-portal",
      "🧑‍💻 Game Lobby With Rock Paper Scissors": "Game-Lobby-With-Rock-Paper-Scissors"
    }
  },
  "IT2053C-Fall25": {
    name: "IT2053C Fall25",
    owner: "IT2053C-Gilany", // GitHub organization/owner name
    assignments: {
      "Env Setup Check": "env-setup-check",
      "Python Bootcamp": "python-bootcamp",
      "Lists and Tuples": "lists-and-tuples",
    }
  }
} as const;

export type OrganizationKey = keyof typeof ORGANIZATIONS;
