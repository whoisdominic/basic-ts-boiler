export function add(a: number, b: number) {
  if (!a || !b) {
    throw new Error("You can only use numbers with this function");
  }
  return a + b;
}
