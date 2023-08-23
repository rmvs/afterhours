<p align="center">
  <picture>
    <img src="public/logo.svg" alt="afterhours"/>
  </picture>
</p>

##

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Set up Cloud Firestore](#set-up-cloud-firestore)
- [Project Structure](#project-structure)

## Getting Started

You need latest [Node.js](https://nodejs.org/en).

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/rbanta1242/afterhours.git
   cd afterhours
   ```
2. Install dependencies:
   ```sh
   npm i
   ```

### Usage
   ```sh
   npm start
   ```

### Set up Cloud Firestore

This project uses [Google Cloud Firestore](https://cloud.google.com/firestore?hl=pt-br) to save user data.

Follow these steps to get started with Google Cloud Firestore:

1. **Create a Gmail Account:**

   If you don't have a Gmail account, create one [here](https://gmail.com/).

2. **Access Google Firebase Console:**

   Log in to the [Google Firebase Console](https://console.firebase.google.com/) using your Gmail account.

3. **Create a Project:**

   Within the Firebase Console, create a new project under the free tier plan.

4. **Register Your Web App:**
   - In the Firebase Console, navigate to "Project Configuration" and select "Your apps."
   - Register your web app and note down the credentials displayed after registration.

5. **Set Up Firestore Database:**
   - In the Firebase Console, go to Firestore Database.
   - Create a new database and configure the security rules. Use the following [security rule](https://firebase.google.com/docs/firestore/security/get-started) as an example:

   ```sh
   match /users/{documents=*} {
       allow read, write: if true;
   }
6. **Create an .env file in the project root directory and set the environment variables:**

```sh
REACT_APP_FIREBASE_API_KEY= <api key>
REACT_APP_FIREBASE_AUTH_DOMAIN= <auth key>
REACT_APP_FIREBASE_PROJECT_ID= <project id>
REACT_APP_FIREBASE_STORAGE_BUCKET= <storage bucket uri>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID= <messaging sender id>
REACT_APP_FIREBASE_APP_ID= <app id>
REACT_APP_SECRET_KEY= <app secret key>
```

### Project Structure

- [src](./src) - This folder contains the source code of the application. You can modify the entrypoint component file [App.tsx](./src/App.tsx) according to your needs.
- [public](./public) - Store any additional assets, such as images and stylesheets, in this directory.

---
Design created by [Elevated](https://www.weareelevated.co/)