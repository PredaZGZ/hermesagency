const axios = require('axios');
const url = "https://mt-client-api-v1.london.agiliumtrade.ai"
const token = "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI0ODJmZjA4MjY4OTdlZjMyNDJkM2E4NjA5MTU5ZmJhZCIsInBlcm1pc3Npb25zIjpbXSwidG9rZW5JZCI6IjIwMjEwMjEzIiwiaW1wZXJzb25hdGVkIjpmYWxzZSwicmVhbFVzZXJJZCI6IjQ4MmZmMDgyNjg5N2VmMzI0MmQzYTg2MDkxNTlmYmFkIiwiaWF0IjoxNjc5NDEyMzUxfQ.ggCdtxz42OFIiJiANJwXafo7azGpW0Uq5KaxqWPXcSQAGfgdRWxMsGcOySZNkBhyP9eAVElXtnYYtm060XCUyH3-5wG00UlfwaGiNFadYuWnsTEwKMk6syzBAgI2Cm7jc_Nw_jeuF_dg6ov8luIckkXNV6vDBRPVNuxPdDQ6k77H7MUHvWokIdoQ-X_uHv3J5X-4J0RxbPeTGdl7E-dXJfjy-CJL8oHOUB_c5ftM4QnhLr5eDpE9S7KM-kpM_z4KjCdIWpRIugTavLNFMxZkMEkPAF0FkawV8mOq8EXTqW17WcTfuTa-1I96gOF8QhgaMWzfrYpJiLJ_LkoiDdrDBPW9LvRDzgRl2tbMmKHbFHVkpEMf5ASyuF7H4fhUdfe90LxgpwvR9cDwfV0w2JyLntpaMnBLk8xGvmXSNOJ3lFAcE4pLl9Kfyi_rx30dnUhDGDrPgNQe0JGRpLgVZBXQD2XJyAW-5_7V-568jnVZCvcRGYQ-XK0igURdv8C2IAx1KWtRwzBvK944GBrGKXL5do48hWOXE1_jEPuXPi1nkwbXdNBgnZCMH1fWM_vRv5wcQKz2661qDxkN_MoWbvY5AHZKKAIndnPL_leZdZAOIIRIou8rN_c_vYW-uwR2dk_0NMvWiVai5SzIvkHUyblmpEeW8mRGh7hrJTbNsM2i3Bs"
const id = "3cd09a7f-ff1a-487f-b972-1b5f8c604009"

axios.get(url + '/users/current/accounts/'+id+'/account-information', {
    headers: {
        "auth-token": token
      }
})
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response);
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });