# Instagram Clone: Expo, Supabase, Cloudinary

In this tutorial, we will build an Instagram clone using:

- React Native
- Expo
- Expo Router
- Nativewind
- Supabase
- [**Cloudinary**](https://cld.media/notjustdev)

You'll learn to set up a new project with Expo, create the UI, handle backend functionalities with Supabase, and optimize media storage with Cloudinary. 

Let's get started 🔥

# Setup the project

### Create a new project

- [ ]  Initialise a new app

```bash
npx create-expo-app@latest Instagram --tamplate
```

### Expo Router

[Install Expo Router](https://docs.expo.dev/router/installation/#manual-installation)

- [ ]  Install Expo Router
- [ ]  Create the Home page
- [ ]  Setup the Root Layout
- [ ]  Setup the Tab Navigator with 3 tabs (Home, New, Profile)
- Tab bar config with icons:
    
    ```jsx
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'For you',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="new"
        options={{
          title: 'New post',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus-square-o" color={color} />,
        }}
      />
    
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />
    </Tabs>
    ```
    

### Nativewind

[Expo Router | NativeWind](https://www.nativewind.dev/v4/getting-started/expo-router)

- [ ]  Setup Nativewind

# User Interface

## Home screen - Feed

- [ ]  Download dummy data and add it to `asstes/data/posts.json`
    
    [posts.json](https://prod-files-secure.s3.us-west-2.amazonaws.com/dd86c3cc-2d0e-4342-9493-40201a875875/efa7b56f-2704-487a-950b-c23a6c46b185/posts.json)
    
- [ ]  Post UI
- [ ]  Flat List
- [ ]  Post List Item Custom component

![simulator_screenshot_2A1F5284-1FFF-4C26-AA74-90EEA2AD6DCE.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dd86c3cc-2d0e-4342-9493-40201a875875/9e06441a-c701-43b1-a585-b3827e17ca9a/simulator_screenshot_2A1F5284-1FFF-4C26-AA74-90EEA2AD6DCE.png)

- Icons
    
    ```jsx
     {/* Icons */}
      <View className="flex-row gap-3">
        <AntDesign name="hearto" size={20} />
        <Ionicons name="chatbubble-outline" size={20} />
        <Feather name="send" size={20} />
    
        <Feather name="bookmark" size={20} className="ml-auto" />
      </View>
    ```
    

## New post page

- [ ]  UI
    - [ ]  Image
    - [ ]  Text Input
    - [ ]  Button
- [ ]  Image Picker

[ImagePicker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)

![simulator_screenshot_7C363A9F-670C-4B5C-8EB7-307EDE38C2AA.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dd86c3cc-2d0e-4342-9493-40201a875875/4e565c92-2fb1-4465-95d4-2b769f31f362/simulator_screenshot_7C363A9F-670C-4B5C-8EB7-307EDE38C2AA.png)

## Update profile screen

- [ ]  UI for the Update profile screen
    - [ ]  Image Picker
    - [ ]  Form
    - [ ]  Buttons
    

![simulator_screenshot_600CAA0C-A8EC-42BF-8040-8FF84C4B83A1.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dd86c3cc-2d0e-4342-9493-40201a875875/f77a5796-39dc-4594-89f9-779df768852b/simulator_screenshot_600CAA0C-A8EC-42BF-8040-8FF84C4B83A1.png)

# Cloudinary

- [ ]  Create a **Cloudinary** Account

[Improve performance of your e-commerce with Cloudinary](https://t.co/ktRcFczQVg)

- [ ]  Setup **Cloudinary** in React Native

[React Native SDK | Cloudinary](https://t.co/8zR1ZjqT8Y)

- [ ]  Render optimised imaged
- [ ]  Upload images to Cloudinary
- Troubleshooting
    - No API key error when uploading
        - Create an unsigend profile and specify it in the options of the upload
    - File size too large for the free plan
        - decrease quality

# Backend

For the Authentication, Database and API Layers we will use [**Supabase**](https://supabase.com/).

## Setup Supabase

[Build a User Management App with Expo React Native | Supabase Docs](https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native)

- [ ]  Create a new project
- [ ]  Setup the database based on **User Management Starter**
- [ ]  Install supabase in React Native
- [ ]  Setup the supabase client with it’s keys

## Auth

- [ ]  Authentication screen
- [ ]  Sign up
- [ ]  Sign in
- [ ]  Sign out
- [ ]  Auth Context
- [ ]  Protected screens

## Database

- [ ]  Posts database
- [ ]  Create posts
- [ ]  Read posts

# Part 2

Goals:

- Update profile
- Videos
- Likes
- Push Notifications

Improvements:

- Loading states when uploading a post
- Fallback avatar, username
- Expo image

## Push Notifications

[Push notifications setup](https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid)

