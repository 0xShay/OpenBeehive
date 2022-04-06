// log out
let logoutUser = async () => {

    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    alert("Logged out.");
    window.location.replace("login");

};