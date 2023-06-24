import { React, useEffect, useState } from "react";
import Header from "../Header/Header";
import ProfileUser from "../ProfileUser/ProfileUser";

import "./Profile.css";

const Profile = ({ isAccordionOpen, onClickAccordion }) => {
  return (
    <>
      <Header
        isAccordionOpen={isAccordionOpen}
        onClickAccordion={onClickAccordion}
      />
      <main className="profile">
        <ProfileUser />
      </main>
    </>
  );
};

export default Profile;
