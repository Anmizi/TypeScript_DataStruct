export default interface IQueue<T> {
  enqueue(ele: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
  size(): number;
}
