# Bro As A Service - .NET Core

## Building and Running

1. Change directory to the root of the code

    `cd HiFive-Server`

1. Issue the `dotnet` restore command (this resolves all NuGet packages)

    `dotnet restore`

1. Issue the `dotnet` build command

    `dotnet build`

    This step isn't fully neccessary, but I like to do build and run as separate steps.

1. Issue the `dotnet` run command

    `dotnet run`

    This will start the Kestrel webserver, load the HiFive-Server application and tell you, via the terminal, what the url to access HiFive-Server will be. Usually this will be `http://localhost:5000`, but it may be different based on your system configuration.

## Polling the Server

There are two endpoints on the server:

1. `GET`

    This is used to initially set up the server and get the "Hey buddy! Hi 5?!" response

    Polling this method before the timeout has completed (see `POST`) will result in the server waiting until the timeout has completed before returning.

1. `POST`

   This is used to send a Hi 5 to the server.

   If the user has already sent a Hi 5 and the timeout has not completed, then they will recieve a "Can't Hi 5 right now, Bro!" message.

   A timeout is started (defaults to 30 seconds) when a Hi 5 is received. Until the timeout finishes, the user cannot sent another Hi 5.

## Known Issues

`HiFive-Server` uses a [singleton](https://en.wikipedia.org/wiki/Singleton_pattern) to store a timeout value. This timeout value is used to calculate when the next Hi 5 can be sent.

If multiple users issue a POST at the same time, then the first to be recieved will get a Hi 5 response. But the remaining users will recieve a negative response ("Can't Hi 5 right now, Bro!") and their Hi 5 button will never become active.

## TODO

1. Better multi connection support

   If more than one user connects, then they are unaware whether they can Hi 5 correctly, as the initial message isn't sent out correctly.

   Path for this execution is:
     - User A connects and "BROOOOO!" is displayed along with an active button
     - User A clicks "Give Hi5" (sends a POST)
     - User A recieves "YEAAAAH WOOOOOH!!!"
     - User B connects and "BROOOOO!" is displayed along with an active button
     - User B clicks "Give Hi 5" (sends POST)
     - User B recieves "Can't Hi 5 right now, Bro!" and button is disabled
     - User B never recieves an active button after the timeout

Could get around this by returning a bool along with the message, indicating whether the response was a positive or negative. If a positive result: process as normal; but if a negative result: potentially call the GET method?