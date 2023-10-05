function insertName() {
    const name = document.getElementById("nameInput").value;
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const image = document.getElementById("image");

    // Set canvas dimensions to match the image
    canvas.width = image.width;
    canvas.height = image.height;

    // Draw the image onto the canvas
    ctx.drawImage(image, 0, 0);

    // Set text style for the name
    ctx.font = "75px Lucida Bright";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";

    // Calculate the position for the name text
    const x = 1350;
    const y = 760;

    // Draw the name onto the canvas
    ctx.fillText(name, x, y);

    // Convert the canvas to a data URL
    const dataURL = canvas.toDataURL("image/jpeg");

    // Update the download link
    const downloadLink = document.getElementById("downloadLink");
    downloadLink.href = dataURL;
    downloadLink.style.display = "block";
}

