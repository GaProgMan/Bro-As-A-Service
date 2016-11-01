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
