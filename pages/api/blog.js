// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'node:fs';

export default async function handler(req, res) {
  let data = await fs.promises.readdir('blogdata')
  // data.forEach((item)=>{
    //   console.log(item)
    // })
    let allblog = [];
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      // console.log(item);
      let myfile = await fs.promises.readFile(('blogdata/'+item), 'utf-8')
      allblog.push(JSON.parse(myfile));
      // console.log(allblog)
      
    }
    res.status(200).json(allblog)
  }
