const COD_OK = "OK";
const COD_ERR = "ERROR";

const sendResponse = (res, code, status, message, data = null) => {
    return res.status(status).json({ code, status, message, data });
};

module.exports = { sendResponse, COD_OK, COD_ERR };
