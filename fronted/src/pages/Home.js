import { useEffect } from 'react';
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from '../hook/useWorkoutsContext'

function Home() {
    const { workouts, dispatch } = useWorkoutsContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await fetch('/api/workouts');
                const json = await response.json();

                if (response.ok) {
                    dispatch({ type: 'SET_WORKOUTS', payload: json });
                }
            } catch (err) {
                console.error("Failed to fetch workouts:", err);
            }
        };

        fetchWorkouts();
    }, [dispatch]); // ✅ include dispatch in dependency array

    return (
        <div className="home">
            <div className="workouts">
                {/* ✅ Guard against null */}
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
                {/* Optional: show message if no workouts */}
                {workouts && workouts.length === 0 && <p>No workouts found.</p>}
            </div>
            <WorkoutForm />
        </div>
    );
}

export default Home;