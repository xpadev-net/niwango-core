import { run } from "@/testUtils";

test("bug:sm13570088", () => {
  expect(
    run(
      `def(car(c),(c==nil).alt(nil,c[1].car));obj=[0,[4]];obj[1].car="huga";return car(obj)`
    )
  ).toBe("huga");

  expect(run(`fn=[];fn[1]={};fn[1].def(call(a),a);fn[1]("test")`)).toBe("test");
});

export {};
