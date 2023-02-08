# KPC - Front End 

<img width="698" alt="image" src="https://user-images.githubusercontent.com/93609855/217671789-38522ce8-3e9d-4c5a-8770-867ffbb4b97e.png">

## Overview 

KPC is an app used for management of the world's most glorious golf outing, the Kitchen Pass Classic, which I have had the good fortune of attending with my Father and all of his best buddies since I was a Senior in High School, and which all of my best buddies have begun attending since around the same time. 

This is the documentation for the Front End app, written on ReactJS (Version 18.2.0). It fetches data from the [Back End API](https://github.com/James-Harkins/kpc_backend) and allows users to register, log in, view the previous trips they have attended and their costs, as well as register for the next upcoming trip. Future goals for the project will be discussed at the end of this document.

## Pages

1. [HOME](#home)
2. [REGISTER](#register)
3. [LOGIN](#login)
4. [TRIPS](#trips)
5. [TRIP-REGISTER](#trip-register)

### HOME <a name="home"></a>

The `Home` page displays a looping video of drone footage of a golf course, with a title "WELCOME BACK TO THE KPC" and subtitle "It's the most wonderful time of the year," as my Father always crooned when the trip was approaching. There is a Navigation Bar at the top of the page, which has a logo on the far left that can be clicked to return to this home page, as well as a "Home" button which also redirects to this page, a "Login" button which redirects users to the `Login` page, and a "Register" button which redirects users to the `Register` page. 

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/93609855/217673942-a639fc11-e2a5-425c-b2ba-5fe9ca688683.png">


### LOGIN <a name="login"></a>

The `Login` page has a simple form for the user to fill out, requesting their `email` and `password`. It also has a link to the `Register` page at the bottom for users who have not yet created an account. If the user submits credentials that are are not authenticated in the back end, then the page refreshes and the user receives an error alert. 

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/93609855/217674257-3f44beae-5729-4133-bf52-32deef0176f3.png">


### REGISTER <a name="register"></a>

The `Register` page also has a simple form for the user to fill out, requesting all the attributes necessary to create a user in the back end. If the form is submitted with valid information, then they are redirected to the `Login` page to proceed with their credentials. There is a uniqueness validation for the `email` attribute in the back end, so if a user has already created an account with one email address, they may not create a second account with the same address. If the submission is rejected in the back end, then the page refreshes and the user receives an error alert. 

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/93609855/217674521-24d27897-4426-49f8-88ab-99ed12f14698.png">


### TRIPS <a name="trips"></a>

The `Trips` page features a new Navigation Bar at the top: the "Home", "Login" and "Register" buttons are gone, replaced with buttons for "Trips", which redirects to this page, and "Log Out", which completes a log out request to the back end and redirects the user to the `Login` page. The logo in the top left corner can still be clicked to take users to the `Home` page, where they still see this updated Navigation Bar. 

The top of this page features a title showing "Welcome back, ${firstName}". Below the title, the user either sees a button showing "Register for KPC ${nextTrip.number}", which redirects them to the `Trip-Register` page, or a subtitle showing "See you at KPC ${nextTrip.number}", depending on a boolean attribute coming from the back end called `is_registered_for_next_trip`. Below that the user sees "Your Trip History:", below which is a horizontal list of blocks of all the previous trips that they have attended, including the trip's number, year, and the user's total cost for that trip.

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/93609855/217674841-94e08a37-258e-427e-a30e-02f745c74f05.png">


### TRIP-REGISTER <a name="trip-register"></a>

This page shows a form consisting of several blocks representing each day of the next year's trip. Each block has a heading of the day and date, and then a series of checkboxes for the costs of staying at the house that night, playing golf that day, and eating the house-cooked meals, where applicable; some days have no golf, others have no meals, or no night, etc. The user submits the form at the bottom of the page, which creates a new trip for that user in the back end database, and is then redirected back to the `Trips` page, where they see that trip listed in their history, showing the total cost that they owe for that year. 

<img width="1440" alt="Screenshot 2023-02-08 at 4 32 46 PM" src="https://user-images.githubusercontent.com/93609855/217675693-30a3e120-5f60-4ea8-b8c4-193aae15e6f7.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/93609855/217675772-5d7a0ca7-d663-4c32-a31a-0518a75aaafd.png">
