import { decryptData, encryptData } from './helpers-crypt'

export class LocalStorageManager {
  static setItem(key: string, data: any) {
    const encryptedValue = encryptData(data)
    localStorage.setItem(key, encryptedValue)
  }
  static getItem(key: string) {
    const value = localStorage.getItem(key)
    try {
      return decryptData(value)
    } catch (_error) {
      return value
    }
  }
  static removeItem(key: string) {
    const value = this.getItem(key)
    localStorage.removeItem(key)
    return value
  }
  static clear() {
    localStorage.clear()
  }
}
