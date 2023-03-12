const user = {
  name: "Aminul Islam",
  department: "Computer Science and Technology",
  id: "2217-402-130",
  roll: 130,
};
const stringified = JSON.stringify(user);
// console.log(user);
/* return
{
    name: 'Aminul Islam',
    department: 'Computer Science and Technology',
    id: '2217-402-130',
    roll: 130
} */
// console.log(stringified);
/* return
  {"name":"Aminul Islam","department":"Computer Science and Technology","id":"2217-402-130","roll":130} */
const shop = {
  owner: "Aminul Islam",
  address: {
    country: "Bangladesh",
    devesion: "Dhaka",
    zilla: "Dhaka",
    thana: "Dhanmondi",
    street: "Dhanondi 32 No. Road",
  },
  product: ["Mobile", "Yearphone", "Headphone", "Laptop", "TV", "Monitor", "PC", "Keybord", "Mouse"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};
// convert object to string object
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
// convert string object to object
const shopParse = JSON.parse(shopJSON);
console.log(shopParse);
