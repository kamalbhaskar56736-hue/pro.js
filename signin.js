const accountdetail = {
    id1: {
        username: "kamal",
        password: "123123",
        email: "kamal@123gamil.com",
        phone: "123-456-7890",
        course: "bsc",
        collage: "abc college",
        year: 2025,
        rollno: "BCS2021001"
    },

    id2: {
        username: "smith",
        password: "5656",
        email: "smit@123gamil.com",
        phone: "987-654-3210",
        course: "bcom",
        collage: "xyz college",
        year: 2024,
        rollno: "BCOM2021002"
    },

    id3: {
        username: "mohit",
        password: "12345",
        email: "mohit@1223gamil.com",
        phone: "555-666-7777",
        course: "B.tech",
        collage: "lmn college",
        year: 2023,
        rollno: "BA2021003"
    }
};

let usernameInput = prompt("Enter your username:");
let passwordInput = prompt("Enter your password:");


for (let key in accountdetail) {
    let user = accountdetail[key];

    if (user.username === usernameInput && user.password === passwordInput) {
       
        console.log(user);
        console.log("Login successful!");

        break;

}else if( user.username !== usernameInput && user.password !== passwordInput){
      
      
        console.log("Invalid username or password.");



    };

}