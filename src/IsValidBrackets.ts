import Stack from "./Stack";

export function isValidBrackets(str: string): boolean {
  const stack = new Stack<string>();
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (str[i] !== stack.pop()) {
          return false;
        }
    }
  }
  if (stack.isEmpty()) {
    return true;
  } else {
    return false;
  }
}
