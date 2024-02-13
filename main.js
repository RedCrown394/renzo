html,
body {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

body {
  display: flex;
  margin: auto;
  background-image: url(https://assets.codepen.io/4927073/Group2.png), url(https://assets.codepen.io/4927073/Background6.png);
  background-image: url(https://assets.codepen.io/4927073/Group2.png), linear-gradient(33deg, #edf2f7, #edf2f7);
  background-image: url(https://assets.codepen.io/4927073/Group2.png),  linear-gradient(33deg, #2c303a, #2c303a);
  background-size: cover;
  background-position: 50% 50%;
}

.envelope {
  content: url(https://assets.codepen.io/4927073/Envelope3.png);
  width: 430px;
  position: absolute;
  left: 18%;
  top: 3%;
  filter: drop-shadow(1.5px 0.75px 1.75px #4d4d4d);
}

.card {
  position: relative;
  width: 262px;
  height: 372px;
  margin: auto;
  box-shadow: inset 5px 0px 15px 0px rgba(0, 0, 0, 0.1),
    3px 0px 3px -2px rgba(0, 0, 0, 0.3);
  background-color: #fffffa;
  transform: scale(1.05);
  left: 12px;
}

.front {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: -10px 0px 0px -10px;
  margin: auto;
  border: 1px solid #e0e0db;
  backface-visibility: hidden;
  background-color: #e8e6e3;
  background-size: contain;
  transform-style: preserve-3d;
  transform-origin: 0% 50%;
  transform: perspective(800px) rotateY(0deg);
  transition: all 1s ease-in-out;
  filter: saturate(1.125) brightness(1.0125);
}

.card:hover .front {
  transform: perspective(800px) rotateY(-170deg);
  background-color: rgb(205, 205, 205);
}

.card:hover .back {
  transform: perspective(800px) rotateY(-170deg);
  box-shadow: 7px 0px 2px 0px rgba(0, 0, 0, 0.3),
    inset 2px 0px 15px 0px rgba(0, 0, 0, 0.1);
  background-color: #fffffa;
}

.back {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: -10px 0px 0px -10px;
  margin: auto;
  backface-visibility: visible;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.25));
  box-shadow: inset 5px 0px 15px 0px rgba(0, 0, 0, 0.1),
    3px 0px 3px 1px rgba(0, 0, 0, 0.3);
  transform-style: preserve-3d;
  transform-origin: 0% 50%;
  transform: perspective(800px) rotateY(0deg);
  transition: all 1s ease-in-out;
  background-color: #fff;
}

.text-container {
  width: 80%;
  height: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  color: #929292;
}

.f-box {
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: transparent;
  box-shadow: 0 2px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.f-box img {
  margin-top: 0px;
  height: 100%;
  width: auto;
}

@media (max-width: 675px) {
  .envelope {
    width: 380px;
  }

  .card {
    height: 330px;
    width: 230px;
  }
}

.text-container button {
    display: none; /* Hide the button initially */
    opacity: 0; /* Start with 0 opacity */
    transition: opacity 0.5s ease-in-out 0.5s; /* Delay the start of the transition by 3 seconds */
    bottom: 10px;
    right: 10px;
    display: inline-block; /* Show the button on hover */
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  
  .card:hover .text-container button {
    display: inline-block; /* Show the button on hover */
    opacity: 1; /* Set opacity to 1 during hover */
    
  }
  .fade-out {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
