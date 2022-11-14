import { useSelector } from "react-redux"

export function useSearch() {
  const {location, checkIn, checkOut, guests} = useSelector(state => state.search)

  return {
    location,
    checkIn,
    checkOut,
    guests
  }
}