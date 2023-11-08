import * as fs from 'node:fs';
export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
     //   res.status(200).json(req.body);
     let data = await fs.promises.readdir('contactdata');
      // console.log(typeof(req.body))
      fs.promises.writeFile(`contactdata/${data.length+1}.json`,JSON.stringify(req.body),()=>{})
    } else {
      // Handle any other HTTP method
      res.status(200).json(["allblog"]);
    }
  }