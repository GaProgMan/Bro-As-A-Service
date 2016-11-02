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