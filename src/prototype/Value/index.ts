import { PrototypeFunction, PrototypeFunctions } from "@/@types/prototype";
import { processIndex } from "@/prototype/Value/_index";
import { processAlternative } from "@/prototype/Value/alternative";
import { processCall } from "@/prototype/Value/call";
import { processCompare } from "@/prototype/Value/compare";
import { processForEachSlot } from "@/prototype/Value/forEachSlot";
import { processHashCode } from "@/prototype/Value/hashCode";
import { processHasSlot } from "@/prototype/Value/hasSlot";
import { processMinus } from "@/prototype/Value/minus";
import { processMultiply } from "@/prototype/Value/multiply";
import { processPlus } from "@/prototype/Value/plus";
import { processEquals } from "@/prototype/Value/qeuals";
import { processRaw } from "@/prototype/Value/raw";
import { processToASBoolean } from "@/prototype/Value/toASBoolean";
import { processToASNumber } from "@/prototype/Value/toASNumber";
import { processToASString } from "@/prototype/Value/toASString";

export type PrototypeValueFunction = PrototypeFunction<unknown>;

const prototypeValueFunctions: PrototypeFunctions<unknown> = {
  hasSlot: processHasSlot,
  equals: processEquals,
  compare: processCompare,
  hashCore: processHashCode,
  forEachSlot: processForEachSlot,
  call: processCall,
  sendMessage: processCall,
  raw: processRaw,
  toASNumber: processToASNumber,
  toASString: processToASString,
  toASBoolean: processToASBoolean,
  index: processIndex,
  plus: processPlus,
  minus: processMinus,
  multiply: processMultiply,
  alt: processAlternative,
  alternative: processAlternative,
};

export { prototypeValueFunctions };
