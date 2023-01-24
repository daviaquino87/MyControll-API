"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    bail: true,
    clearMocks: true,
    coverageProvider: "v8",
    preset: "ts-jest",
    testMatch: ["**/*.spec.ts"],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
