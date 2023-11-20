import './App.scss';
import Title from '../Title/Title';
import Button from '../Button/Button';
function App() {
  return (
    <div>
        <Title size={1} addClasses="text-mainBlue hover:text-hoverOrange">
            I am testing how all it works
        </Title>
        <Title size={2} addClasses="text-mainBlue hover:text-hoverOrange">
            I am testing how all it works
        </Title>
        <Title size={3} addClasses="text-mainBlue hover:text-hoverOrange">
            I am testing how all it works
        </Title>
        <Title size={4} addClasses="text-mainBlue hover:text-hoverOrange">
            I am testing how all it works
        </Title>
        <Title size={5} addClasses="text-mainBlue hover:text-hoverOrange">
            I am testing how all it works
        </Title>
        <Title size={6} addClasses="text-mainBlue hover:text-hoverOrange">
            I am testing how all it works
        </Title>

        <Button></Button>
    </div>
  );
}

export default App;
