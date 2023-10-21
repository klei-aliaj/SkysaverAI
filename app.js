async function query(data) {
    const response = await fetch(
        "https://dialogg-production.up.railway.app/api/v1/prediction/3d931954-9601-4585-af62-7a11c7cb6fb5",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );
    const result = await response.json();
    return result;
}

query({"question": "Hey, how are you?"}).then((response) => {
    console.log(response);
});