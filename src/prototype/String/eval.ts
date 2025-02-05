import { A_ANY } from "@/@types";
import { execute } from "@/context";
import { parseScript } from "@/parser/parse";
import { PrototypeStringFunction } from "@/prototype/String/index";

const processEval: PrototypeStringFunction = (
  _script,
  scopes,
  object,
  trace: A_ANY[],
) => {
  try {
    const script = parseScript(object, "[eval]");
    return execute(script, scopes, trace);
  } catch (e) {
    return undefined;
  }
};

export { processEval };
