import { useQuery } from "@tanstack/react-query";

// Define a fetch function that can be used to fetch data from an API
// const fetchData = async () => {
//   const res = await fetch("https://fakestoreapi.com/products?limit=5");
//   return res.json();
// };

const ReactQueryExample = () => {
  // // Use the useQuery hook to handle data fetching and caching
  // const { data, error, isLoading } = useQuery(["fetchData"], fetchData);

  // // Handle loading state
  // if (isLoading) return <div>Loading...</div>;
  // // Handle error state
  // if (error) return <div>Error loading data</div>;
  // console.log(data)
  // // Render the fetched data
  // return (
  //   <div>
  //     {console.log(data)}

  //     {data.map((item) => (
  //       <div key={item.id}>
  //         {item.title} <img src={item.image} />
  //       </div>
  //     ))}
  //   </div>
  // );
  
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {console.log(data)}
      {data.map((item) => (
        <div key={item.id}>
          {item.title} <img src={item.image} />
        </div>
      ))}
    </div>
  );
};

export default ReactQueryExample;
