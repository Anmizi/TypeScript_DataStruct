import ArrayQueue from "./ArrayQueue";

function hotPotato(names: string[], num: number) {
  const queue = new ArrayQueue<string>();
  for (const name of names) {
    queue.enqueue(name);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      if (num === i - 1) {
        queue.dequeue();
      } else {
        const name = queue.dequeue();
        name && queue.enqueue(name);
      }
    }
  }

  return queue.peek();
}
const names = ["Jahn", "Mike", "Mali", "Alex", "Steve"];
const leftName = hotPotato(names, 3);
console.log(leftName);
