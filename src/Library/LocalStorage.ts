import { LocalStorageModel } from "@/Application/Models";

export class LocalStorage {
  static get<KEY extends keyof LocalStorageModel>(
    key: KEY
  ): LocalStorageModel[KEY] {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : {};
  }

  static set<KEY extends keyof LocalStorageModel>(
    key: KEY,
    val: LocalStorageModel[KEY]
  ) {
    const preVal = LocalStorage.get(key);
    const newValue = { ...preVal, ...val };
    localStorage.setItem(key, JSON.stringify(newValue));
  }
}
