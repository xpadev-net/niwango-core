import { A_ANY, T_scope } from "@/@types/ast";
import { execute, getName, setAssign } from "@/context";
import typeGuard from "@/typeGuard";

/**
 * 変数に代入する関数
 * @param target
 * @param value
 * @param scopes
 */
const assign = (
  target: A_ANY,
  value: unknown,
  scopes: T_scope[],
  trace: A_ANY[],
) => {
  if (scopes.length < 1) {
    return;
  }
  try {
    if (typeGuard.Identifier(target)) {
      for (const scope of scopes) {
        if (scope[target.name] !== undefined) {
          scope[target.name] = value;
          return;
        }
      }
      if (scopes[0]) {
        scopes[0][target.name] = value;
      }
    } else if (typeGuard.MemberExpression(target)) {
      const left = execute(target.object, scopes, trace);
      if (!typeGuard.object(left)) {
        console.error(
          "[assign] left is not object",
          target,
          value,
          scopes,
          trace,
        );
        return;
      }
      const key = (
        target.computed
          ? execute(target.property, scopes, trace)
          : getName(target.property, scopes, trace)
      ) as string;
      left[key] = value;
    }
  } catch (e) {
    if (e instanceof Error) {
      console.error(
        `[assign] ${e.name}: ${e.message}`,
        target,
        value,
        scopes,
        trace,
      );
    }
  }
};

const initAssign = () => {
  setAssign(assign);
};

export { initAssign };
