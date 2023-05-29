import { execute } from "@/context";
import { PrototypeStringFunction } from "@/prototype/String/index";

const processSlice: PrototypeStringFunction = (script, scopes, object) => {
  const startIndex = execute(script.arguments[0], scopes);
  const length = execute(script.arguments[1], scopes);
  if (typeof length !== "undefined") {
    return object.slice(
      Number(startIndex),
      Number(startIndex) + Number(length)
    );
  }
  return object.slice(Number(startIndex));
};

export { processSlice };
