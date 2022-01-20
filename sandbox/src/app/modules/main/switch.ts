export interface Switch {
  name:string
  fiber: FiberOrCooper;
  cooper: FiberOrCooper;
}
export interface FiberOrCooper{
  "1G"?: Usage;
  "10G"?: Usage;
  "100G"?: Usage;
}
export interface Usage {
  total: number;
  usage: number;
}
 