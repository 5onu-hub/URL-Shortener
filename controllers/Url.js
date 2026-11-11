
const {urlModel} = require("../models/Url");

async function handleGenerateShortURL(req, res) {
  try {
    const { nanoid } = await import("nanoid");
    const shortID = nanoid(12);
    const body = req.body;
    if (!body.url) {
      return res.status(400).json({ err: "All fields are reqired compulsurry..." });
    }
    await urlModel.create({
      shortId: shortID,
      originalUrl: body.url,
      visitedHistory: [],
    });
      return res.status(201).json({
    msg: "shortID is created successfully...",
    shortID: shortID,
  });
  } catch (err) {
    return res.status(500).json({
      msg: "something went wrong...",
      err: err,
    });
  }

}

async function getShortID(req,res){
    try{
        const shortId=req.params.shortId
    const entry=await urlModel.findOneAndUpdate(
        {
            shortId:shortId
        },

        {
            $push:{
                visitedHistory:{timestamp:new Date()},
            },
        },
        {
             returnDocument: "after"
        }
    )
    if(!entry){
        return res.status(404).json({
            msg:"URL not found..."
        })
    }
    return res.redirect(entry.originalUrl)
    }
    catch(err){
        return res.status(500).json({
            msg:"something went wrong..."
        })
    }
}

async function handleGetAnalytics(req,res){
    const shortId=req.params.shortId
    const result=await urlModel.findOne({shortId})
    return res.status(200).json({
        totalClicks:result.visitedHistory.length,
        visitedHistory:result.visitedHistory
    })
}
module.exports = { handleGenerateShortURL,getShortID,handleGetAnalytics };
