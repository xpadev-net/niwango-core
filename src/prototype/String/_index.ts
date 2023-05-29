import { execute } from "@/context";
import { PrototypeStringFunction } from "@/prototype/String/index";

const processIndex: PrototypeStringFunction = (script, scopes, object) => {
  const index = execute(script.arguments[0], scopes);
  return object[Number(index)];
};

export { processIndex };
