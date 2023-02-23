// This is an uneffective way
// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

// const daysOfWeek = [mon, tue, wed, thu, sat, sun];

const daysOfWeek = ["mon", "tue", "wed", "thu", "sat"];

const everything = [1, 2, "Hello, World!", true, false, "Wow", 2.7, ''];

console.log(daysOfWeek, everything);

// Get item from Array
console.log(daysOfWeek[4]);

// Add one more day to the Array
daysOfWeek.push("sun");
console.log(daysOfWeek);

// Why array? -> to manage data easier. (Not to make things happen like above)

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");
console.log(toBuy);
