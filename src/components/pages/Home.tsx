import Room from './Room';

const Home = () => {
    return (
        <div className="container mx-auto mt-8 px-2.5">
            <div className="grid grid-cols-3 gap-5">
                <Room />
                <Room />
                <Room />
                <Room />
                <Room />
            </div>
        </div>
    );
};

export default Home;
