module.exports = {
  async anaalyzeImageFIle(req, res) {
    try {
      return res.status(200).send({ ok: "teste" });
    } catch (error) {
      return res.status(500).send({ ok: "false" });
    }
  }
};
