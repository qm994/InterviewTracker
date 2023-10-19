# Project Intro

This project started on 09/23. Tough it has a lot functionalities achieved ex: Authentication, multiple views etc, i still decided to abondon it. If you would like to continue, feel free fork it. And if you like to integrate with firebase, then add your GoogleService-Info.plist under ios folder.

I decided to switch to SWIFT AND SWIFTUI for better ios experience.

## Stack Naivgators

#### Level 1 Screen

```http
  MainTabs <BottomTabNavigator>
```

| Component Name    | Screen Name | Is Naivgator | Description                                                                   |
| :---------------- | :---------- | :----------- | :---------------------------------------------------------------------------- |
| `HomeScreenStack` | `Home`      | `Yes`        | Its a child stack navigator containes screens in the home page                |
| `AddScreenStack`  | `Add`       | `Yes`        | Its a child stack navigator containes screens in the home page                |
| `ProfileScreen`   | `Profile`   | `No`         | Its the profile screen containes profile information and sign out options etc |

## Tech Stack

**Client:** React, React Native, React Navigation

**Server:** Firebase
