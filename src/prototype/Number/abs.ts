import { PrototypeNumberFunction } from "@/prototype/Number/index";

const processAbs: PrototypeNumberFunction = (_script, _scopes, object) => {
  return Math.abs(object);
};

export { processAbs };
