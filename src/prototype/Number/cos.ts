import { PrototypeNumberFunction } from "@/prototype/Number/index";

const processCos: PrototypeNumberFunction = (_script, _scopes, object) => {
  return Math.cos(object);
};

export { processCos };
