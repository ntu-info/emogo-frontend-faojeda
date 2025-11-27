[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/1M59WghA)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=21774716&assignment_repo_type=AssignmentRepo)
# Expo Router Minimal Working Example

This is a very small Expo project using **expo-router** with:

- A root `Stack` layout
- A `(tabs)` group using `Tabs`
- A `details` screen pushed on top of the tab stack
- `Link` components and `useRouter` for navigation

## How to run

1. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

2. Start the dev server:

   ```bash
   npx expo start --tunnel
   ```

3. Open the app on a device or emulator using the Expo dev tools.

## Local export server (for automated repo exports)

This project includes a tiny Node export server that writes posted JSON into the repo `data/` folder. It's useful during development or when you want the app to push exported data into the repository (for grading or archival).

How it works
- The app POSTs the current core memories array to `http://localhost:3333/export/core-memories` every time a memory is saved.
- A local Node script receives that POST and writes `data/core_memories.json` (creating `data/` if necessary).

Run the export server locally (in a separate terminal):

```bash
# from repo root
npm run export-server
```

Check `data/core_memories.json` after saving memories in the app.

Notes:
- On physical devices you may need to point the app to your machine IP instead of `localhost` (e.g. `http://192.168.1.100:3333`).
- The server is intentionally simple and meant for local/dev use only. Do not expose it publicly without adding auth.

## Building a preview dev build with EAS (for sharing installs)

Follow Expo's documentation to configure a development build with EAS (run `eas build:configure` first). Then build a preview build for distribution:

- For Android preview build (recommended for sharing/installing):

```bash
eas build --platform android --profile preview
```

- For iOS you can do a preview build as well (requires Apple credentials/config):

```bash
eas build --platform ios --profile preview
```

When the build finishes on Expo's website you'll see an **Install** button and a shareable link like `https://expo.dev/accounts/<your-account>/projects/<your-project>/builds/<id>`. Put that link in your repository `README.md` so graders (Tren & TAs) can install the preview build.

Deployment note for homework
- The assignment asks you to include the expo.dev build link in the `README.md`. After your build completes, paste the link under a short header called **Preview build (for graders)**.

## Preview build (for graders)

Paste the expo.dev preview build install link here (the one you get from the Expo dashboard after a preview build finishes):

https://expo.dev/…YOUR-PREVIEW-BUILD-LINK-HERE

Preview build (install link):

https://expo.dev/accounts/faojeda1/projects/expo-router-mwe/builds/09db155b-388c-40bb-a5b2-1ada1c42a2db



## Tests

Run unit tests (we added a small test for the memory helper):

1. Install dependencies (if you haven't already):

```bash
npm install
# or yarn
```

2. Run tests:

```bash
npm test
```

Note: This project adds `@react-native-async-storage/async-storage` and basic Jest config for native component testing. If you run into environment issues, ensure you have the usual React Native testing setup or run tests in a Node environment that supports the packages.
