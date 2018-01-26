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
    - is your smart contract deployed for the ICO?
    - Was your smart contract audited by an independent cybersecurity company?
    - Could i have a link to your GitHub repo?
    - Do you have a working product available to test?
    - Has the code for your product been published, and has is it been audited by an independent cybersecurity company?
    - Are you using a reputable 3rd party for KYC verification? How safe is it to upload my Identity Document on your site?
    - Can US investors participate in the sale? If yes did you secure Reg-D?
3. Additional questions to ask:
   - Where is my money going and what will it be used for?  Is my money going to be used to "cash out" others?
   - What specific rights come with my investment?
   - Are there financial statements?  If so, are they audited, and by whom?
   - How, when, and at what cost can I sell my investment?  For example, do I have a right to give the token or coin back to the company or to receive a refund?  Can I resell the coin or token, and if so, are there any limitations on my ability to resell?
   - If a digital wallet is involved, what happens if I lose the key?  Will I still have access to my investment?
   - Has the offering been structured to comply with the securities laws and, if not, what implications will that have for the stability of the enterprise and the value of my investment?
   - What legal protections may or may not be available in the event of fraud, a hack, malware, or a downturn in business prospects?  Who will be responsible for refunding my investment if something goes wrong?
   - If I do have legal rights, can I effectively enforce them and will there be adequate funds to compensate me if my rights are violated?

4. (Optional step) submit a pull request and add new entry to `_data/icos.yml`

## Changing data in a checked ICO
1. Find an issue where ICO was originally added
2. Request to reopen the issue and change fields. Provide an explanation and relevant links
3. (Optional step) change `_data/icos.yml` file and create a pull request
