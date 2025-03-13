interface AuthButtonsProps {
    authHandler: (val: boolean) => void;
  
}

const AuthButtons = ({ authHandler }: AuthButtonsProps) => {
    return (
      <div className="text-end">
        <button type="button" onClick={()=>authHandler(true)} className="btn btn-outline-light me-2">Login</button>
      </div>
    );
  };
  
  export default AuthButtons;