import {
  appendDefinedFunctions,
  appendResultHook,
  argumentParser,
  assign,
  execute,
  getName,
  prototypeScope,
  resolvePrototype,
  setIsWide,
} from "@/context";
import * as Errors from "@/errors";
import { initCore, resetCore } from "@/init";
import { parseScript } from "@/parser/parse";
import { parse } from "./parser/parser";

initCore();

const utils = {
  argumentParser,
  getName,
  assign,
  resolvePrototype,
};

class NiwangoCore {
  static execute = execute;
  static utils = utils;
  static resetCore = resetCore;
  static parseScript = parseScript;
  static parse = parse;
  static appendDefinedFunctions = appendDefinedFunctions;
  static appendResultHook = appendResultHook;
  static setIsWide = setIsWide;
  static errors = Errors;
  static prototypeScope = prototypeScope;
  static default = NiwangoCore;
}

export default NiwangoCore;

export type * from "@/@types";
