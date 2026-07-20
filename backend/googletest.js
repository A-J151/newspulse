async function test() {
    try {
        const response = await fetch("https://www.google.com");
        console.log("Status:", response.status);
    } catch (err) {
        console.error(err);
    }
}

test();