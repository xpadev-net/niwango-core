import { A_ANY } from "@/@types";
import { execute } from "@/context";
import { PrototypeArrayFunction } from "@/prototype/Array/index";
import { format } from "@/utils/format";

const processJoin: PrototypeArrayFunction = (
  script,
  scopes,
  object,
  trace: A_ANY[]
) => {
  const separator = execute(script.arguments[0], scopes, trace);
  if (typeof separator !== "undefined") {
    return object.join(format(separator, "string"));
  }
  return object.join("");
};

export { processJoin };
