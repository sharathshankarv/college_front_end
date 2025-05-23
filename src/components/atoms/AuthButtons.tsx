import { useAppSelector } from '@/hooks';
import { useLogoutMutation } from "@/redux/apis/authApi";
import { isAuthenticated } from '@/redux/slices/authSlice';


interface AuthButtonsProps {
  authHandler: (val: boolean) => void;
}

const AuthButtons = ({ authHandler }: AuthButtonsProps) => {
  const isUserAuthenticated = useAppSelector(isAuthenticated);
  const [logout] =  useLogoutMutation();

  const logoutHandler = () => {
    authHandler(false);
    logout()
  };

  return (
    <div className="text-end">
      {!isUserAuthenticated && (
        <button
          type="button"
          onClick={() => authHandler(true)}
          className="btn btn-outline-light me-2"
        >
          Login
        </button>
      )}
      {isUserAuthenticated && (
        <button
          type="button"
          onClick={logoutHandler}
          className="btn btn-outline-light me-2"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default AuthButtons;
