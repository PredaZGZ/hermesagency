const axios = require('axios');
const url = "https://mt-client-api-v1.london.agiliumtrade.ai"
const token = "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI5NDM2ZDRmMzRmN2M1MGJiZmYxM2QxODZlMzJmZGI0NiIsInBlcm1pc3Npb25zIjpbXSwidG9rZW5JZCI6IjIwMjEwMjEzIiwiaW1wZXJzb25hdGVkIjpmYWxzZSwicmVhbFVzZXJJZCI6Ijk0MzZkNGYzNGY3YzUwYmJmZjEzZDE4NmUzMmZkYjQ2IiwiaWF0IjoxNjc5NzU0MzY5fQ.UVB5Zi96wvTYRFqwJNmQ4gupg7ykXdTV03-3gVNojAEaODAAit--qdixvV3HsInNQrlN_wcWKnrPLHfRq99PaS1vxXMgXVMFmDY_xgTd5tAkosGEdFo_qRJN2e68yLccu5AxuaQMCdgr1pS6peUSY8FTjMeTFUIwLaSSMYF9SaRnSfCM6b5dHR4UyXr9vjTyJepDP1ydz-ERcGEm8rubrKodHHwc8AGMI3Uutw-Nilp6_ebSD75rMgAd2GD3eRDLXzqlFF91HR-dqfUTdm6WyzzkXz3I2vLOOBX8HjEL1rEcuUDdPFhkWxo8wOF8QtQ1ZeENPnDFz_5P7Omkc3QrHMyGLa2arkXsDbLHPt7GTyWEF4SB5XqAHzketu7iw0W51Tuj3x6rtoMeroSZxHS7kJZody5QDIcG_4zIyTNUWV6pGiJM7Nj4h1iuFb8nvdcn_imkHeygxH_gDc7Xqm6yWeTchHPx09MLnGGKa60YOmmbvyNbtjleNQlSRPC9T6FKtjdphpMDZYUXGqsYq6MR1AKs3OnIuwjk0ro0Z9DhkXoIdFSvhhMc0CEogf_bmFXvmvPohpRK2kNe6Z8tpFh0xXZ7Qn7nWtx1WcYgOF6N2S9X5QWU0DNLpYwMTDpSLObJNwRjJ6E_-PnjVn-9sa6M7j3CJE_MDE4ZIYKtD_FsG_k"
const id = "cd9934db-a054-427b-9ca9-4c1ef21e7a05"

axios.get(url + '/users/current/accounts/'+id+'/account-information', {
    headers: {
        "auth-token": token
      }
})
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });