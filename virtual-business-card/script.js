function shareCard() {

    if(navigator.share){

        navigator.share({
            title:'Business Card',
            text:'Check out our business card!',
            url:window.location.href
        });

    } else {

        alert("Sharing not supported on this device");

    }
}