import { NextLayoutComponentType } from "next";
import React from "react";
import Layout from "../layouts/Layout";

interface userProfileProps { }

const userProfile: NextLayoutComponentType<userProfileProps> = ({ }) => {
    return (
        <div>user profile page</div>
    );
};

userProfile.getLayout = (page) => <Layout layoutType="Default">{page}</Layout>;

export default userProfile