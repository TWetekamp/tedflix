import Greeting from "../../components/usernameForm/greeting";
import UsernameForm from "../../components/usernameForm/usernameForm";
import './style.css';

const Home = () => {
    return (
        <>
            <p>TEDFLIX HomePage</p>
            <div className="greeting">
                <Greeting />
                <UsernameForm />
            </div>
            <div>
                <div className="home-page">
                    <br></br>
                    <div className="movie-logos">
                        <a href="https://www.hbo.com/" target="_blank" rel="noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HBO_logo.svg/422px-HBO_logo.svg.png" alt="HBO logo" height="45" /></a>
                        <a href="https://www.tcm.com/" target="_blank" rel="noreferrer"><img src="https://res.cloudinary.com/clearlink/image/upload/f_auto,q_auto/w_640/v1589303472/Dish/images/isolated/~png-logo-exports-for-channel-page-hero/TCM-Default-Black_2x_x0rxwb" alt="TCM logo" height="45" /></a>
                        <a href="https://www.imdb.com/" target="_blank" rel="noreferrer"><img src="https://m.media-amazon.com/images/G/01/IMDb/BG_square._CB1509067564_SY230_SX307_AL_.png" alt="IMDB logo" height="45" /></a>
                        <a href="https://www.mgm.com/" target="_blank" rel="noreferrer"><img src="https://www.nme.com/wp-content/uploads/2021/03/MGM-Leo-the-lion-logo-696x442.jpg" alt="MGM logo" height="45" /></a>
                        <a href="https://www.sonypictures.com/" target="_blank" rel="noreferrer"><img src="https://entertainment.time.com/wp-content/uploads/sites/3/2012/09/columbia.jpg?resize=720,480" alt="Columbia Pictures logo" height="45" /></a>
                        <a href="https://www.20thcenturystudios.com/" target="_blank" rel="noreferrer"><img src="https://entertainment.time.com/wp-content/uploads/sites/3/2012/09/20th_century_fox.jpg?resize=720,480" alt="20th Century Fox logo" height="45" /></a>
                        <a href="https://www.universalpictures.com/" target="_blank" rel="noreferrer"><img src="https://entertainment.time.com/wp-content/uploads/sites/3/2012/09/universal.jpg?resize=720,480" alt="Universal logo" height="45" /></a>
                        <a href="https://en.wikipedia.org/wiki/RKO_Pictures" target="_blank" rel="noreferrer"><img src="https://upload.wikimedia.org/wikipedia/en/c/ca/RKO_Logo_2009.png" alt="RKO Radio Pictures logo" height="45" /></a>
                        <a href="https://www.warnerbros.com/" target="_blank" rel="noreferrer"><img src="https://entertainment.time.com/wp-content/uploads/sites/3/2012/09/warner_bros-_pictures_intro.jpg?resize=720,480" alt="RKO Radio Pictures logo" height="45" /></a>
                        <a href="http://www.paramountstudios.com/" target="_blank" rel="noreferrer"><img src="https://entertainment.time.com/wp-content/uploads/sites/3/2012/09/paramount.jpg?resize=720,480" alt="Paramount Pictures logo" height="45" /></a>
                    </div>
                    <br></br>
                    <h1>"Ars Gratia Artis" - "Art for art's sake"</h1>
                    <br></br>
                    <p>Movies affect many of us powerfully because the combined impact of images, music, dialogue, lighting, sound and special effects can elicit deep feelings and help us reflect on our lives. They can help us to better understand our own lives, the lives of those around us and even how our society and culture operate.</p>
                    <br></br>
                    <p>"I am big! It's the pictures that got small."</p>
                    <p>"Why don't you come up sometime and see me?</p>
                    <p>"Play it, Sam. Play 'As Time Goes By."</p>
                    <p>"You can't handle the truth!"</p>
                    <p>"After all, tomorrow is another day!"</p>
                    <p>"Round up the usual suspects."</p>
                    <p>"I'll have what she's having."</p>
                    <p>"You know how to whistle, don't you, Steve? You just put your lips together and blow."</p>
                    <p>"You're gonna need a bigger boat."</p>
                    <p>"Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!"</p>
                    <p>"We'll always have Paris."</p>
                </div>  

            </div>
        </>
    )     
};

export default Home;