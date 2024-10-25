import { blogsData } from "../../utils/data";
import Card from "../../comps/blog/card";
import styles from "./blogs.module.css";
import { useEffect, useState } from "react";
import Toggler from "../../comps/blog/toggler";

const Blogs = () => {
  const [isActive, setIsActive] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortedCategory, setSortedCategory] = useState([]);

  console.log(sortedCategory);

  useEffect(() => {
    const sortedBlogs = () => {
      let filteredBlogs = [...blogsData];

      if (selectedCategory !== "All") {
        filteredBlogs = filteredBlogs.filter(
          (blog) => blog.category === selectedCategory
        );
      }
      setSortedCategory(filteredBlogs);
    };

    sortedBlogs();
  }, [selectedCategory]);

  return (
    <div className={styles.blogPage}>
      <Toggler
        isActive={isActive}
        setIsActive={setIsActive}
        setSelectedCategory={setSelectedCategory}
      />

      <div className={styles.blogCardComp}>
        {sortedCategory.map((blog, i) => (
          <Card blog={blog} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
