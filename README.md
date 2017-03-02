# Google Search Results Site Whitelist
Chrome extension that highlights sites in Google search results that have been whitelisted by the user.

Designed to be an anti-typosquatting tool and to highlight known trusted sites.

## Installation

1. Download the ZIP from GitHub and extract the contained folder.

2. Open the Chrome extensions manager (Settings -> More Tools -> Extensions, or chrome://extensions).

3. Enable developer mode by checking the box.

4. Click "Load Unpacked Extension" and select the extracted folder containing the extension files. If you receive a manifest not found error, check for nested folders. Sometimes extracting will cause nested folders.

## Configuration

You can access the options page by clicking "Options" from the extensions manager, or by right clicking the extension icon at the top right of Chrome.

Enter website names into the box, one per line. This must be the full website name, including subdomains if required. Example:

    example.com
    github.com
    www.reddit.com
    
Click save. Now when you perform a Google search, search results matching those that you defined in the configuration will be highlighed in green.

## To-do/Ideas

    Support for more Google sites (currently only .com and .co.uk, however you can easily edit the manifest.json to add your own preferred Google site)
    Direct domain name matching (so you don't need to define subdomains)
    
    Site blacklist (display in red)?
