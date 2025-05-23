import CommonModal from "./Modal";

interface LoginHeaderProps {
  isModal?: boolean;
}

const LoginHeader = ({ isModal = false }: LoginHeaderProps) => {
  return (
    <>
      {isModal ? (
        <CommonModal.Heading>
          <h3>Login</h3>
        </CommonModal.Heading>
      ) : (<>
        <h3 className="text-center">Login</h3>
        <p>You are trying to access a page which needs your login. So please login.</p></>
      )}
    </>
  );
};

export default LoginHeader;
