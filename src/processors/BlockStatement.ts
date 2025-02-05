import { A_ANY, A_BlockStatement, T_scope } from "@/@types/ast";
import { execute } from "@/context";

/**
 * ブロック文を実行する
 * 返り値は最後に実行した式の返り値
 * @param script
 * @param scopes
 */
const processBlockStatement = (
  script: A_BlockStatement,
  scopes: T_scope[],
  trace: A_ANY[],
) => {
  return script.body.reduce(
    (_, item) => execute(item, scopes, trace),
    undefined as unknown,
  );
};

export { processBlockStatement };
