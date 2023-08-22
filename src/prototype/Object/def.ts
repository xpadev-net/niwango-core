import { A_ANY } from "@/@types";
import { definedFunction } from "@/@types/function";
import { assign, getName } from "@/context";
import { InvalidTypeError } from "@/errors/InvalidTypeError";
import typeGuard from "@/typeGuard";

import { PrototypeObjectFunction } from "./index";

/**
 * @関数
 * 関数定義用関数
 * @param script
 * @param scopes
 * @param object
 */
const processDef: PrototypeObjectFunction = (
  script,
  scopes,
  object,
  trace: A_ANY[]
) => {
  const functionName = (() => {
    if (typeGuard.Identifier(script.arguments[0])) {
      return getName(script.arguments[0], scopes, trace);
    }
    if (typeGuard.CallExpression(script.arguments[0])) {
      return getName(script.arguments[0].callee, scopes, trace);
    }
    throw new InvalidTypeError(
      "function name must be CallExpression or Identifier",
      script,
      scopes
    );
  })();
  if (typeof functionName !== "string") {
    throw new InvalidTypeError("function name must be string", script, scopes);
  }
  if (functionName === "call" && typeGuard.MemberExpression(script.callee)) {
    assign(
      script.callee.object,
      {
        type: "definedFunction",
        isKari: false,
        script,
      } as definedFunction,
      scopes,
      trace
    );
    return;
  }
  object[functionName] = {
    type: "definedFunction",
    isKari: false,
    script,
  } as definedFunction;
};

export { processDef };
