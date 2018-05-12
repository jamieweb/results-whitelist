# Google Search Results + Reddit Links Site Whitelist
A Chrome extension that highlights site links on Google/Reddit that have been whitelisted by the user.

Designed to be an anti-typosquatting/anti-phishing tool and to highlight known trusted sites.

## Changelog:

| Date | Notes |
|------|-------|
| **2018-May-12** | Added support for new Reddit site layout |
| **2017-Jun-03** | Added support for new Reddit profiles + search link format |
| **2017-Apr-04** | Added support for Reddit posts + search results |
| **2017-Mar-05** | Extension icon displays green when on whitelisted site |
| **2017-Mar-02** | Initial release |

## Installation:

1. Download the ZIP from GitHub and extract the contained folder.

2. Open the Chrome extensions manager (Settings -> More Tools -> Extensions, or chrome://extensions).

3. Enable developer mode by checking the box.

4. Click "Load Unpacked Extension" and select the extracted folder containing the extension files. If you receive a manifest not found error, check for nested folders. Sometimes extracting will cause nested folders.

## Configuration:

You can access the options page by clicking "Options" from the extensions manager, or by right clicking the extension icon at the top right of Chrome.

Enter website names into the box, one per line. This must be the full website name, including subdomains if required. Example:

    example.com
    github.com
    www.reddit.com
    
Regular expressions (regex) are not supported.
    
Click save. Now when you perform a Google search or browse Reddit, links matching those that you defined in the configuration will be highlighed in green. The extension icon in the top right will also turn green when you are currently browsing a whitelisted site.

## To-do/Ideas:

    Support for more Google sites
    (currently only .com and .co.uk, however you can easily edit the manifest.json file to add your own preferred Google site)
        
    Test in Chromium - Tested, works in Chromium
    
    Direct domain name matching (so you don't need to define subdomains)?
    
    Site blacklist (display in red)?
