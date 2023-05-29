import { A_ANY, A_CallExpression, T_scope } from "@/@types/ast";
import { IrFunction } from "@/@types/functions";
import { argumentParser } from "@/context";
import { execute } from "@/context";

/**
 * @関数
 * if文用関数
 * @param script
 * @param scopes
 */
const processIf: IrFunction = (script: A_CallExpression, scopes: T_scope[]) => {
  const args = argumentParser(
    script.arguments,
    scopes,
    ["when", "then", "else"],
    false
  ) as { [key in "when" | "then" | "else"]?: A_ANY };
  const condition = execute(args.when, scopes);
  if (condition) {
    return execute(args.then, scopes);
  } else {
    return execute(args.else, scopes);
  }
};

export { processIf };
