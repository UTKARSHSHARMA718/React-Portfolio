import React, { useState, useEffect } from "react";

import "./Books.css";
import BooksInfo from "./BooksInfo";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";
// import AnimatePage from "../../AnimatePage";

const Books = (props) => {
  const [loadBookInfo, setLoadBookInfo] = useState(false);
  const [LoadImage, setLoadImage] = useState(false);
  const [bookName, setBookName] = useState("h");
  const [buy, setBuy] = useState("");

  const handleOnBookInfo = (name, buyLink) => {
    setBookName(name);
    setBuy(buyLink);
    setLoadBookInfo(true);
  };

  const obj = [
    {
      name: "Rich dad Poor dad",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51u8ZRDCVoL._SX330_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Rich-Dad-Poor-Middle-Updates/dp/1612680194",
    },
    {
      name: "Black Swan",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51q4Y+EKElL._SY344_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Black-Swan-Impact-Highly-Improbable/dp/0141034599/ref=sr_1_1?keywords=black+swan+book&qid=1653036913&s=books&sprefix=black+swan+b%2Cstripbooks%2C203&sr=1-1",
    },
    {
      name: "Elon Musk",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/5179mrE+WWL._SX312_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Elon-Musk-Billionaire-SpaceX-Shaping/dp/0753555646/ref=sr_1_3?crid=3054I2UAWI6E3&keywords=elon+musk&qid=1653036937&s=books&sprefix=elon+musk%2Cstripbooks%2C192&sr=1-3",
    },
    {
      name: "Fooled by randomness",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41EwFs5ypGL._SX324_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Fooled-Randomness-Hidden-Chance-Markets/dp/0141031484/ref=sr_1_1?keywords=fooled+by+randomness+by+nassim+nicholas+taleb&qid=1653036968&s=books&sprefix=fooled+by+%2Cstripbooks%2C200&sr=1-1",
    },
    {
      name: "Skin in the game",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/I/411FDiLAiDL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      buyLink:
        "https://www.amazon.in/Skin-Game-Hidden-Asymmetries-Daily/dp/0141982659/ref=sr_1_1?keywords=skin+in+the+game+nassim+taleb&qid=1653036993&s=books&sprefix=skin%2Cstripbooks%2C199&sr=1-1",
    },
    {
      name: "Antifragile",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/I/515oFiycW7L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      buyLink:
        "https://www.amazon.in/Antifragile-Things-that-Gain-Disorder/dp/0141038225/ref=sr_1_1?keywords=antifragile+by+nassim+taleb&qid=1653036980&s=books&sprefix=anti%2Cstripbooks%2C211&sr=1-1",
    },
    {
      name: "Thinking fast and slow",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41I0fK0G9kL._SX328_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Thinking-Fast-Penguin-Press-Non-Fiction/dp/0141033576/ref=sr_1_1?keywords=thinking+fast+and+slow&qid=1647713901&s=books&sprefix=thinking+fast+a%2Cstripbooks%2C195&sr=1-1",
    },
    {
      name: "Psychology of money",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      buyLink:
        "https://www.amazon.in/Psychology-Money-Morgan-Housel/dp/9390166268/ref=sr_1_1_sspa?keywords=psychology+of+money+book&qid=1647714106&s=books&sprefix=psy%2Cstripbooks%2C201&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE4OEVHMEk2QTBPVDkmZW5jcnlwdGVkSWQ9QTA4NzU0NjMxNVFHRU1QT0kxQUhDJmVuY3J5cHRlZEFkSWQ9QTAxNDUxNTgzQjgySzVVM1k5VVdIJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
    },
    {
      name: "Intelligent Investor",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51DLoxAJ68L._SX324_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Intelligent-Investor-English-Paperback-2013/dp/0062312685/ref=sr_1_3?keywords=intelligent+investor&qid=1647714154&s=books&sprefix=inte%2Cstripbooks%2C200&sr=1-3",
    },
    {
      name: "One upon wall street",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/518dmAdu+oL._SY344_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/One-Up-Wall-Street-Already/dp/0743200403/ref=sr_1_1?keywords=once+upon+a+wall+street&qid=1647714202&s=books&sprefix=once+upon+a+wa%2Cstripbooks%2C194&sr=1-1",
    },
    {
      name: "Astrophysics for the people in hurry",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/I/51rSk5uaqiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      buyLink:
        "https://www.amazon.in/Astrophysics-People-Hurry-contemplate-cosmos/dp/B09DTBR55G/ref=sr_1_1?keywords=astrophysics+for+people+in+hurry&qid=1647714239&s=books&sprefix=astro%2Cstripbooks%2C200&sr=1-1",
    },
    {
      name: "The Grand Design",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/I/51gIWweOH8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      buyLink:
        "https://www.amazon.in/Grand-Design-Leonard-Mlodinow/dp/0553819224/ref=sr_1_1?keywords=the+grand+design+by+stephen+hawking&qid=1647714285&s=books&sprefix=the+grand+des%2Cstripbooks%2C195&sr=1-1",
    },
    {
      name: "Brief answers of Big Questions",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/I/41mOZ1xLFgL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      buyLink:
        "https://www.amazon.in/Brief-Answers-Big-Questions-Stephen/dp/1473695996/ref=sr_1_1?keywords=brief+answers+to+the+big+questions+by+stephen+hawking&qid=1647714338&s=books&sprefix=the+answer+of+%2Cstripbooks%2C346&sr=1-1",
    },
    {
      name: "Influence",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51fAIIVixcL._SX333_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/influence-Psychology-Persuasion-Business-Essentials/dp/006124189X/ref=sr_1_4?keywords=influence&qid=1647714387&s=books&sprefix=influ%2Cstripbooks%2C204&sr=1-4",
    },
    {
      name: "Kafka on the shore",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl: "https://m.media-amazon.com/images/I/31fjnqvjOvL.jpg",
      buyLink:
        "https://www.amazon.in/Kafka-Shore-Vintage-Magic-Book-ebook/dp/B005TKC2P2/ref=sr_1_3?crid=2VAE7L0P5ZB0H&keywords=kafka&qid=1647714398&s=books&sprefix=kakfka%2Cstripbooks%2C194&sr=1-3",
    },
    {
      name: "Noice",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41qStCKhfVL._SX323_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Noise-Daniel-Kahneman/dp/0008309000/ref=sr_1_1?keywords=noise+daniel+kahneman&qid=1647714419&s=books&sprefix=noice+denial+k%2Cstripbooks%2C189&sr=1-1",
    },
    {
      name: "Blink",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51E2Vpz1AmL._SX339_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Blink-Power-Thinking-without-thinking/dp/0141014598/ref=sr_1_1?crid=145QH58OEHN5W&keywords=blink&qid=1647714430&s=books&sprefix=blink%2Cstripbooks%2C197&sr=1-1",
    },
    {
      name: "Outliers",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41gNikCRxfL._SX324_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Outliers-Story-Success-Malcolm-Gladwell/dp/0141036257/ref=sr_1_1?keywords=outliers&qid=1647714439&s=books&sprefix=out%2Cstripbooks%2C201&sr=1-1",
    },
    {
      name: "Principles",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41IZmTCNNzL._SX317_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Changing-World-Order-Nations-Succeed/dp/1471196690/ref=sr_1_4?crid=13MZZFUHF3S4Z&keywords=principles&qid=1647714451&s=books&sprefix=principles%2Cstripbooks%2C204&sr=1-4",
    },
    {
      name: "A brief history of time",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51SWYYvk+KL._SX319_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Brief-History-Time-Black-Holes/dp/0553175211/ref=sr_1_2?keywords=a+brief+history+of+time&qid=1647714466&s=books&sprefix=a+breif+his%2Cstripbooks%2C202&sr=1-2",
    },
    {
      name: "Quantum",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41jO7v7Gf1L._SX298_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Quantum-Manjit-Kumar/dp/9380143109/ref=sr_1_3?crid=14GC53O66QQM3&keywords=quantum&qid=1647714650&s=books&sprefix=quantum%2Cstripbooks%2C208&sr=1-3",
    },
    {
      name: "Schodienger's cat",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51LyuQ5aQCL._SX319_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Search-Schrodingers-Cat-Updated/dp/0552125555/ref=sr_1_1?keywords=schrodinger+cat+book&qid=1647714659&s=books&sprefix=schro%2Cstripbooks%2C216&sr=1-1",
    },
    {
      name: "Structures",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41d7Bg6Xb9L._SX331_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Structures-J-Gordon/dp/0306812835/ref=sr_1_2?keywords=structures+why+things+don%27t+fall+down&qid=1647714687&sprefix=structures+why%2Caps%2C199&sr=8-2",
    },
    {
      name: "Seneca",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/510RH1nJgQL._SX326_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Seneca-Letters-Stoic-Penguin-Classics/dp/0140442103/ref=sr_1_3?crid=31WIPQIUP047A&keywords=seneca&qid=1647714695&sprefix=senec%2Caps%2C214&sr=8-3",
    },
    {
      name: "Steve Jobs",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41ZlN7iry-L._SX317_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Steve-Jobs-Walter-Isaacson/dp/034914043X/ref=sr_1_3?keywords=steve+jobs&qid=1647714709&sprefix=steve%2Caps%2C198&sr=8-3",
    },
    {
      name: "Shoe Dog phil knight",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41K0Lnqfe4L._SX323_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Shoe-Dog-Memoir-Creator-NIKE/dp/1471146723/ref=sr_1_1?crid=DLVIE5FERDSO&keywords=shoedog&qid=1647714722&sprefix=shoedog%2Caps%2C183&sr=8-1",
    },
    {
      name: "Sapiens",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41yu2qXhXXL._SX324_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Sapiens-Humankind-Yuval-Noah-Harari/dp/0099590085/ref=sr_1_1?crid=22KDDP6BMQFY4&keywords=sapiens&qid=1647714731&sprefix=sapiens%2Caps%2C199&sr=8-1",
    },
    {
      name: "The Art of War",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41-0lBgMGvL._SX323_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Art-War-Sun-Tzu/dp/8184950888/ref=sr_1_1_sspa?crid=1H94S9HWC9ABV&keywords=the+art+of+war&qid=1647714741&sprefix=the+art+of+war%2Caps%2C203&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFFR0VGSlo0RDEyVEcmZW5jcnlwdGVkSWQ9QTA0MzU2OTUzSEFFTEhUNlFBSEtTJmVuY3J5cHRlZEFkSWQ9QTAxMTU1NzgxUlhNSFVHWTVJUkwyJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
    },
    {
      name: "Zero to one",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51z7mZZKRgL._SX317_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Zero-One-Start-Build-Future/dp/0753555190/ref=sr_1_1?crid=2QCWTM8KQ5D39&keywords=zero+to+one&qid=1647714753&sprefix=zero+to+one%2Caps%2C200&sr=8-1",
    },
    {
      name: "The Puple Cow",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51zZRKFZ8ZL._SX325_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Purple-Cow-Transform-Business-Remarkable/dp/014101640X/ref=sr_1_1?crid=2FAACS6AP6N63&keywords=purple+cow&qid=1647715034&sprefix=purple+cow%2Caps%2C203&sr=8-1",
    },
    {
      name: "The 12 rules of life",
      author: "kyoyski",
      decription: "lorem20",
      workID: "OL19781711W",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/412ML1Yah7L._SX324_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/12-Rules-Life-Antidote-Chaos/dp/0141988517/ref=sr_1_1?keywords=12+rules+for+life&qid=1647715041&sprefix=12+rules+%2Caps%2C194&sr=8-1",
    },
    {
      name: "Life 3.0",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51I6gja0RzL._SX323_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Life-3-0-Being-Artificial-Intelligence/dp/0141981806/ref=sr_1_1?crid=6CJ7ZHANGWI0&keywords=life+3.0&qid=1647715053&sprefix=life+3.0%2Caps%2C199&sr=8-1",
    },
    {
      name: "The almanac of naval ravikant",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/31bDtgec8NL._SX324_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Almanack-Naval-Ravikant-Wealth-Happiness/dp/9354893899/ref=sr_1_1?keywords=the+almanack+of+naval+ravikant&qid=1647715060&sprefix=the+alma%2Caps%2C199&sr=8-1",
    },
    {
      name: "SuperIntelligence",
      author: "kyoyski",
      decription: "lorem20",
      workID: "",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/519H6qwHjqL._SX328_BO1,204,203,200_.jpg",
      buyLink:
        "https://www.amazon.in/Superintelligence-Dangers-Strategies-Nick-Bostrom/dp/0198739834/ref=sr_1_3?crid=OKUZRBAIECR9&keywords=superintelligence+book&qid=1647715076&sprefix=superintelligence+book%2Caps%2C195&sr=8-3",
    },
  ];

  //! unable to load images
  const apiKey = "AIzaSyCUbECFMXyTKSFvtgu-S5OIbestJRc8d4U";
  let res;
  // API for books
  async function booksFetch() {
    obj.map(async (o) => {
      const books = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          o.name +
          "&download=epub&key=" +
          apiKey +
          "&maxResults=33"
      );
      res = await books.json();

      o.imageUrl = res.items[0].volumeInfo.imageLinks.thumbnail;
    });

    setLoadImage(true);
  }

  useEffect(() => {
    booksFetch();
  }, []);
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{duration:1.5}}
  >
      <h1>Books Corner</h1>
      <p id="para"></p>

      {LoadImage &&
        !loadBookInfo &&
        obj.map((o) => {
          return (
            <div
              className="card bookscard"
              onClick={() => handleOnBookInfo(o.name, o.buyLink)}
            >
              <img class="cardIMG" src={o.imageUrl} alt="image" />
              <div
                className="card-body"
                style={{ backgroundColor: "greenyellow" }}
              >
                <p
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "",
                  }}
                >
                  {o.name}
                </p>
              </div>
            </div>
          );
        })}

      {loadBookInfo && (
        <BooksInfo
          name={bookName}
          buylink={buy}
          setLoadBookInfo={setLoadBookInfo}
        />
      )}
      <Particles
        id="tsparticles"
        init={props.particlesInit}
        loaded={props.particlesLoaded}
        options={props.particlesOptions}
      />
    </motion.div>
  );
};

export default Books;
