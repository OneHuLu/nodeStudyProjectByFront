interface Message {
  role: string;
  content: string;
  [key: string]: any;
}

interface GeneratedType {
  index: number; //  表示生成文本的索引或顺序
  message: Message; // 包含角色和内容信息的对象，表示生成的文本消息。
  logprobs?: null; //  包含生成文本时对应于每个标记的概率分布信息
  finish_reason: string; // 表示生成停止的原因，即为什么模型认为生成过程应该停止。
  questions: string; //  包含用户提出的问题或输入的内容。
  [key: string]: any;
}

interface T {
  [key: string]: any;
}

type GeneratedArrayType = GeneratedType[];

export type { T };
export default GeneratedArrayType;
