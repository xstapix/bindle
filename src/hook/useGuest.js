import { useSelector } from "react-redux"

export function useGuest() {
  const {adults, children, rooms} = useSelector(state => state.guest)

  return {
    adults,
    children,
    rooms
  }
}