import { PrototypeObjectFunction } from "@/prototype/Object/index";

const processRaw: PrototypeObjectFunction = (_script, _scopes, object) => {
  return object;
};

export { processRaw };
