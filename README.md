# Orenji React Native Mobile

![logo](./docs/pictures/logo-w-slogan.png)  

Project ini adalah versi mobile dari web mama recipe, Mama Recipe adalah website untuk melihat, membuat, dan membagikan resep.

Developer : Rizqi Pratama  
Tech Stack : Javascript, React Native, React Native Navigation, Firebase Cloud Messaging (Client), Redux  
Versi Web : <https://recipes-web-fe.vercel.app>  
Debug APK : <https://github.com/rizqikazukun/orenji-native-mobile/releases/tag/debug-preview>

> Note : versi apk merupakan versi release debug, kemungkinan tidak akan terinstall di beberapa perangkat atau butuh mengijinkan settingan menginstall aplikasi dari luar playstore.

## Table Of Content

- [Orenji React Native Mobile](#orenji-react-native-mobile)
  - [Table Of Content](#table-of-content)
  - [Screenshoot](#screenshoot)
  - [How to run \& Build](#how-to-run--build)
  - [Releated Project](#releated-project)

## Screenshoot

![overview](./docs/pictures/githubss.png)

## How to run & Build

1. Setup the environment  
   > This built using React Native 0.72, follow [this link](https://reactnative.dev/docs/0.72/environment-setup?guide=native&platform=android), to see the setup.  
   > Please Use [JDK 17](https://www.oracle.com/java/technologies/downloads/#java17) to run and build the app.

2. Setup the Backend  
   > Goto [this repo](https://github.com/rizqikazukun/mama-recipe-web-be) for the backend.  
   > then put the backend URL into ``./src/config/index.js`` file

3. Setup Firebase (For App Notification).
   > then put the ``google-services.json`` into ``/android/app/{put-here}``  
   > I am not provide this because it's credential.

4. Then follow command below to run

   ```shell
   yarn install   # this is for installing the dependencies.
   yarn start     # run with this command after then follow 
                  # instruction that appear on the terminal
   ```

## Releated Project

- [✨ Download APK](https://github.com/rizqikazukun/orenji-native-mobile/releases/tag/debug-preview)
- [✨ Orenji React Native Mobile](https://github.com/rizqikazukun/orenji-native-mobile)
- [✨ Mama Recipe Web Frontend](https://github.com/Team-A-Pijarcamp-Batch-15/recipes-web-fe)
- [✨ Mama Recipe Web Backend](https://github.com/Team-A-Pijarcamp-Batch-15/receipes-web-be)
