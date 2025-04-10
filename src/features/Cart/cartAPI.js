export const fetchCount = async () => {
  try {
    const response = await fetch("http://localhost:8080")

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data 
  } catch (error) {
    console.error("Failed to fetch data:", error)
    throw error 
  }
}
