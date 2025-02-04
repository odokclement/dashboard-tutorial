import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
  TableCaption,
  TableFooter,
} from "../ui/table";
import { Post } from "@/Types/post";
import Link from "next/link";
import posts from "@/data/post";
import { Button } from "../ui/button";

interface PostTableProps {
  limit?: number;
  title?: string;
}

const PostTable = ({ limit, title }: PostTableProps) => {
  // sort posts by date in descending order
  const sortedPosts: Post[] = [...posts].sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  // limit the number of posts to display
  const limitedPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;
  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">{title ? title : "Posts"}</h3>
      <Table>
        <TableCaption>A List of Recent Posts</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden md:table-cell text-right ">
              Date
            </TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {limitedPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell className="hidden md:table-cell">
                {post.author}
              </TableCell>
              <TableCell className="hidden md:table-cell text-right">
                {post.date}
              </TableCell>
              <TableCell>
                <Link href={`/posts/edit/${post.id}`}>
                  <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                    Edit
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PostTable;
