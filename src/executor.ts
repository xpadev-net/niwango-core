import { T_scope } from "@/@types/ast";
import { Execute } from "@/@types/execute";
import { setExecute } from "@/context";
import { NotImplementedError } from "@/errors/NotImplementedError";
import { processors } from "@/processors";
import typeGuard from "@/typeGuard";

/**
 * ASTを実行する関数
 * @param script
 * @param scopes
 */
const execute: Execute = (script: unknown, scopes: T_scope[]): unknown => {
  if (!script || !typeGuard.AST(script)) return;
  try {
    const processor = processors[script.type];
    if (processor) {
      return processor(script, scopes);
    }
  } catch (e) {
    const n = e as NotImplementedError;
    console.log(n, n.ast, n.scopes);
  }
  return undefined;
};

const initExecute = () => {
  setExecute(execute);
};

export { initExecute };
