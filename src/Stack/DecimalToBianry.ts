import Stack from "./Stack";

export function DecimalToBianry(decimal: number): string {
  const stack = new Stack<number>();
  while (decimal > 0) {
    const result = decimal % 2;
    stack.push(result);
    decimal = Math.floor(decimal / 2);
  }
  let res = "";
  while (!stack.isEmpty()) {
    res += stack.pop();
  }
  return res;
}
