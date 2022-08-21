function uniqueEmail(emails) {
  let getLocal, getDomain;
  for (let email of emails) {
    getLocal = email.split("@")[0];
    getDomain = email.split("@")[1];
    console.log(getLocal);
    console.log(getDomain);

    getLocal = email.replace(/\+.*$|\./g, "");
  }
  return new Set(`${getLocal}@${getDomain}`).size;
}

console.log(
  uniqueEmail([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);
