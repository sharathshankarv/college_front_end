import { useMeQuery } from "@/redux/apis/authApi";

function useWhoAmI() {
    const { data: usr, isLoading, isError } = useMeQuery();
    const user = usr?.data;

  
  return {
    user: user,
    isLoading,
    isError: isError,
  };
}

export default useWhoAmI;