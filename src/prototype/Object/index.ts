import { PrototypeFunction, PrototypeFunctions } from "@/@types/prototype";
import { processDefKari } from "@/prototype/Object/def_kari";
import { processRaw } from "@/prototype/Object/raw";

import { processClone } from "./clone";
import { processDef } from "./def";
import { processGetSlot } from "./getSlot";
import { processSetSlot } from "./setSlot";

export type PrototypeObjectFunction = PrototypeFunction<{
  [key: string | number]: unknown;
}>;

const prototypeObjectFunctions: PrototypeFunctions<{
  [key: string | number]: unknown;
}> = {
  def: processDef,
  def_kari: processDefKari,
  getSlot: processGetSlot,
  setSlot: processSetSlot,
  clone: processClone,
  raw: processRaw,
};

export { prototypeObjectFunctions };
