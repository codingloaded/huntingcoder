import React, { useEffect, useState } from 'react';
import styles from "@/styles/Bloglist.module.css";
import Link from 'next/link';


const Blog = () => {
  // console.log(props)
  const [blog, setBlog] = useState([]);
  useEffect(()=>{
    // console.log("allright");
  fetch('http://localhost:3000/api/blog').then((data)=>{
    return data.json();
  }).then((blogs)=>{
    // console.log(blogs);
    setBlog(blogs);
    // console.log("done");
  })
   
  },[])
  return <div>
    <main className={styles.main}>
      {blog.map((blogitems)=>{
        return <div key={blogitems.title}>
          <div className={styles.blogitem}>
            <Link href = {`../blogpost/${blogitems.slug}`}>
            <h3>{blogitems.title}</h3></Link>
            <p>{blogitems.content.substr(0,100)}</p>
          </div>
        </div>
      })}
    </main>
  </div>;
};

// export async function getServerSideProps(context){
//    let data = await fetch('http://localhost:3000/api/blog');
//   let blogitems = await data.json();

 
//   return {
//     props :{blogitems}
//   }
// }

export default Blog;
