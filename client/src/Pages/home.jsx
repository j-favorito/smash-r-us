import React from "react";
import Heading from "../Components/heading"
import Amplify from '@aws-amplify/core';
import awsExports from '../aws-exports';
import { DataStore } from '@aws-amplify/datastore';
import { Users } from '../models/index.js';

function Home() {

    const saveUser = async () => {
        try {
            Amplify.configure(awsExports);
            await DataStore.save(
                new Users({
                    "username": "Lorem ipsum dolor sit amet",
                    "portrait": "Lorem ipsum dolor sit amet",
                    "wins": 5,
                    "losses": 10
                })
            );
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <Heading />
            <button onClick={saveUser} >Click ME!</button>
        </div>
    )

}

export default Home;