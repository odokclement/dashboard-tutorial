import BackButton from "@/components/BackButton";
import PostPagination from "@/components/Posts/PostPagination";
import PostTable from "@/components/Posts/PostTable"

const PostPage = () => {
    return ( <>
       <BackButton text="Go Back" link="/"/>
        <PostTable />
        <PostPagination />
    </> );
}
 
export default PostPage;