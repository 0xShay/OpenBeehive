
// [ ORIGINAL SLOGANS ]
let slogans = [
    "It's Beehive but better!",
    "Don't need to borrow a laptop anymore to check your assignments!",
    "Now open-source!"
];

// [ EXAM SEASON SLOGANS ]
[
    "Short-term pain -> long-term gain",
    "Does someone smell burning toast?"
].forEach(s => {
    slogans.append(s);
});

document.getElementById("slogan").innerHTML = slogans[Math.floor(Math.random() * slogans.length)];
