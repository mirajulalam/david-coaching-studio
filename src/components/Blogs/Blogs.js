import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center'>React Question</h1>
            <h3>Question No1: Difference between authorization and authentication?</h3>
            <h4>Authorization</h4>
            <p>Authorization determines what resources a user can access.Authorization works through settings that are implemented and maintained by the organization.Authorization always takes place after authentication.Authorization isn't visible to or changeable by the user.</p>
            <h4>Authentication</h4>
            <p>Authentication verifies who the user is.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authentication is the first step of a good identity and access management process.Authentication is visible to and partially changeable by the user.</p>
            <h3>Question No2: Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>To use the Firebase Storage we need to authenticate a user via Firebase authentication. The default security rules require users to be authenticated. Firebase Storage is basically a powerful and simple object storage, in which you can store your files easily.</p>
            <h3>Question No3: What other services does firebase provide other than authentication?</h3>
            <p>Appwrite is a backend server for Flutter, Mobile, and Web developers. It is open-source, secure, and provides a self-hosting solution that is easy to use. It is a great open source Firebase alternative. Appwrite supports multiple SDKs, including Flutter, Web, Apple, and Android.</p>
        </div>
    );
};

export default Blogs;