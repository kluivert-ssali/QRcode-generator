if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service.js").then(registration => {
        console.log("SW Registered!");
        console.log(registration);
    }).catch(error => {
        console.log("SW registration Failed!");
        console.log(error);
    });

}