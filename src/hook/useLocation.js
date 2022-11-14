import { useSelector } from "react-redux"

export function useLocation() {
  const {location} = useSelector(state => state.location)

  return {
    location
  }
}