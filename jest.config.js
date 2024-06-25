/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  preset: "ts-jest",
  testEnvironment: "jsdom", // jsdom으로 수정
  setupFilesAfterEnv: ["<rootDir>/setupTest.js"], // setupTest를 이용하여 환경 설정
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        diagnostics: {
          ignoreCodes: ["TS151001"],
        },
        tsconfig: "tsconfig.jest.json", // tsconfig.jest.json 사용 설정
      },
    ],
  },
};
