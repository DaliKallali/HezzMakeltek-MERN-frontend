import { useAuth0 } from "@auth0/auth0-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import LoadingButton from "./LoadingButton";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import ProfileForm, { UserFormData } from "@/forms/profile-form/ProfileForm";
import { useGetMyUser } from "@/api/MyUserApi";

type Props = {
  onCheckout: (userFormData: UserFormData) => void;
  disabled: boolean;
  isLoading: boolean;
};

const CheckoutButton = ({ onCheckout, disabled, isLoading }: Props) => {
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    loginWithRedirect,
  } = useAuth0();

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleCheckout = (userFormData: UserFormData) => {
    onCheckout(userFormData);
    navigate("/order-status");
  };
  const { currentUser, isLoading: isGetUserLoading } = useGetMyUser();

  const onLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
      },
    });
  };

  if (!isAuthenticated) {
    return (
      <Button onClick={onLogin} className="bg-rose-600 flex-1">
        Log in to check out
      </Button>
    );
  }

  if (isAuthLoading || !currentUser || isLoading) {
    return <LoadingButton />;
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={disabled} className="bg-rose-600 flex-1">
          Go to checkout
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md:min-w-[700px] bg-gray-50">
        <ProfileForm
          currentUser={currentUser}
          onSave={handleCheckout}
          isLoading={isGetUserLoading}
          title="Confirm Deliery Details"
          buttonText="Confirm Order"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutButton;
