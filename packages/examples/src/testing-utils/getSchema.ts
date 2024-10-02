import { buildASTSchema, print } from "graphql";

// eslint-disable-next-line @typescript-eslint/no-var-requires
console.log(print(require("../schema.graphql")));
export const getSchema = () => buildASTSchema(require("../schema.graphql"));
