import { useState } from "react";
import CardComponent from "../../Shared/Components/CardComponent/CardComponent";
import "./service.css";

const Service = () => {
  const [selectedTab, setSelectedTab] = useState([
    "Motion",
    "Premium Pro",
    "Photoshop",
    "Adobe XD",
    "Illustrator",
    "Indesign",
  ]);

  const data = {
    motionData: [
      {
        src: "https://i.ibb.co/N9Wg9Qp/hero.jpg",
        alt: "Hero Image",

        description: "lorem ipsum dolor sit amet, consectetur adipiscing. Cum soc etras natoque penat bid id in reprehenderit in voluptate velit esse",
      },
      {
        src: "https://i.ibb.co/5YywmzK/about.jpg",
        alt: "About Image",

        description: "lorem ipsum dolor sit amet, consectetur adipiscing. Cum soc etras natoque penat bid id in reprehenderit in voluptate velit esse",
      },
    ],
    photoshopData: [
      {
        src: "https://i.ibb.co/N9Wg9Qp/hero.jpg",
        alt: "Hero Image",

        description: "lorem ipsum dolor sit amet, consectetur adipiscing. Cum soc etras natoque penat bid id in reprehenderit in voluptate velit esse",
      },
      {
        src: "https://i.ibb.co/5YywmzK/about.jpg",
        alt: "About Image",

        description: "lorem ipsum dolor sit amet, consectetur adipiscing. Cum soc etras natoque penat bid id in reprehenderit in voluptate velit esse",
      },
      {
        src: "https://i.ibb.co/5xCHkd5/hero.png",
        alt: "Hero Image 2",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing. Cum soc etras natoque penat bid id in reprehenderit in voluptate velit esse",
      },
    ],

    adobexdData: [
      {
        src: "https://i.ibb.co/N9Wg9Qp/hero.jpg",
        alt: "Hero Image",

        description: "lorem ipsum dolor sit amet, consectetur adipiscing. Cum soc etras natoque penat bid id in reprehenderit in voluptate velit esse",
      },
      {
        src: "https://i.ibb.co/5YywmzK/about.jpg",
        alt: "About Image",

        description: "lorem ipsum dolor sit amet, consectetur adipiscing. Cum soc etras natoque penat bid id in reprehenderit in voluptate velit esse",
      },
      {
        src: "https://i.ibb.co/5xCHkd5/hero.png",
        alt: "Hero Image 2",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing. Cum soc etras natoque penat bid id in reprehenderit in voluptate velit esse",
      },
    ],
    illustratorData: [
      {
        src: "https://i.ibb.co/N9Wg9Qp/hero.jpg",
        alt: "Hero Image",

        description: "lorem ipsum dolor sit amet, consectetur adipiscing. Cum soc etras natoque penat bid id in reprehenderit in voluptate velit esse",
      },
      {
        src: "https://i.ibb.co/5YywmzK/about.jpg",
        alt: "About Image",

        description: "lorem ipsum dolor sit amet, consectetur adipiscing. Cum soc etras natoque penat bid id in reprehenderit in voluptate velit esse",
      },
      {
        src: "https://i.ibb.co/5xCHkd5/hero.png",
        alt: "Hero Image 2",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing. Cum soc etras natoque penat bid id in reprehenderit in voluptate velit esse",
      },
    ],

    indesignData: [
      {
        src: "https://i.ibb.co/N9Wg9Qp/hero.jpg",
        alt: "Hero Image",

        description: "lorem ipsum dolor sit amet, consectetur adipiscing. Cum soc etras natoque penat bid id in reprehenderit in voluptate velit esse",
        
      },
      {
        src: "https://i.ibb.co/5YywmzK/about.jpg",
        alt: "About Image",

        description: "lorem ipsum dolor sit amet, consectetur adipiscing. Cum soc etras natoque penat bid id in reprehenderit in voluptate velit esse",
      },
      {
        src: "https://i.ibb.co/5xCHkd5/hero.png",
        alt: "Hero Image 2",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing. Cum soc etras natoque penat bid id in reprehenderit in voluptate velit esse",
        
      },
    ],
    premiumProData: [
      {
        src: "https://i.ibb.co/N9Wg9Qp/hero.jpg",
        alt: "Hero Image",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing. Cum soc etras natoque penat bid id in reprehenderit in voluptate velit esse",
      },
      {
        src: "https://i.ibb.co/5YywmzK/about.jpg",
        alt: "About Image",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing. Cum soc etras natoque penat bid id in reprehenderit in voluptate velit esse",
      },
      {
        src: "https://i.ibb.co/5xCHkd5/hero.png",
        alt: "Hero Image 2",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing. Cum soc etras natoque penat bid id in reprehenderit in voluptate velit esse",
      },
    ],
  };

  return (
    <div className="bg-bg-color pt-4">
      <div className="bg-bg-color py-6">
        <h2 className="text-primary-color text-center pt-4 text-3xl font-semibold">
          What I do
        </h2>
      </div>

      <div className="tabs flex justify-center items-center gap-4 text-text-color">
        <button onClick={() => setSelectedTab("Premium Pro")}>
          Premium Pro
        </button>
        <button onClick={() => setSelectedTab("Motion")}>Motion</button>
        <button onClick={() => setSelectedTab("Photoshop")}>Photoshop</button>
        <button onClick={() => setSelectedTab("Adobe XD")}>Adobe XD</button>
        <button onClick={() => setSelectedTab("Illustrator")}>
          Illustrator
        </button>
        <button onClick={() => setSelectedTab("Indesign")}>Indesign</button>
      </div>

      {selectedTab === "Premium Pro" && (
        <div className="image-gallery flex justify-center flex-wrap gap-5">
          {data.premiumProData.map((image, index) => (
            <CardComponent
              key={index}
              src={image.src}
              alt={image.alt}
              // title={image.title}
              description={image.description}
              style={image.style}
            />
          ))}
        </div>
      )}
      {selectedTab === "Motion" && (
        <div className="image-gallery flex justify-center flex-wrap gap-5">
          {data.motionData.map((image, index) => (
            <CardComponent
              key={index}
              src={image.src}
              alt={image.alt}
              // title={image.title}
              description={image.description}
              style={image.style}
            />
          ))}
        </div>
      )}
      {selectedTab === "Photoshop" && (
        <div className="image-gallery flex justify-center flex-wrap gap-5">
          {data.photoshopData.map((image, index) => (
            <CardComponent
              key={index}
              src={image.src}
              alt={image.alt}
              // title={image.title}
              description={image.description}
              style={image.style}
            />
          ))}
        </div>
      )}
      {selectedTab === "Adobe XD" && (
        <div className="image-gallery flex justify-center flex-wrap gap-5">
          {data.adobexdData.map((image, index) => (
            <CardComponent
              key={index}
              src={image.src}
              alt={image.alt}
              // title={image.title}
              description={image.description}
              style={image.style}
            />
          ))}
        </div>
      )}
      {selectedTab === "Illustrator" && (
        <div className="image-gallery flex justify-center flex-wrap gap-5">
          {data.illustratorData.map((image, index) => (
            <CardComponent
              key={index}
              src={image.src}
              alt={image.alt}
              // title={image.title}
              description={image.description}
              style={image.style}
            />
          ))}
        </div>
      )}
      {selectedTab === "Indesign" && (
        <div className="image-gallery flex justify-center flex-wrap gap-5">
          {data.indesignData.map((image, index) => (
            <CardComponent
              key={index}
              src={image.src}
              alt={image.alt}
              // title={image.title}
              description={image.description}
              style={image.style}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Service;
