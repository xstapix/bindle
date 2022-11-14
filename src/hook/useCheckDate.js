import { useSelector } from "react-redux"

export function useCheckDate() {
  const {checkIn, checkOut} = useSelector(state => state.checkDate)

  return {
    checkIn,
    checkOut
  }
}