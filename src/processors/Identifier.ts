import { A_Identifier, T_scope } from "@/@types/ast";
import { execute } from "@/context";
import typeGuard from "@/typeGuard";
import { resolve } from "@/utils";

/**
 * Identifierから実際の値を取得する
 * @param script
 * @param scopes
 */
const processIdentifier = (
  script: A_Identifier,
  scopes: T_scope[]
): unknown => {
  const value = resolve(script, scopes);
  if (typeGuard.definedFunction(value)) {
    if (value.isKari) {
      return execute(value.script.arguments[1], [{}, ...scopes]);
    } else {
      return execute(value.script.arguments[1], [{}, ...scopes]);
    }
  }
  return value;
};

export { processIdentifier };
