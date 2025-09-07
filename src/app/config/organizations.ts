// Organization and assignment mappings
export const ORGANIZATIONS = {
  "ИТМО ML осень'25": {
    name: "ИТМО: машинное обучение, осень 2025",
    owner: "itmo-ml-2025", // GitHub organization/owner name
    assignments: {
      "🧑‍💻 ЛР0: знакомство с Git и GitHub": "ml-lab0",
      "🧑‍💻 ЛР1: основые анализа данных": "ml-lab0",
    }
  },
  "ИТМО МатСтат осень'25": {
    name: "ИТМО: математическая статистика, осень 2025",
    owner: "itmo-ms-2025", // GitHub organization/owner name
    assignments: {
      "🧑‍💻 ЛР0: знакомство с Git и GitHub": "env-setup-check",
      "🧑‍💻 ЛР1:": "python-bootcamp",
    }
  },
  "ГУАП ОС осень'25": {
    name: "ГУАП: операционные системы, осень 2025",
    owner: "suai-os-2025", // GitHub organization/owner name
    assignments: {
      "🧑‍💻 ЛР0: знакомство с Git и GitHub": "os-task0",
      "🧑‍💻 ЛР0.1: знакомство с командным интерпретатором bash": "os-task-I-1",
      "🧑‍💻 ЛР1: Работа с текстовыми потоками в bash": "os-task1",
      "🧑‍💻 ЛР2: Синхронизация потоков средствами POSIX": "os-task2",
      "🧑‍💻 ЛР3: Синхронизация потоков в ОС Windows": "os-task3",
      "🧑‍💻 ЛР4: Управление памятью": "os-task4",
      "🧑‍💻 ЛР5: Межсетевое взаимодействие между процессами": "os-task5",
    }
  }
} as const;

export type OrganizationKey = keyof typeof ORGANIZATIONS;
