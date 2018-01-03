# [ICO-Check](https://icocheck.io/)

[ICO-Check](https://icocheck.io/) is a community-driven website that lists the latest ICOs and conducts due diligence on each one of them.            
             
With the large number of ICOs currently around, ICO-Check is an important tool that allows more transparency in the field, giving investors the confidence they need before deciding which tokens to buy.

## Requesting a new ICO background check
Create a new issue with title _company-name background check_. In the issue details provide url to the ICO website.

## Adding new checked ICO
1. Check if there exists issue to request background check for the ICO. If not, create a new one.
2. Fill the information from the [template](https://github.com/ico-check/ico-check/blob/master/.github/issue_template.md). Sample questions to ask when checking company:
    - Where is your company registered? Could i have a copy of certificate of incorporation, list of directors and details of registered office address?
    - Can i have details of any intellectual property which the company has created, registered or applied to register?
    - What is the vesting schedule for Team and Advisors token?
    - Is vesting for Team and Advisors coded in the smart contract?
    - Is your smart contract deployed for the pre-sale / ICO?
    - Was your smart contract audited by an external security company?
    - Could i have a link to your GitHub repo?
    - Do you have a working product available to test?
    - Can US investors participate in the sale? If yes did you secure Reg-D?
3. (Optional step) submit a pull request and add new entry to `_data/icos.yml`

## Changing data in a checked ICO
1. Find an issue where ICO was originally added
2. Request to reopen the issue and change fields. Provide an explanation and relevant links
3. (Optional step) change `_data/icos.yml` file and create a pull request
