import React from "react";
import Address from "./Address";
import AddressForm from "./AddressForm";

const UserProfile = () => {
  return (
    <div>
      <h1>Account</h1>
      <div>
        <button>Profile</button>
        <AddressForm />
      </div>
    </div>
  );
};

export default UserProfile;
