import { Amplify } from 'aws-amplify';
import { signUp, confirmSignUp, resendSignUpCode, signIn } from 'aws-amplify/auth';
import awsmobile from '../../../../../client/src/aws-exports.js';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../../../../client/src/graphql/mutations.js';
import readlineSync from 'readline-sync';

Amplify.configure(awsmobile);
const client = generateClient({authMode: 'userPool'});


async function signupAndVerifyUsers() {
  //Prompt the User for their credentials
  const role = "ADMIN"
  const email = readlineSync.question("Enter email: ");
  var password = readlineSync.question("Enter password (at least 8 characters): ", { hideEchoBack: true });
  const username = email;

  // //Ensure the password has at least 8 characters before signing up the user
  while (password.length<8) {
    password = readlineSync.question("Enter a valid password (at least 8 characters): ", { hideEchoBack: true });
  }

  let signUpResponse = null;
  try {
    // Attempt to sign up the user
    signUpResponse = await signUp({
      username: username,
      password: password,
      options: {
        userAttributes: {
          email: email,
          'custom:role': role // This is used for the post confirmation trigger to add the user to a cognito group
        }
      }
    });
    
    //Provide User with response
    console.log("Signup response is: ", signUpResponse);
    console.log(`User signed up: ${username}`);
    console.log(`Please check your email (${email}) to verify your account.`);

    // Prompt user to input verification code
    const verificationCode = readlineSync.question("Please enter the verification code sent to your email:");

    console.log("confirmation code is", verificationCode);

    // Confirm the signup with the verification code
    const confirmSignUpResponse = await confirmSignUp({ username: username, confirmationCode: verificationCode });

    console.log("Confirm signup response is: ", confirmSignUpResponse);
    console.log(`User ${username} verified.`);
  } catch (error) {
    // If user already exists, resend confirmation code
    console.log("Error: ", error.name)
    if (error.name === 'UsernameExistsException') {
      console.log(`User ${username} is already signed up. Resending confirmation code.`);
      try {
        const resendResponse = await resendSignUpCode({ email: email });
        console.log("Resend response is: ", resendResponse)
        console.log(`Confirmation code resent to ${email}.`);

        // Prompt user for confirmation
        const confirmResend = readlineSync.question("Do you want to enter the confirmation code now? (yes/no): ");
        if (confirmResend.toLowerCase() === 'yes') {
          // Prompt user to input verification code
          const verificationCode = readlineSync.question("Please enter the verification code sent to your email:");

          // Confirm the signup with the verification code
          const confirmSignUpResponse = await confirmSignUp({ username: username, confirmationCode: verificationCode });

          console.log("Confirm signup response is: ", confirmSignUpResponse);
          console.log(`User ${username} verified.`);
        }
      } catch (resendError) {
        console.error(`Error resending confirmation code to ${email}:`, resendError);
      }
    } else {
      console.error(`Error signing up and verifying user: ${username}`, error);
    }
  }
  
  //API
  try {
    console.log("Signing in cognito....");
    const signInResponse = await signIn({
      username: username,
      password: password
    });

    console.log("Signin response is: ", signInResponse);
    console.log(`Signed in Cognito user: ${username}`);

    console.log("Creating Application Admin User....");
    
    const result = await client.graphql({
      query: mutations.createUser.replaceAll("__typename", ""),
      variables: {
        input: {
          id: signUpResponse.userId,
          username: username,
          email: username,
          role: role
        }
      },
    });

    console.log(`${username} created in GraphQL:`, result.data.createUser);
  } catch (error) {
    console.error(`Error signing in and querying user: ${username}`, error);
  }
}

signupAndVerifyUsers();
