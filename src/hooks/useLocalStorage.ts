export const useLocalStorage = (key: string) => {
  const value = localStorage.getItem(key)
  return { key, value }
}
