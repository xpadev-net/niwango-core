import { A_ANY, A_BinaryExpression, T_scope } from "@/@types/ast";
import { execute } from "@/context";
import { NotImplementedError } from "@/errors/NotImplementedError";
import {
  Addition,
  BitwiseAND,
  BitwiseOR,
  BitwiseXOR,
  Compare,
  Division,
  Exponentiation,
  GreaterThan,
  GreaterThanOrEqual,
  LeftShift,
  LessThan,
  LessThanOrEqual,
  Multiplication,
  Remainder,
  RightShift,
  Subtraction,
  UnsignedRightShift,
} from "@/operators";

/**
 * 演算子と処理の対応表
 */
const processors = {
  ">=": GreaterThanOrEqual,
  "<=": LessThanOrEqual,
  ">": GreaterThan,
  "<": LessThan,
  "!=": (left: unknown, right: unknown) => left !== right,
  "!==": (left: unknown, right: unknown) => left !== right,
  "<>": Compare,
  "==": (left: unknown, right: unknown) => left === right,
  "===": (left: unknown, right: unknown) => left === right,
  "+": Addition,
  "-": Subtraction,
  "*": Multiplication,
  "/": Division,
  "%": Remainder,
  "**": Exponentiation,
  "&": BitwiseAND,
  "|": BitwiseOR,
  "^": BitwiseXOR,
  "<<": LeftShift,
  ">>": RightShift,
  ">>>": UnsignedRightShift,
} as const;

/**
 * 演算式を実行する
 * @param script
 * @param scopes
 */
const processBinaryExpression = (
  script: A_BinaryExpression,
  scopes: T_scope[],
  trace: A_ANY[],
) => {
  const left = execute(script.left, scopes, trace);
  const right = execute(script.right, scopes, trace);
  const processor = processors[script.operator];
  if (!processor) throw new NotImplementedError(script, scopes);
  return processor(left, right);
};

export { processBinaryExpression };
