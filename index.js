require('dotenv').config()
const PORT = 4001;
const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const session = require('express-session');
const override = require('method-override');
const userModel = require('./models/Customer');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use(override('_method'))
app.use(session({
    secret:process.env.SessionSecret,
    resave:false,
    cookie:{secure:true},
    saveUninitialized:true
}))

app.use(express.static('public'));

app.use(layouts);
app.set('layout','./layouts/mainLayouts');
app.set('view engine','ejs');
const connectionToDB = require('./config/dbconfig');
connectionToDB();
const controllers = require('./routes/routes');
app.use('/',controllers);
app.listen(PORT,()=>console.log(`Server is running on the PORT : ${PORT}`));






// try {
//     userModel.insertMany([
//       {
//         firstName: "Raddy",
//         lastName: "NodeJs",
//         tel: 1-353-218-4881,
//         email: "raddy@outlook.couk",
//         details: "Demo details text.",
//         createdAt: Date.now(),
//         updatedAt: Date.now()
//       },
//       {
//         firstName: "Aphrodite",
//         lastName: "Parker",
//         tel: 1-857-407-8574,
//         email: "quam@protonmail.net",
//         details: "Demo details text.",
//         createdAt: Date.now(),
//         updatedAt: Date.now()
//       },
//       {
//         firstName: "Camden",
//         lastName: "Perce",
//         tel: 251-719-5886,
//         email: "aliquam.tincidunt.nunc@icloud.net",
//         details: "Demo details text.",
//         createdAt: Date.now(),
//         updatedAt: Date.now()
//       },
//       {
//         firstName: "Emi",
//         lastName: "Hutchinson",
//         tel: 1-878-674-6876,
//         email: "aenean.egestas@aol.org",
//         details: "Demo details text.",
//         createdAt: Date.now(),
//         updatedAt: Date.now()
//       },
//       {
//         firstName: "Chaim",
//         lastName: "Holland",
//         tel: 1-776-825-8236,
//         email: "a@google.couk",
//         details: "Demo details text.",
//         createdAt: Date.now(),
//         updatedAt: Date.now()
//       },
//       {
//         firstName: "Harding",
//         lastName: "Cameron",
//         tel: 1-935-750-3637,
//         email: "non.nisi@outlook.edu",
//         details: "Demo details text.",
//         createdAt: Date.now(),
//         updatedAt: Date.now()
//       },
//       {
//         firstName: "Dane",
//         lastName: "Kelley",
//         tel: 129-964-3195,
//         email: "morbi@aol.org",
//         details: "Demo details text.",
//         createdAt: Date.now(),
//         updatedAt: Date.now()
//       },
//       {
//         firstName: "Emery",
//         lastName: "Thornton",
//         tel: 565-248-4784,
//         email: "egestas.blandit.nam@icloud.org",
//         details: "Demo details text.",
//         createdAt: Date.now(),
//         updatedAt: Date.now()
//       },
//       {
//         firstName: "Tarik",
//         lastName: "Francis",
//         tel: 1-679-436-4746,
//         email: "lacus@outlook.ca",
//         details: "Demo details text.",
//         createdAt: Date.now(),
//         updatedAt: Date.now()
//       },
//             {
//         firstName: "Rebecca",
//         lastName: "Booth",
//         tel: 1-548-944-3232,
//         email: "sapien@icloud.couk",
//         details: "Demo details text.",
//         createdAt: Date.now(),
//         updatedAt: Date.now()
//       },
//       {
//         firstName: "Solomon",
//         lastName: "Larson",
//         tel: 648-588-4779,
//         email: "accumsan.interdum@icloud.net",
//         details: "Demo details text.",
//         createdAt: Date.now(),
//         updatedAt: Date.now()
//       },
//       {
//         firstName: "Tanner",
//         lastName: "Morin",
//         tel: 189-577-5612,
//         email: "nec.diam.duis@google.couk",
//         details: "Demo details text.",
//         createdAt: Date.now(),
//         updatedAt: Date.now()
//       },
//       {
//         firstName: "September",
//         lastName: "Walton",
//         tel: 1-732-422-2492,
//         email: "sed.sapien.nunc@icloud.com",
//         details: "Demo details text.",
//         createdAt: Date.now(),
//         updatedAt: Date.now()
//       },
//       {
//         firstName: "Kermit",
//         lastName: "Becker",
//         tel: 1-163-757-8638,
//         email: "id@yahoo.net",
//         details: "Demo details text.",
//         createdAt: Date.now(),
//         updatedAt: Date.now()
//       },
//       {
//         firstName: "Anish",
//         lastName: "Brown",
//         tel: 1-163-757-8638,
//         email: "Anish@yahoo.net",
//         details: "Demo details text.",
//         createdAt: Date.now(),
//         updatedAt: Date.now()
//       },
//       {
//         firstName: "Duncan",
//         lastName: "Woodard",
//         tel: 1-163-757-8638,
//         email: "Duncan@yahoo.net",
//         details: "Demo details text.",
//         createdAt: Date.now(),
//         updatedAt: Date.now()
//       },
//       {
//         firstName: "Izabella",
//         lastName: "Stark",
//         tel: 1-163-757-8638,
//         email: "Izabella@yahoo.net",
//         details: "Demo details text.",
//         createdAt: Date.now(),
//         updatedAt: Date.now()
//       },
//       {
//         firstName: "Dhruv",
//         lastName: "Fields",
//         tel: 1-163-757-8638,
//         email: "Dhruv@yahoo.net",
//         details: "Demo details text.",
//         createdAt: Date.now(),
//         updatedAt: Date.now()
//       },
//       {
//         firstName: "Harriet",
//         lastName: "Gillespie",
//         tel: 1-163-757-8638,
//         email: "Harriet@yahoo.net",
//         details: "Demo details text.",
//         createdAt: Date.now(),
//         updatedAt: Date.now()
//       },
//       {
//         firstName: "Chad",
//         lastName: "Barton",
//         tel: 1-163-757-8638,
//         email: "Chad@yahoo.net",
//         details: "Demo details text.",
//         createdAt: Date.now(),
//         updatedAt: Date.now()
//       },
//       {
//         firstName: "Esmee",
//         lastName: "Trujillo",
//         tel: 1-163-757-8638,
//         email: "Esmee@yahoo.net",
//         details: "Demo details text.",
//         createdAt: Date.now(),
//         updatedAt: Date.now()
//       },
//     ]);
//   } catch (error) {
//     console.log("err", + error.message);
// }