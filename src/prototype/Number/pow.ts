import { A_ANY } from "@/@types";
import { execute } from "@/context";
import { PrototypeNumberFunction } from "@/prototype/Number/index";
import { format } from "@/utils/format";

const processPow: PrototypeNumberFunction = (
  script,
  scopes,
  object,
  trace: A_ANY[],
) => {
  const exponent = execute(script.arguments[0], scopes, trace);
  return Math.pow(object, format(exponent, "number"));
};

export { processPow };
