import { A_ANY, T_scope } from "@/@types/ast";
import { Execute } from "@/@types/execute";
import { resultHook, setExecute } from "@/context";
import { NotImplementedError } from "@/errors/NotImplementedError";
import { processors } from "@/processors";
import typeGuard from "@/typeGuard";

/**
 * ASTを実行する関数
 * @param script
 * @param scopes
 * @param trace
 */
const execute: Execute = (
  script: unknown,
  scopes: T_scope[],
  trace: A_ANY[]
): unknown => {
  if (!script || !typeGuard.AST(script)) return;
  let result: unknown = undefined;
  trace = [...trace, script];
  try {
    const processor = processors[script.type];
    if (processor) {
      result = processor(script, scopes, trace);
    }
  } catch (e) {
    const n = e as NotImplementedError;
    console.log(n, n.ast, n.scopes);
    console.log("trace", trace);
  }
  for (const hook of resultHook) {
    result = hook(result);
  }
  return result;
};

const initExecute = () => {
  setExecute(execute);
};

export { initExecute };
