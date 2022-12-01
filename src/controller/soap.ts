const soap = require("soap");
const url = "http://localhost:9999/subscription?wsdl";

export const acceptSubscribe = (req, res) => {
  var args = {
    arg0: req.body.creator_id,
    arg1: req.body.subscriber_id,
    arg2: "ACCEPTED",
  };

  soap.createClient(url, {}, function (err, client) {
    client.updateSubscription(args, function (err, result) {
      if (err) {
        res.status(400).json({ msg: "failed" });
      }
      console.log(result);
      res.status(200).json({ msg: "success" });
    });
  });
};

export const rejectSubscribe = (req, res) => {
  var args = {
    arg0: req.body.creator_id,
    arg1: req.body.subscriber_id,
    arg2: "REJECTED",
  };

  soap.createClient(url, {}, function (err, client) {
    client.updateSubscription(args, function (err, result) {
      if (err) {
        res.status(400).json({ msg: "failed" });
      }
      console.log(result);
      res.status(200).json({ msg: "success" });
    });
  });
};
