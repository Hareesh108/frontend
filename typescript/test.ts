type Pen = {
  name: string;
}

type Hey  = Pen | {
  age: number;
} 

const New: Hey = { age: 12, name: "" };
