import { SubjektifyConfig } from "subjektify";
import "@subjektifylabs/subjektify-toolbox";

const config: SubjektifyConfig = {
    namespace: "hackathon",
    version: "0.1.0",
    license: "MIT",
    build: {
        sources: ["subjects"],
        outputDirectory: "artifacts"
    },
    codegen: [
        {
            target: "client",
            language: "typescript",
            outputDirectory: "generated/client"
        },
        {
            target: "contract",
            language: "solidity",
            outputDirectory: "generated/contracts"
        }
    ]
}

export default config;
