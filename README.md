## Requesting a new ICO background check
Create a new issue with title _company-name background check_. In the issue details provide url to the ICO website.

## Adding new checked ICO
1. Check if there exists issue to request background check for the ICO. If not, create a new one.
2. Add new company info to `_data/icos.yml`
3. How to check necessary fields:

| Real team                      | GitHub          | Smart Contract                | MVP                                        | Vesting    | Have a company                                                                                      | Location                             | Comments                                      | Date                        | Safe                                                                                                                  |
| ------------------------------ | --------------- | ----------------------------- | ------------------------------------------ | ---------- | --------------------------------------------------------------------------------------------------- | ------------------------------------ | --------------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| LinkedIn, press mentions, etc. | Company website | e.g. Etherscan if on Ethereum | Information on Company website, whitepaper | Whitepaper | Whitepaper, website, terms and conditions. Then check company registration in corresponding country | Place where most members are located | Additional remarks, provide links if possible | Whitepaper, comapny website | How would regular VC evaluate this project? Most of the cases if any field before this is "red" this will also be red |
4. In the pull request description provide explanation for all the fields according to the provided template.
5. Create pull request. One of the maintainers will verify it

## Changing data in a checked ICO
1. Find an issue where ICO was originally added
2. Request to reopen the issue and change fields. Provide an explanation and relevant links
3. Change `_data/icos.yml` file and create a pull request
