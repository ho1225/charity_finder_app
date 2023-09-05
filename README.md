# A charity finder app using React + TypeScript + Vite + Bootstrap
Create a web application that allows users to search for charities, view detailed information
about each charity, and save their favorite charities. This application will be built with React and
utilize the Every.org API for data fetching.


1. Home Page: This is the first page users will see. It will contain the Search component at
the top, followed by the CharityList component displaying either the search results or
some default charities if no search has been performed yet.  
![image](https://github.com/ho1225/charity_finder_app/assets/56968144/20741a6c-eeff-4551-ad24-c51ae1a1a5b3)
![image](https://github.com/ho1225/charity_finder_app/assets/56968144/c0091d79-e94c-43b3-b5a4-523129a91470)  


2. Charity Detail Page: When a user clicks on a specific charity from the CharityList
component, they will be navigated to this page. This page will use the CharityDetail
component to display detailed information about the selected charity.  
![image](https://github.com/ho1225/charity_finder_app/assets/56968144/8958d810-c482-4244-8ac1-984657927667)

3. Favorites Page: This page will list all the user&#39;s favorite charities. The FavoriteCharities
component will be used here to display this list.
![image](https://github.com/ho1225/charity_finder_app/assets/56968144/8584a228-3cfe-431b-a31d-59268af5a614)




## Prerequisites

Before you begin, ensure you have the following dependencies installed:

- [Node.js](https://nodejs.org) - Make sure you have Node.js installed.
- [npm](https://www.npmjs.com/) - npm is needed to manage packages.

## Installation

Clone this repository to your local machine using:
```bash
git clone https://github.com/ho1225/charity_finder_app.git
```

Navigate to the project directory:
```bash
cd charity_finder_app
```

Install the required packages:
```bash
npm install
```
## Usage
Run the development server:
```bash
npm run dev
```
Open your browser and go to http://localhost:5173 to use the app.
