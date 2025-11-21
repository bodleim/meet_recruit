import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://admin:" +
  process.env.MONGODB_ADMIN +
  ".mongodb.net/?appName=Cluster1";

let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  /*
    타입스크립트는 global 안에 _mongo같은 임의 프로퍼티가 있다고 가정하지 않음
    따라서 as any를 붙여 global을 any 타입처럼 취급하여 타입 검사기를 우회해서
    _mongo 프로퍼티를 자유롭게 쓸 수 있도록 함
  */
  if (!(global as any)._mongo) {
    (global as any)._mongo = new MongoClient(url).connect();
  }
  connectDB = (global as any)._mongo;
} else {
  connectDB = new MongoClient(url).connect();
}

export { connectDB };
