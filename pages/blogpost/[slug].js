import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from "@/styles/Slug.module.css";

const slug = (props) => {
  const [blog, setBlog] = useState(props.blog);
  // const router = useRouter();
  // useEffect(()=>{
  //   if (!router.isReady) return;
  //   const { slug } = router.query;
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((data)=>{
  //     return data.json();
  //   }).then((blog)=>{
  //     // console.log(blog);
  //     setBlog(blog);
  //     // console.log("done");
  //   })
  // },[router.isReady])
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div className = {styles.content}>
          {blog && blog.content}
        </div>
      </main >
    </div>
  )
}

export async function getServerSideProps(context){
  // const router = useRouter();
  // console.log(router.query);
    console.log(context.query);
    const { slug } = context.query;
    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
    let blog = await data.json();
  


 return {
   props :{blog}
 }
}

export default slug
