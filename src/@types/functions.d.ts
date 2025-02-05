import { A_ANY, A_CallExpression, T_scope } from "@/@types/ast";

export type IrFunction = (
  script: A_CallExpression,
  scopes: T_scope[],
  object: { [key: string]: unknown },
  trace: A_ANY[],
) => unknown;

type IrFunctions = {
  [key: string]: IrFunction;
};
