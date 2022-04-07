const slogans = [
    "It's Beehive but better!",
    "No more having to guess your homework from half the title...",
    "Don't need to borrow a laptop anymore to check your assignments!",
    "Say no to infinite loading.",
    "'There was a problem loading the news feed.'",
    "'<i>undefined</i> is not an object'",
    "Now open-source!"
];
document.getElementById("slogan").innerHTML = slogans[Math.floor(Math.random() * slogans.length)];
