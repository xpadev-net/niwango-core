import { execute } from "@/context";
import { PrototypeStringFunction } from "@/prototype/String/index";

const processIndexOf: PrototypeStringFunction = (script, scopes, object) => {
  const searchValue = execute(script.arguments[0], scopes);
  const fromIndex = execute(script.arguments[1], scopes);
  if (typeof fromIndex !== undefined) {
    return object.indexOf(`${searchValue}`, Number(fromIndex));
  }
  return object.indexOf(`${searchValue}`);
};

export { processIndexOf };
