const axios = require("axios");
const FormData = require('form-data')

module.exports = {
  async analyzeImageFIle(req, res) {


    const data = new FormData()
    data.append('image', req.file)

    try {
      axios({
        method: "POST",
        url:
          "https://microsoft-azure-microsoft-computer-vision-v1.p.rapidapi.com/analyze",
        headers: {
          "content-type": "multipart/form-data",
          "x-rapidapi-host":
            "microsoft-azure-microsoft-computer-vision-v1.p.rapidapi.com",
          "x-rapidapi-key": "WsaVWWXdpbmshlpn1praJs2e6L48p1ezr28jsnFoPpqVIAz1uY"
        },
        params: {
          visualfeatures: "Categories,Tags,Color,Faces,Description"
        },
        data: [
          {
            body: {
              ...data
            },
          }
        ]
      })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      return res.status(500).send({ ok: "false" });
    }
  }
};
