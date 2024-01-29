// import { usePostQuery, usePostsQuery } from "../services/postApi";

// function Cards() {
//   const { data, error, isLoading, isFetching, isSuccess } = usePostsQuery();
//   return (
//     <div>
//       <h2>Json List</h2>
//       {isLoading && <h2>...Loading</h2>}
//       {isFetching && <h2>...Fetching Information</h2>}
//       {error && <h2>Something went wrong.</h2>}
//       {isSuccess && (
//         <div>
//           {data.map((posts) => {
//             return (
//               <div key={posts.userId}>
//                 <p>{posts.title}</p>
//                 <span><PostDetails id={posts.id}/></span>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// export const PostDetails = ({ id }: { id: Number }) => {
//   const { data } = usePostQuery(id);
//   return (
//     <pre>{JSON.stringify(data, undefined, 2)}</pre>
//   )
// };

// export default Cards;

// import { usePostsQuery } from "../services/postApi";

export default function Cards() {
 // const { data, error, isLoading, isFetching, isSuccess } = usePostsQuery();
  //console.log(" data, error, isLoading, isFetching, isSuccess ",  data, error, isLoading, isFetching, isSuccess)
  return (
    <div>
      {/* <h2>Json List</h2>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...Fetching Information</h2>}
      {error && <h2>Something went wrong.</h2>}
      {isSuccess && (
        <div>
          {data.map((posts) => {
            return (
              <div key={posts.id}>
                <p>{posts.title}</p>
              </div>
            );
          })}
        </div>
      )} */}


    </div>
  );
}
