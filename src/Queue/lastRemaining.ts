import ArrayQueue from "./ArrayQueue"
/**
 * https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/
 * @param n 
 * @param m 
 * @returns index
 */
export default function lastRemaining(n:number,m:number):number{
  const queue = new ArrayQueue<number>()
  for(let i=0;i<n;i++){
    queue.enqueue(i)
  }
  while(queue.size() > 1){
    for(let i=1;i<m;i++){
      queue.enqueue(queue.dequeue()!)
    }
    queue.dequeue()
  }
  return queue.peek()!
}