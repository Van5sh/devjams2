import { useRouter } from 'next/router';
import Grid from '../../components/table';

const TimetablePage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Check if `id` is available before rendering the grid component
  if (!id) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Timetable ID: {id}</h1>
      {/* Pass the `id` as a prop to the Grid component */}
      <Grid id={Array.isArray(id) ? id[0] : id} />
    </div>
  );
};

export default TimetablePage;
