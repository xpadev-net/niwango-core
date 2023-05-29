import { PrototypeFunction, PrototypeFunctions } from "@/@types/prototype";

import { processAbs } from "./abs";
import { processCos } from "./cos";
import { processFloor } from "./floor";
import { processPow } from "./pow";
import { processSin } from "./sin";
import { processTimes } from "./times";

export type PrototypeNumberFunction = PrototypeFunction<number>;

const prototypeNumberFunctions: PrototypeFunctions<number> = {
  floor: processFloor,
  sin: processSin,
  cos: processCos,
  pow: processPow,
  abs: processAbs,
  times: processTimes,
};

export { prototypeNumberFunctions };
